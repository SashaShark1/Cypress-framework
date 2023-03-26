/// <reference types="cypress-xpath" />

describe("Test Contact us form via Automation test store", () => {

  before(function() {
    cy.fixture('user-details').as('user')
  })
    it("Should be able to submit a successful submit via contact us form", {retries: {runMode: 2, openMode: 2}}, function () {
          cy.visit('https://www.automationteststore.com/')
          // cy.get('a[href* ="contact"]')
          cy.xpath('//a[contains(@href, "contact")]').click().then(linkText => {
            cy.log("Clicked on link using text" + linkText.text())
          })
          cy.get('@user').then(user => {
            cy.get('#ContactUsFrm_first_name').type(this.user.first_name)
            cy.get('#ContactUsFrm_email').type(this.user.email)
          })
          
          cy.get('#ContactUsFrm_enquiry').type('Message')  
          cy.get("[title = 'Submit']").click()  
          cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')  
        
    } )
 
})