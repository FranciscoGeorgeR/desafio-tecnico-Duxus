import { loginElements } from "../elements/loginElements";

class LoginPage {


    campoEmail(email) {
        cy.get(loginElements.inputEmail()).should('be.visible').type(email)
    }

    ValidarMensagemObrigatoriaEmail() {
        cy.get(loginElements.inputEmail()).then(($input) => {
            expect($input[0].checkValidity()).to.be.false;
        });
        cy.get(loginElements.inputEmail()).then(($input) => {
            $input[0].reportValidity();
        });
        cy.get(loginElements.inputEmail()).then(($input) => {
            const validationMessage = $input[0].validationMessage;
            expect(validationMessage).to.include('Inclua um "@" no endereço de e-mail.');
        });
    }

    campoSenha(senha) {
        cy.get(loginElements.inputSenha()).should('be.visible').type(senha)
    }

    ValidarMensagemObrigatoriaSenha() {
        cy.get(loginElements.inputSenha()).then(($input) => {
            expect($input[0].checkValidity()).to.be.true;
        });
        cy.get(loginElements.inputEmail()).then(($input) => {
            $input[0].reportValidity();
        });
        cy.get(loginElements.inputEmail()).then(($input) => {
            const validationMessage = $input[0].validationMessage;
            expect(validationMessage).to.include('Preencha este campo.');
        });
    }

    campoConfirmarSenha(senhaObrigatoria) {
        cy.get(loginElements.inputConfirmarSenha()).should('be.visible').type(senhaObrigatoria)
    }

    ValidarMensagemObrigatoriaConfirmarSenha() {
        cy.get(loginElements.inputConfirmarSenha()).then(($input) => {
            expect($input[0].checkValidity()).to.be.true;
        });
        cy.get(loginElements.inputEmail()).then(($input) => {
            $input[0].reportValidity();
        });
        cy.get(loginElements.inputEmail()).then(($input) => {
            const validationMessage = $input[0].validationMessage;
            expect(validationMessage).to.include('Preencha este campo.');
        });
    }

    ClicarBotaoRegistrar() {
        cy.get('button').should('be.visible').contains('Registrar').click()
    }

    validarMensagemSenhasNaoCoincidem() {
        cy.get('p').should('be.visible').contains('As senhas não coincidem. Tente novamente.')
    }

    validarMensagemEmailExistente() {
        cy.get('p').should('be.visible').contains('Este e-mail já está registrado.')
    }

}

export default new LoginPage();