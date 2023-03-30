/// <reference types="cypress-xpath" />

describe("Inspect ATS items using chain of commands", () => {
    it("Click on the first item using item header", ()=> {
          cy.visit('https://www.automationteststore.com/')
      cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()   
        
    } )
    it.only("Click on the first item using item text", ()=> {
          cy.visit('https://www.automationteststore.com/')
        cy.get('a[title="Skinsheen Bronzer Stick"]').eq(1).click().then(itemHeaderText => {
          console.log('Selected the folowwing item: ' + itemHeaderText.text())})
        
    } )
    it("Click on the first item using item index", ()=> {
          cy.visit('https://www.automationteststore.com/')
          cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
        cy.log('Test is completed')
    } )
 
})