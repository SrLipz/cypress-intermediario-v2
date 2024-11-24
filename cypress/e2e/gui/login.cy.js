describe('Login', () => {
  beforeEach(() => {
    cy.login()
  });
  
  it('successfully', () => {
    cy.get('.qa-user-avatar').should('be.visible')
  })
  
})
