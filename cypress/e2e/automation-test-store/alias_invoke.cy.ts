import { should } from "chai"

describe("Alias and invoke", () => {
    it("Validate alias", ()=> {
      cy.visit('https://www.automationteststore.com/')
      cy.get('[href*="product/category&path"]').contains('Hair Care').click()
      cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
      cy.get('@productThumbnail').its('length').should('be.gt', 5)
      cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
     
  } )

    it("Validate product thumbnails", ()=> {
      cy.visit('https://www.automationteststore.com/')
      cy.get('.thumbnail').as('productThumbnail')   
      cy.get('@productThumbnail').its('length').should('eq', 16)
      // cy.get('@productThumbnail').should('have.length', 16)
      cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
      // cy.get('@productThumbnail').find('.productcart').as('cart')
      // cy.get('@cart').invoke('attr', 'title').should('include', 'Add to Cart')
    //        
  } )
    it("Log total of normal and sale products", ()=> {
      cy.visit('https://www.automationteststore.com/')
      cy.get('.thumbnail').as('productThumbnail')   
     cy.get('@productThumbnail').find('.oneprice').each(($el) => {
      cy.log($el.text())
     })     
   
  })
    it("Calculate total of normal products", ()=> {
      cy.visit('https://www.automationteststore.com/')
      cy.get('.thumbnail').as('productThumbnail')      
    cy.get('@productThumbnail').find('.oneprice').invoke('text').as('itemPrice')
    let itemsTotal = 0
    cy.get('@itemPrice').then($linkText=> {
      let itemPrice = ($linkText as unknown as string).split('$')
      let total = 0
      for(let i = 0; i < itemPrice.length; i++ ) {
        cy.log(itemPrice[i])
        total += Number(itemPrice[i])
      }
      itemsTotal += total
      //@ts-ignore
      cy.log(itemsTotal)
      expect(itemsTotal).eql(311.6)
    })
  })
    it("Calculate total of sale products", ()=> {
      cy.visit('https://www.automationteststore.com/')
      cy.get('.thumbnail').as('productThumbnail')      
    cy.get('@productThumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
      cy.get('@saleItemPrice').then($linkText=> {
      let itemPrice = ($linkText as unknown as string).split('$')
      const total = itemPrice.reduce((acc, item) => {
       return acc += Number(item)
      }, 0)    
      //@ts-ignore
      cy.log(total)
      expect(total).eql(314)
    })
    
  })
})