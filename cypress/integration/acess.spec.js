/// <reference types="cypress" />

describe('Acesso', () => {

    it('Acessar o site VR Beneficios', () => {       

        //Acessa o site VR
        cy.visit('http://www.vr.com.br/')

        //Navegar até́a seção Pra Você̂
        cy.get('a[href="/onde-aceita.htm"]').click({force:true})

        //Clicar no botão Onde usar meu cartão VR
        cy.get('.vr-hero__actions > .vr-button--negative').click()

        //Validar que o mapa do Google abriu em tela
        cy.contains('Buscar')        


    });
    
});