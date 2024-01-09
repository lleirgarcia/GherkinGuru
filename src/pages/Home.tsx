import React, { useState } from 'react';
import { IonContent, IonPage, IonTextarea, IonButton, IonSpinner, IonInput } from '@ionic/react';
import axios from 'axios';
import './Home.css';

const SelectTest: React.FC = () => {
  const [testInput, setTestInput] = useState('');
  const [scenarioTitle, setScenarioTitle] = useState('');
  const [serverResponse, setServerResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (event: CustomEvent) => {
    setTestInput(event.detail.value);
  };

  const handleTitleInput = (event: CustomEvent) => {
    setScenarioTitle(event.detail.value);
  };

  const analyzeTest = async () => {
    setIsLoading(true); // Start loading
    const YOUR_SERVER_ENDPOINT = 'http://localhost:3001/analyze-test';
    
    try {
      // Include the title in the body of the POST request
      const response = await axios.post(
        YOUR_SERVER_ENDPOINT, 
        { title: scenarioTitle, prompt: testInput }, 
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      setServerResponse(response.data.response);
    } catch (error) {
      console.error("Hubo un error al procesar la prueba", error);
      setServerResponse('');
    }
    setIsLoading(false); // Stop loading
  };

  const ResponseList = ({ response }) => {
    const points = response.split(/\n\n/);
    return (
      <div className="response-box">
        {points.map((point, index) => (
          <p key={index}>{point}</p>
        ))}
      </div>
    );
  };

  return (
    <IonPage className="select-test-page">
      <IonContent fullscreen>
        <div className="content-wrapper">
          <IonInput
            value={scenarioTitle}
            onIonChange={handleTitleInput}
            placeholder="Título del escenario"
            className="scenario-title-input"
          />
          <IonTextarea
            className="select-test-textarea"
            value={testInput}
            onIonChange={handleInput}
            placeholder="Escribe tu test aquí"
            autoGrow={true}
            rows={10}
          />
          <IonButton
            className="select-test-button"
            expand="block"
            onClick={analyzeTest}
            disabled={isLoading}
          >
            {isLoading ? <IonSpinner name="crescent" /> : 'Revisa tu test'}
          </IonButton>
          {serverResponse && <ResponseList response={serverResponse} />}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SelectTest;