/// <reference types= "cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })

import testData from '../fixtures/EvernoteLogin.json'
import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
        
      Given('User is on login page', () => { 
        cy.visit('/')
        cy.url().should('include', 'evernote')
      })

      
      //Error Path Testing: Invalid Username Scenario
      When('User types a an invalid username', () => {
        cy.get('#username').type(testData.username1)
      })

      And('User clicks the Continue button', () => {
        cy.get('#loginButton')
        cy.contains("Continue").click();
      })

      Then('User should see an error message', () => {
        cy.get('#responseMessage')
        cy.contains(testData['expected_error(invalid_email)'])
      })

      //Error Path Testing: Invalid Password Scenario
      When('User types a valid username', () => {
        cy.get('#username').type(testData.username2);
        })
        
      And('User types an invalid password', () => {
        cy.get('#password').type(testData.password1)
        })

      And('User clicks the Sign in button', () => {
        cy.get('#loginButton')
        cy.contains("Sign in").click()
        })
  
      Then('User should see an error message', () => {
        cy.get('#password-wrapper > div')
        cy.contains(testData['expected_error(Invalid_password)'])
        })


        /*//Invalid Username
        //cy.get('#username').type(testData.username1);
        cy.get('#loginButton').click();
        cy.contains(testData['expected_error(invalid_email)'])

        //Invalid Password
        cy.get('#password').type(testData.password1);
        cy.get('#loginButton').click();
        cy.contains(testData['expected_error(Invalid_password)'])*/
          
    

    /*it('User Enters Valid Credentials and Login is Successful', () => {

        cy.get('#username2').type(testData.username2);
        cy.get('#loginButton').click();
        cy.contains("Continue")
        cy.get('#password').type(testData.password2);
        cy.get('#loginButton').click();
        cy.contains("Sign in")

        //Assert that the text, 'Create new note’, is shown 
        cy.get(':nth-child(4) > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip')
          .should('have.text', 'The e-mail address entered is invalid.')
    })  
    
      
     
})*/