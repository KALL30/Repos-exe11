/// <reference types="cypress" />
var faker = require('faker-br');
const Faker = require('faker-br/lib');

describe('Funcionalidade Pré-Cadastro', () => {

beforeEach(() => {
    cy.visit('minha-conta')
})

    it('Deve concluir o pré-cadastro com sucesso', () => {
        var emailfaker = faker.internet.email

        cy.get('#reg_email').type(emailfaker())
        cy.get('#reg_password').type('K@lleo123.com')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });

    it.only('Deve completar o pré-cadastro com sucesso - Usando  comandos customizados', () => {
        var emailfaker2 = faker.internet.email()

        cy.PreCadastro(emailfaker2, 'senha@senha', 'Kalleozin', 'Teste')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })




})