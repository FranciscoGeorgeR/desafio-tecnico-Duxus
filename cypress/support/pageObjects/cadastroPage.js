import { loginElements } from "../elements/loginElements";
import { credentials } from '../credentials';


class cadastroPage {

    gerarEmailUnico() {
        const timestamp = new Date().getTime()
        const emailUnico = `usuario${timestamp}@teste.com`
        credentials.email = emailUnico
        return emailUnico
      }
    
    gerarSenha() {
        const senha = `123${Math.floor(Math.random() * 1000)}`
        credentials.senha = senha
        return senha
      }

    preencherFormulario() {
        const email = this.gerarEmailUnico()
        const senha = this.gerarSenha()
    
        cy.get(loginElements.inputEmail()).type(email)
        cy.get(loginElements.inputSenha()).type(senha)
        cy.get(loginElements.inputConfirmarSenha()).type(senha)

        Cypress.env('emailSalvo', email);
        Cypress.env('senhaSalva', senha);
      }

    fazerLogin() {
      const email = Cypress.env('emailSalvo');
      const senha = Cypress.env('senhaSalva');

      cy.get(loginElements.inputEmail()).type(email);
      cy.get(loginElements.inputSenha()).type(senha);
      }

    clicarEntrar() {
        cy.get('button').contains('Entrar').click()

      }

    validarPainelLogin() {
        cy.contains('Bem-vindo ao Dashboard').should('be.visible')
      }

}

export default new cadastroPage();