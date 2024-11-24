describe('Logout', () => {
    beforeEach(() => {
      cy.login()
    });
    
    it('successfully logout', () => {
      cy.logout()
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
  })
  