describe('Login', () => {
  beforeEach(() => {
    cy.login()
  });
  
  it('successfully', () => {
    cy.login()
    cy.get('[data-testid="user-avatar-content"]').should('exist');
  })
  
})
