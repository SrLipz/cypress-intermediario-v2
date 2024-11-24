describe('Login', () => {
  beforeEach(() => {
    cy.login()
  });
  
  it('successfully', () => {
    cy.get('[data-testid="user-avatar-content"]').should('exist');
  })
  
})
