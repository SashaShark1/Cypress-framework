describe("Handle IFRAME AND MODALS", () => {
    it("Handle WU iframe ", ()=> {
          cy.visit('https://www.webdriveruniversity.com')
          cy.get('#iframe').invoke('removeAttr', 'target').click()
        
          cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
          })

          cy.get('@iframe').find('#button-find-out-more').click()
         
          cy.get('@iframe').find('#myModal').as('modal')

          cy.get('@modal').should($expText=>{
            const text = $expText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com')
          })

          cy.get('@modal').contains('Close').click()
    } )
})
