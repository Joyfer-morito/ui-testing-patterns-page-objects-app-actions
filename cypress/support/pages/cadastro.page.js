/// <reference types="cypress" />

class CadastroPage {
    get #btnsignUp() { return cy.get('[data-testid="signUp"] > .css-146c3p1'); }
    get #firstName() { return cy.get('[data-testid="firstName"]'); }
    get #lastName() { return cy.get('[data-testid="lastName"]'); }
    get #phoneNumber() { return cy.get('[data-testid="phone"]'); }
    get #emailAdress() { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]'); }
    get #password() { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]'); }
    get #reEnterPassword() { return cy.get('[data-testid="repassword"]'); }
    get #btncreate() { return cy.get('[data-testid="create"]'); }

    cadastro(firstName, lastName, phoneNumber, emailAdress, password, reEnterPassword) {
        this.#btnsignUp.click();
        this.#firstName.type(firstName);
        this.#lastName.type(lastName);
        this.#phoneNumber.type(phoneNumber);
        this.#emailAdress.type(emailAdress);
        this.#password.type(password);
        this.#reEnterPassword.type(reEnterPassword); 
        this.#btncreate.click();
    }

    preencherCadastroComEmailUnico(firstName, lastName, phoneNumber, password, reEnterPassword) {
        const uniqueEmail = `teste${Date.now()}@exemplo.com`; 
        this.cadastro(firstName, lastName, phoneNumber, uniqueEmail, password, reEnterPassword);
    }
}

export const cadastroPage = new CadastroPage();
