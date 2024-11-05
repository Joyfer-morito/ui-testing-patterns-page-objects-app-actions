/// <reference types="cypress" />

class ProdutoPage {
    get btnStartShopping() { return cy.get('[data-testid="__CAROUSEL_ITEM_0_READY__"] > .r-1kihuf0 > .r-1jnx3et > .r-13w96dm > [data-testid="banner"]'); }
    get btnProduto() { return cy.get('[style="padding: 8px;"] > :nth-child(2) > .r-18u37iz > :nth-child(2)'); }
    get btnaddToCart() { return cy.get('[data-testid="addToCart"]'); }
    
    addToCart() {
        this.btnStartShopping.click();
        this.btnProduto.click();
        this.btnaddToCart.click();
       
    }
}

export default new ProdutoPage();  