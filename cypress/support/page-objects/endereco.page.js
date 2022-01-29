class EnderecoPage {

    editarEnderecoFaturamento(nome, sobrenome, empresa, pais, endereco, complemento, cidade, estado, cep, telefone) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click() 

        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)

        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(complemento)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado).get('[aria-selected="true"]').click()
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('.button').click()

        


        
    }


    editarEnderecoEntrega(nome2, sobrenome2, empresa2, pais2, endereco2, complemento2, cidade2, estado2, cep2,) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > .edit').click()
       
        cy.get('#shipping_first_name').clear().type(nome2)
        cy.get('#shipping_last_name').clear().type(sobrenome2)
        cy.get('#shipping_company').clear().type(empresa2)
        cy.get('#select2-shipping_country-container').type(pais2).get('[aria-selected="true"]').click()
        cy.get('#shipping_address_1').clear().type(endereco2)
        cy.get('#shipping_address_2').clear().type(complemento2)
        cy.get('#shipping_city').clear().type(cidade2)



    }

}

export default new EnderecoPage