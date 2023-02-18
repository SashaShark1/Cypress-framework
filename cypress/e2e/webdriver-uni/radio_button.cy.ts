describe("Verify radiobuttons", () => {
beforeEach(()=> {
    cy.visit('https://www.webdriveruniversity.com')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
})
    it("Check and validate checkboxes", ()=> {
         
      cy.get('#radio-buttons').find('[value ="blue"]').check()
      cy.get('#radio-buttons').find('[type ="radio"]').eq(4).check()

        })

    it("Validate specific checkboxes", ()=> {         
      cy.get('[value="lettuce"]').should('not.be.checked')
      cy.get('[value="pumpkin"]').should('be.checked')
      cy.get('[value="cabbage"]').should('be.disabled')

      cy.get('[value="lettuce"]').check().should('be.checked')
      cy.get('[value="pumpkin"]').should('not.be.checked')

        })

    })