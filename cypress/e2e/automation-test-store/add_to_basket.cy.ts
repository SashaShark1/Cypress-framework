/// <reference types="cypress-xpath" />

describe("Add multiple items to basket", () => {
    before(function() {
        cy.fixture("product").then(function(data) {
            this.data = data
        })
    })

   beforeEach(()=> {
    cy.visit('https://www.automationteststore.com/')
    cy.get('[href*="product/category&path"]').contains('Hair Care').click()
   })

    it("Add specific items to basket", function () {
   this.data.productName.forEach(function(el:string) {
    cy.addProductToBasket(el)
   })
    
     cy.get('.topcart').click()
  } )
})