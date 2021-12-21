/// <reference types= "cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })

import testData from '../fixtures/EvernoteLogin.json'

describe('Login Test', () => {

    it('User Enters Invalid Credentials and Login Fails', () => {
        

         //Visit website
        cy.visit('/');

        //Invalid Username
        cy.get('#username').type(testData.username1);
        cy.get('#loginButton').click();
        cy.contains(testData['expected_error(invalid_email)'])

        //Invalid Password
        cy.get('#password').type(testData.password1);
        cy.get('#loginButton').click();
        cy.contains(testData['expected_error(Invalid_password)'])
    })    


    it('User Enters Invalid Credentials and Login is Successful', () => {

        cy.get('#username2').type(testData.username2);
        cy.get('#loginButton').click();
        cy.contains("Continue")
        cy.get('#password').type(testData.password2);
        cy.get('#loginButton').click();
        cy.contains("Sign in")
        cy.contains(testData['expected_error(Invalid_password)'])

        //Assert that the text, 'Create new note’, is shown 
        cy.get(':nth-child(4) > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip')
          .should('have.text', 'The e-mail address entered is invalid.')
    })  
    
      
        
  


     
})