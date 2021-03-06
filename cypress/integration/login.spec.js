/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta')
    });


    it('Deve fazer login com sucesso', () =>{
        cy.get('#username').type('kalleotesteebac@gmail.com')
        cy.get('#password').type('K@lleo123.com')
        cy.get('.woocommerce-form > .button').click()
     

    })

    it('Deve fazer login com sucesso -Usando arquivos de dados', () => {
  
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
     
    })

    it('Deve exibir uma mensagem de erro ao inserir o usuário inválido', () =>{
        cy.get('#username').type('kalleote@gmail.com')
        cy.get('#password').type('K@lleo123.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Ver')
       
    })

    it.only('Deve fzer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
         
        })
    });


    it('Deve exibir uma mensagem de erro ao inserir a senha inválida', () =>{
        cy.get('#username').type('kalleotesteebac@gmail.com')
        cy.get('#password').type('kallo1')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o ')

        
     })
    

})