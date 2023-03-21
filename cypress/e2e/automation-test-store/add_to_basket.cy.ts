/// <reference types="cypress-xpath" />
import {HomePageATS} from "../../support/pageObject/ATS/homePageATS"
import {HairCarePage} from "../../support/pageObject/ATS/hairCare"

describe("Add multiple items to basket", () => {
    const homePage = new HomePageATS()
    const hairPage = new HairCarePage()
    before(function() {
        cy.fixture("product").then(function(data) {
            this.data = data
        })
    })

   beforeEach(()=> {
    cy.clearAllLocalStorage()
    // cy.clearAllCookies()
    homePage.visitHomePageATS()
    homePage.clickHeaderLinks('Hair Care')
    // cy.visit('https://www.automationteststore.com/')
    // cy.get('[href*="product/category&path"]').contains('Hair Care').click()
   })

    it("Add specific items to basket", function () {
        hairPage.addProduct(this.data.productName)
//    this.data.productName.forEach(function(el:string) {
//     cy.addProductToBasket(el)
//    })
    
//      cy.get('.topcart').click()
  } )
})