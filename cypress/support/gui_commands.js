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
Cypress.Commands.add('gui_createProject',() => {
  const gui_createProject = () => {
    cy.visit('projects/new')
    cy.get('[data-qa-panel-name="blank_project"]').click()
    cy.get('[data-testid="active-panel-template"]').should('be.visible')
    cy.get('#project_name').type("Felipe")
    cy.get('#blank-project-name > .gl-flex > .gl-pr-0 > .input-group > .gl-w-full > [data-testid="select-namespace-dropdown"] > [data-testid="base-dropdown-toggle"] > .btn').click()
    cy.get('[data-testid="listbox-item-gid://gitlab/Namespaces::UserNamespace/1"] > .gl-new-dropdown-item-content > .gl-new-dropdown-item-text-wrapper').click()
    cy.get('#new_project > [data-testid="project-create-button"]').click()

  }
  gui_createProject()
})