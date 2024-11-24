Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
  ) => {
    const login = () => {
      cy.visit('/users/sign_in')
  
      cy.get("#user_login").type(user)
      cy.get("#user_password").type(password, { log: false })
      cy.get("[data-testid='sign-in-button']").click()
    }
  
    login()
  })
Cypress.Commands.add('logout',() => {
  const logout = () => {
  cy.get('[data-testid="user-avatar-content"]').should('exist');
    cy.get('[data-testid="user-avatar-content"]').click()
    cy.get('[data-testid="sign-out-link"]').click()
    cy.get('.mb-3').should('be.visible')
  }
  logout()
})