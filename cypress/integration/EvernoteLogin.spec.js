/// <reference types= "cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })

import testData from '../fixtures/EvernoteLogin.json'

describe('Login Test', () => {

    it('Invalid Email Address', () => {
        
        //testData.forEach(item=>{
         //Visit website
        cy.visit('/');

        //Get Form Fields
        cy.get('#cf-2').type(item.Email);
        cy.get('#cf-3').type(item.Mobile);
        cy.get('#cf-4').type(item.Subject);
        cy.get('#cf-5').type(item.Message);
        cy.get('p > .wpcf7-form-control').click();

        //Assert that the error message, 'The e-mail address entered is invalid.’, is shown 
        cy.get(':nth-child(4) > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip')
          .should('have.text', 'The e-mail address entered is invalid.')
        cy.get('#cf-1').clear();
        cy.get('#cf-2').clear();
        cy.get('#cf-3').clear();
        cy.get('#cf-4').clear();
        cy.get('#cf-5').clear();
            
        }) 

    }) 
})