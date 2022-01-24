/// <reference types="cypress" />

describe('Funcionalidade pagina de produtos', () => {
    
      beforeEach(() => {
          cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
      })

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        .eq(5)
        .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 10

        cy.get('[class="product-block grid"]')
        .eq(5)
        .click()
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade )
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Arcadio Gym Short” f')


    });
})