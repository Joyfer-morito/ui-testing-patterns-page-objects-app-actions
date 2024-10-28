/// <reference types="cypress" />

import homePage from "../support/pages/home.page";
import { profilePage } from "../support/pages/profile.page";
import { cadastroPage } from "../support/pages/cadastro.page";
import data from '../fixtures/data.json';

const { firstName, lastName, phoneNumber, password, reEnterPassword } = data.users[0];

describe('Teste de Fluxo de Cadastro', () => {
    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' });
        cy.visit('/');
    });

    it('Deve fazer cadastro com sucesso', () => {
        homePage.openMenu('Account');
        cadastroPage.preencherCadastroComEmailUnico(firstName, lastName, phoneNumber, password, reEnterPassword);
        homePage.openMenu('Account');
        profilePage.customerName().should('have.text', 'Joyce Fernanda');
    });
});
