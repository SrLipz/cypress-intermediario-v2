describe('Criar Projeto', () => {
    beforeEach(() => {
        cy.login()
    });
    it('Criando projeto', () => {
        cy.gui_createProject()
    });
});