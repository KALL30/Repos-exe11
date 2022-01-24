/// <reference types="cypress" />

context('Funcionalidade login', () =>{

    it('Deve fazer login com sucesso', () =>{
       cy.visit('https://www.facebook.com/?stype=lo&jlou=Afc4Mm1ksCjleFT315uA7uakqckHIJNJpTHYlToOFLHBKkBInCUuO1b9oG1IFBGSrkFC7S8pE1s7WRgGnWu6jGxIHdEMPvIdgh1SxBOnAlce0g&smuh=40380&lh=Ac87M1ghsYgD_TAi8DQ')
       cy.get('[data-testid="royal_email"]').type('kalleotesteebac@gmail.com')
       cy.get('[data-testid="royal_pass"]').type('kalleo123')
       cy.get('[data-testid="royal_login_button"]').click()
     

    })

    it('Deve exibir uma mensagem de erro ao inserir o usuário inválido', () =>{
       cy.visit('https://www.facebook.com/?stype=lo&jlou=Afc4Mm1ksCjleFT315uA7uakqckHIJNJpTHYlToOFLHBKkBInCUuO1b9oG1IFBGSrkFC7S8pE1s7WRgGnWu6jGxIHdEMPvIdgh1SxBOnAlce0g&smuh=40380&lh=Ac87M1ghsYgD_TAi8DQ')
       cy.get('[data-testid="royal_email"]').type('kalleosteebac@gmail.com')
       cy.get('[data-testid="royal_pass"]').type('kalleo123')
       cy.get('[data-testid="royal_login_button"]').click()

       cy.get('._9ay7 > a').click()
       cy.get('._9nq2').should('contain', 'Insira seu email ou núme')
       
    })

    it('Deve exibir uma mensagem de erro ao inserir a senha inválida', () =>{
        cy.visit('https://www.facebook.com/?stype=lo&jlou=Afc4Mm1ksCjleFT315uA7uakqckHIJNJpTHYlToOFLHBKkBInCUuO1b9oG1IFBGSrkFC7S8pE1s7WRgGnWu6jGxIHdEMPvIdgh1SxBOnAlce0g&smuh=40380&lh=Ac87M1ghsYgD_TAi8DQ')
        cy.get('[data-testid="royal_email"]').type('kalleotesteebac@gmail.com')
        cy.get('[data-testid="royal_pass"]').type('kallo1')
        cy.get('[data-testid="royal_login_button"]').click()

        cy.get('._9ay7').should('contain', 'A senha inserida está')
        
     })
    

})