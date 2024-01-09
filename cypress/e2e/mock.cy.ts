describe('Mocking analyzeTest service', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8100'); 
    });
  
    it('should display a mocked response after analyzeTest is called', () => {
      // Mock the POST request to the analyze-test endpoint
      cy.intercept('POST', 'http://localhost:3001/analyze-test', {
        statusCode: 200,
        body: {
          response: 'Mocked response data'
        },
      }).as('analyzeTest');
  
      // Type into the title input field
      cy.get('.scenario-title-input').type('Sample Scenario Title');
  
      // Type into the textarea field
      cy.get('.select-test-textarea').type('GIVEN Student has unfinished classes\nWHEN Student requests class schedule\nTHEN Student’s customized training plan is viewable');
  
      // Click the analyze button
      cy.get('.select-test-button').click();
  
      // Wait for the mocked request to resolve and assert the mocked response
      cy.wait('@analyzeTest').its('response.statusCode').should('eq', 200);
      
      // Check if the mocked response is displayed
      cy.get('.response-box').should('contain', 'Mocked response data');
    });
  });