/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/enderecoFaturamento.json')



describe('Funcionalidade endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)

        })

    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Kallebs', 'Apelão', 'Google', 'Brasil', 'Rua gutembearg campelo', 'Bloco 05 apt 32', 'Recife', 'Pernambuco', '51135555', '8193333333')
        cy.get('.woocommerce-message').should('contain', ('Endereço altera'))
    
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivos de dados custumizados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].complemento,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone
            )
        cy.get('.woocommerce-message').should('contain', ('Endereço altera'))
    
    });

    it('Deve fazer cadastro de entrega com sucesso', () => {
        EnderecoPage.editarEnderecoEntrega('Kalline', 'Sales', 'Tiktok', 'Brasil', 'Rua Martiz', 'Bloco 998', 'Porto Velho', 'Rondonia', '51130530')
        cy.get('.woocommerce-message').should('contain', 'Endereço alte')

    });

    it.only('Deve fazer cadastro de entrega com sucesso - Usando arquivos de dados customizadosS', () => {
        EnderecoPage.editarEnderecoEntrega(
            dadosEndereco[4].nome,
            dadosEndereco[4].sobrenome,
            dadosEndereco[4].empresa,
            dadosEndereco[4].pais,
            dadosEndereco[4].endereco,
            dadosEndereco[4].complemento,
            dadosEndereco[4].cidade,
            dadosEndereco[4].estado,
            dadosEndereco[4].cep           
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alte')

    });
});

