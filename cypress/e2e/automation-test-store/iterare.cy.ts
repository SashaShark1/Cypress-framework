/// <reference types="cypress-xpath" />

describe("Iterate over elements", () => {
      it("Log info about product", ()=> {
        cy.visit('https://www.automationteststore.com/')
        cy.get('[href*="product/category&path"]').contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
          cy.log("Index " + index + ": " + $el.text())
        })
       
    } )
      it("Ad specific product to basket", ()=> {
        cy.visit('https://www.automationteststore.com/')
        cy.get('[href*="product/category&path"]').contains('Hair Care').click()
    // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
    //   if($el.text().includes('Curls to straight Shampoo')) {
    //     cy.wrap($el).click()
    //   }
    // })
    cy.selectProduct('Curls to straight Shampoo')
       
    } )

      it("Ad another specific product to basket", ()=> {
        cy.visit('https://www.automationteststore.com/')
        cy.get('[href*="product/category&path"]').contains('Hair Care').click()
    
    cy.selectProduct('Seaweed Conditioner')       
    } )

      it.only("Ad another specific product to basket", ()=> {
        cy.visit('https://www.automationteststore.com/')
        cy.get('[href*="product/category&path"]').contains('Hair Care').click()
    
    cy.selectProduct('Eau Parfumee au The Vert Shampoo')       
    } )
  

})