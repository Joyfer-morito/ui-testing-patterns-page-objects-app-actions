/// <reference types="cypress" />

const homePage = {
    openMenu(menu) {
        return cy.get(`[href="/Tab/${menu}"]`).click();
    }
};


export default homePage;
