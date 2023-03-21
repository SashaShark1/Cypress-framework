// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('selectProduct', (productName: string) => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if($el.text().includes(productName)) {
          cy.wrap($el).click()
        }
    })
})

Cypress.Commands.add('wdFormSubmit', (fName: string, lName: string, comment: string, email?: string) => {
  cy.get('[name="first_name"]').type(fName)
  cy.get('[name="last_name"]').type( lName)
  if(email) {
    cy.get('[name="email"]').type(email as string)
  } 
  cy.get('[name="message"]').type(comment)
  cy.get('[type="submit"]').click()
})

Cypress.Commands.add('navigateToHome', () => {
  cy.visit("/")
})

Cypress.Commands.add('navigateToCheckbox', () => {
  cy.visit("/" + "Dropdown-Checkboxes-RadioButtons/index.html")
})

Cypress.Commands.add('containsAssert', (selector: string, text: string) => {
  cy.get(selector).contains(text)
})

Cypress.Commands.add('addProductToBasket', (productName: string) => {
  cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
    if($el.text() === productName) {
      cy.log($el.text())
     return cy.get('.productcart').eq(index).click()
    }
})
})