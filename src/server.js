import express from 'express';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/analyze-test', async (req, res) => {
    try {
      console.log("analizying...")
      const userPrompt = req.body.prompt; // El texto que el usuario envió
      const titulo = req.body.title; // El texto que el usuario envió
      const completePrompt = `El siguiente texto es una prueba en Gherkin, el titulo del escenario es ${titulo}, dadas las buenas prácticas generales en Gherkin, escríbeme punto por punto (enumeralos) qué es lo que podría mejorar: ${userPrompt} `;
  
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: completePrompt }],
        model: "gpt-4-0613",
      });
      let response = chatCompletion.choices[0].message.content;
      res.json({ response: response});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
