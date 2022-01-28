class EnderecoPage {

    editarEnderecoFaturamento() {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click() 

        cy.get('#billing_first_name').clear().type('kakaka')
        cy.get('#billing_last_name').clear().type('kakaka')
        cy.get('#billing_company').type('kakakakak32')

        cy.get('#select2-billing_country-container').click().select('Brasil').get('data-selected')


        
    }


    editarEnderecoEntrega() {
        //elementos + ações
    }

}

export default new EnderecoPage