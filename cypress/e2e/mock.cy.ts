describe('Test for analyzeTest service', () => {
    // beforeEach(() => {
    //     cy.visit('http://localhost:8100'); 
    // });
  
    // En esta prueba, validamos que al hacere click en "revisa tu test", el servicio va a devolver una respuesta, en este caso la respuesta esta mockeada con Cypress.
    // Esta funcionalidad es util cuando no tenemos disponibilidad en el servicio, los juegos de datos no son estables o correctos.
      // Control del Entorno de Prueba: Permite simular respuestas del servidor bajo condiciones específicas, incluyendo errores, para probar cómo el frontend maneja estos escenarios.
      // Consistencia en los Datos: Asegura que las pruebas no se vean afectadas por cambios en los datos del servidor real, lo que proporciona un entorno de prueba más estable y predecible.
      // Rapidez y Eficiencia: Reduce la dependencia de un backend operativo y mejora la velocidad de las pruebas, ya que no se realizan llamadas de red reales.      
      // Aislamiento de Pruebas: Facilita la realización de pruebas centradas en el frontend al eliminar variables incontrolables del backend.
      // Pruebas en Entornos de Desarrollo: Permite realizar pruebas incluso cuando el backend aún no está implementado o cuando se trabaja en entornos de desarrollo sin acceso al servidor de producción.
    // Con esto logramos validar que a nivel frontal, el mensaje que esperamos aparecerá, pero no estamos validando que el servicio funcione.
    
    // it('fills in the scenario title and test, then checks for a response (using mock)', () => {
    //   cy.intercept('POST', 'http://localhost:3001/analyze-test', {
    //     statusCode: 200,
    //     body: {
    //       response: 'Mocked response data'
    //     },
    //   }).as('analyzeTest');

    //   cy.get('.scenario-title-input').type('Sample Scenario Title');
    //   cy.get('.select-test-textarea').type('GIVEN Student has unfinished classes\nWHEN Student requests class schedule\nTHEN Student’s customized training plan is viewable');
    //   cy.get('.select-test-button').click();
    //   cy.wait('@analyzeTest').its('response.statusCode').should('eq', 200);
    //   cy.get('.response-box').should('contain', 'Mocked response data');
    // });

    // // En esta prueba, validamos que al hacere click en "revisa tu test", el servicio funciona y esta devolviendo una respuesta, directamente sin mocks.
    // // Con esto logramos validar que a nivel frontal, el mensaje que esperamos aparecerá.
    // it('fills in the scenario title and test, then checks for a response (using real data)', () => {
    //   cy.get('.scenario-title-input').type('Student requests schedule and has unfinished classes');
    //   cy.get('.select-test-textarea').type('GIVEN Student has unfinished classes{enter}WHEN Student requests class schedule{enter}THEN Student’s customized training plan is viewable');
    //   cy.get('.select-test-button').click();
    //   cy.get('.response-box', { timeout: 25000 }).should('exist');
    // });

    it('should get a 200 status and expected content', () => {
      cy.request('POST', 'http://localhost:3001/analyze-test').then((response) => {
        expect(response.status).to.eq(200);
        // expect(response.body).to.include('CONTENIDO_ESPERADO');
      });
    });    
  });
  