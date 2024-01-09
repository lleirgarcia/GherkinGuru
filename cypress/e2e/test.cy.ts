describe('Base tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8100'); // adjust the URL to match your local development environment
  });

  it('should have an input for the scenario title', () => {
    cy.get('.scenario-title-input').should('exist');
  });

  it('should have a textarea for writing the test', () => {
    cy.get('.select-test-textarea').should('exist');
  });

  it('should have a button to submit the test', () => {
    cy.get('.select-test-button').should('exist');
  });

  it('should show a spinner while loading', () => {
    cy.get('.select-test-button').click();
    cy.get('ion-spinner').should('exist');
  });

  it('fills in the scenario title and test, then checks for a response', () => {
    // Visit the page where the test is located
    
    // Fill in the scenario title
    cy.get('.scenario-title-input') // Replace with your actual selector
      .type('Student requests schedule and has unfinished classes');
    
    // Fill in the Gherkin test
    cy.get('.select-test-textarea') // Replace with your actual selector
      .type('GIVEN Student has unfinished classes{enter}WHEN Student requests class schedule{enter}THEN Student’s customized training plan is viewable');
    
    // Click the "Revisa tu test" button
    cy.get('.select-test-button') // Replace with your actual selector
      .click();
    
    // Assert a response is displayed
    cy.get('.response-box', { timeout: 25000 }) // Wait up to 10 seconds for the response container to appear
      .should('exist');
  });
});
  