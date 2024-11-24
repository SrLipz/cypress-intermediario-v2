describe('Logout', () => {
    beforeEach(() => {
      cy.login()
    });
    
    it('successfully logout', () => {
      cy.logout()
    })
  })
  