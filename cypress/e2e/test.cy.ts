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
});
  