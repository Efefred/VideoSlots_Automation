/// <reference types= "cypress" />
 
import testData from '../fixtures/TC3.json'
  

  Cypress.Commands.add('getEmail', () => {  
    cy.get('#username').type(testData.Email)
      .contains('Careers').click({ force: true })
  })

  Cypress.Commands.add("login", (username, password) => { 
    cy.get('#email').type(username)
    cy.get('#password').type(password)
    cy.get('form.login > .MuiButtonBase-root > .MuiButton-label').click()
  })

  
  Cypress.Commands.add('verifyApplyButton', () => {
    cy.get('.fancybox > .wpcf7-form-control')
      .should('be.visible')
      .click()
  })  

  


       



    
     
