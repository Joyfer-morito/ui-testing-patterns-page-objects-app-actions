/// <reference types="cypress" />

class LoginPage {
    get email() { return cy.get('[data-testid="email"]'); }
    get password() { return cy.get('[data-testid="password"]'); }
    get btnLogin() { return cy.get('[data-testid="btnLogin"] > .css-146c3p1'); }

    login(email, password) {
        this.email.type(email);
        this.password.type(password);
        this.btnLogin.click();
    }
}

export default new LoginPage();
