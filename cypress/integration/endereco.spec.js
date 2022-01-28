/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
       cy.visit('minha-conta')
       cy.fixture('perfil').then(dados => {
           cy.login(dados.usuario, dados.senha)

       })
       
    }); 

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('kallebs', 'apelão', 'epicgames', 'Brasil', 'rua gutembbear, bloco06 apt33', 'Recife, Pernambuco', '(51111111)', '8199999999')
        cy.get('.woocommerce-message').should('contain', ('Endereço altera'))
     });
});

