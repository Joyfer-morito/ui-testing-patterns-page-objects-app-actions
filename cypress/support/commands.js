
import LoginPage from './pages/login.page.js';
import ProdutoPage from './pages/produto.page.js';
import userData from '../fixtures/data.json';

Cypress.Commands.add('openMenu', (menu) => {
    cy.get(`[href="/Tab/${menu}"]`).click();
});

Cypress.Commands.add('login', () => { 
    LoginPage.login(userData.credentials.email, userData.credentials.senha);
});

Cypress.Commands.add('addToCart', () => {
    ProdutoPage.addToCart();  
});
Cypress.Commands.add('updateCart', () => {
    cy.get('[data-testid="addItem"] > .css-146c3p1').click(); 
});
Cypress.Commands.add('removeFromCart', () => {
    cy.get('[data-testid="remove"] > .css-146c3p1').click(); 
});

Cypress.Commands.add('completeCheckoutWithNewAddress', () => {
    const { name, mobileNumber, address, city, state, zipCode } = userData.contactDetails;

    cy.get('[style="justify-content: space-between; flex-grow: 1;"] > :nth-child(1) > .r-1wtj0ep > .r-1i6wzkk > .css-146c3p1').click();
    cy.get('[style="justify-content: center; margin-bottom: 10px; flex-direction: row; align-items: center; transition-duration: 0s;"] > .r-lrvibr').click();
    
    cy.get('.r-1d7mnkm > :nth-child(1) > .css-175oi2r > .css-11aywtz').type(name);
    cy.get(':nth-child(2) > .css-175oi2r > .css-11aywtz').type(mobileNumber);
    cy.get(':nth-child(3) > .css-175oi2r > .css-11aywtz').type(address);
    cy.get(':nth-child(4) > .css-175oi2r > .css-11aywtz').type(city); 
    cy.get(':nth-child(5) > .css-175oi2r > .css-11aywtz').type(state);
    cy.get(':nth-child(6) > .css-175oi2r > .css-11aywtz').type(zipCode);
    
    cy.get('[data-testid="save"]').click();
    cy.get(':nth-child(1) > [style="flex-direction: row;"] > :nth-child(2) > .r-cqee49').click();
    cy.get('[data-testid="selectAddressOrContinueToPayment"] > .css-146c3p1').click();
    cy.get('[data-testid="completeCheckout"] > .css-146c3p1').click();
});

Cypress.Commands.add('goBackHome', () => {
    cy.get('[data-testid="goBackHome"]').click(); 
});