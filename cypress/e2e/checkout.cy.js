/// <reference types="cypress" />

describe('Teste de Login', () => {
    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
        cy.visit('/');
    });

    it('Deve abrir o menu e fazer login', () => {
        cy.openMenu('Account');
        cy.login();
        cy.addToCart();
        cy.completeCheckoutWithNewAddress();
        cy.goBackHome();
        
    });
});
