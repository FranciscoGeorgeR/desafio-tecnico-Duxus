/// <reference types="cypress" />
import loginPage from '../../support/pageObjects/loginPage';

describe('Campos obrigatórios "e-mail, senha e confirmação de senha" ', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(Cypress.env('baseUrl') + '/register');
        cy.get('body').should('be.visible');
    })
    it('Deve exibir mensagem de erro ao tentar registrar sem preencher o campo de e-mail', () => {
        loginPage.campoEmail('teste{enter}');
        loginPage.ValidarMensagemObrigatoriaEmail();
    });

    it('Deve exibir mensagem de erro ao tentar registrar sem preencher o campo de senha', () => {
        loginPage.campoSenha('teste{enter}');
        loginPage.ValidarMensagemObrigatoriaSenha();
    });

    it('Deve exibir mensagem de erro ao tentar registrar sem preencher o campo de confirmação de senha', () => {
        loginPage.campoConfirmarSenha('Teste{enter}');
        loginPage.ValidarMensagemObrigatoriaConfirmarSenha();
    });

    it('Deve exibir mensagem de erro ao tentar registrar com senhas diferentes', () => {
        loginPage.campoEmail('teste@com.br{enter}');
        loginPage.campoSenha('teste{enter}');
        loginPage.campoConfirmarSenha('Teste{enter}');
        loginPage.ClicarBotaoRegistrar();
        loginPage.validarMensagemSenhasNaoCoincidem();
    });

    it('Deve registrar um novo usuário com e-mail e senha válidos', () => {
        loginPage.campoEmail('teste@com.br{enter}');
        loginPage.campoSenha('teste{enter}');
        loginPage.campoConfirmarSenha('teste{enter}');
        loginPage.ClicarBotaoRegistrar();
    });

    it('Deve exibir mensagem de erro ao tentar registrar um e-mail já cadastrado', () => {
        loginPage.campoEmail('teste@com.br{enter}');
        loginPage.campoSenha('teste{enter}');
        loginPage.campoConfirmarSenha('teste{enter}');
        loginPage.ClicarBotaoRegistrar();
        loginPage.validarMensagemEmailExistente();
    });

})
