describe("Verify checkboxes", () => {

  beforeEach(()=> {
    cy.visit('https://www.webdriveruniversity.com')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
})
    it("Check and validate checkboxes", ()=> {
         
        //   cy.get('[value="option-1"]').check().should('be.checked')
          cy.get('[value="option-1"]').as('option1')
          cy.get('@option1').check().should('be.checked')
        })

    it("Uncheck and validate checkboxes", ()=> {
       
        //   cy.get('[value="option-1"]').check().should('be.checked')
          cy.get('[value="option-3"]').as('option3')
          cy.get('@option3').uncheck().should('not.be.checked')
        })

    it("Check and validate multiple checkboxes", ()=> {
          
          cy.get('input[type="checkbox"]').check(['option-2', 'option-4']).should('be.checked')
         
        })
})