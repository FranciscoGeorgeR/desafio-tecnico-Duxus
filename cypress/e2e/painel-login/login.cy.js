/// <reference types="cypress" />

import cadastroPage from "../../support/pageObjects/cadastroPage";
import loginPage from "../../support/pageObjects/loginPage";

describe('Realizando cadastro com sucesso e login com sucesso', () => {
  
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(Cypress.env('baseUrl') + '/register');
    cy.get('body').should('be.visible');
  })

  it('Deve preencher o formulário de cadastro e salvar as credenciais', () => {
    cadastroPage.preencherFormulario()
    loginPage.ClicarBotaoRegistrar()
});

it('Deve fazer login com as credenciais salvas', () => {
  cy.visit('http://localhost:8080/login')
  cadastroPage.fazerLogin()
  cadastroPage.clicarEntrar()
  cadastroPage.validarPainelLogin()

});
})
