describe("Validate homepage links", () => {
    it("Confirm links redirect to the correct pages", ()=> {
        //   cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
          cy.visit('https://www.webdriveruniversity.com')
          cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.go('back')
        } )

    it("Confirm links redirect to the correct pages", ()=> {
        //   cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
          cy.visit('https://www.webdriveruniversity.com')
          cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.go('forward')
        } )

    it.only("Confirm links redirect to the correct pages", ()=> {
        //   cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
          cy.visit('https://www.webdriveruniversity.com')
          cy.get('#contact-us').invoke('removeAttr', 'target').click()
        // cy.reload
        cy.reload(true) // without cache
        cy.url().should('include', 'contact')
        cy.url().should('include', 'https://www.webdriveruniversity.com')

        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'Login-Portal')

        cy.go('back')
        cy.get('#to-do-list').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
        } )
})