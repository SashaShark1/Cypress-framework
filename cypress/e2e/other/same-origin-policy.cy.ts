describe("Test Contact us form", () => {
    it("Validate visiting 2 different domains", ()=> {
          cy.visit('https://www.webdriveruniversity.com/')
          cy.visit('https://automationteststore.com/')
          
    } )

    it("Validate visiting 2 different domains via user actions", ()=> {
          cy.visit('https://www.webdriveruniversity.com/')
         cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
          
    } )

    it.only("Origin command", ()=> {
          cy.origin('www.webdriveruniversity.com', ()=> {
            cy.visit("/")
          })
          cy.origin('automationteststore.com', ()=> {
            cy.visit("/")
          })
        
          
    } )

})