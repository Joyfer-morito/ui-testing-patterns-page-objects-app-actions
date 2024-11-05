/// <reference types="cypress" />

describe('Teste do Carrinho de Compras', () => {
    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
        cy.visit('/');
        cy.openMenu('Account');
        cy.login(); 
    });
    
    it('Deve adicionar um item ao carrinho', () => {
        cy.intercept('GET', '/public/getCart?userId=671a67e8094935897eaf99e0', { fixture: 'carrinho.json' }).as('getCart');
        cy.addToCart(); 
    });
    it('Deve atualizar a quantidade de um item no carrinho', () => {
        cy.intercept('PUT', '/public/updateCart/671a67e8094935897eaf99e0').as('addToCart'); 
        cy.addToCart();
        cy.wait('@addToCart'); 
        cy.updateCart(); 
    });
    
    it('Deve remover um item do carrinho', () => { 
        cy.addToCart();
        cy.intercept('PUT', '/public/updateCart/671a67e8094935897eaf99e0', { fixture: 'carrinho.json' }).as('removeFromCart'); 
        cy.removeFromCart(); 
    });
});