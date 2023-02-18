/// <reference types="cypress-xpath" />

describe("Verifying variables, cy commands and jq", () => {
    it("Navigating to specific product page", ()=> {
        cy.visit('https://www.automationteststore.com/')
        // const makeupLink = cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=36"]')
        const makeupLink = cy.get('[href*="product/category&path"]').contains('Makeup')
        makeupLink.click()
        const skinCareLink = cy.get('[href*="product/category&path"]').contains('Skincare')
        skinCareLink.click()   
    } )

    it("Navigating to specific product page", ()=> {
        cy.visit('https://www.automationteststore.com/')
        cy.get('[href*="product/category&path"]').contains('Makeup').click()
         
        cy.get('.maintext').then($headerText => {
            const headerText = $headerText.text()
            cy.log('Found header text: ' + headerText)
            expect(headerText).equal('Makeup')
        })
    } )

    it.only("Validate properties of the Contact Us Page", ()=> {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        
        //Cypress commands
        cy.contains('#ContactUsFrm', 'Contact Us Form')
        .find('#field_11')
        .should('contain', 'First name')

        //JQuery
        cy.contains('#ContactUsFrm', 'Contact Us Form').then( text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).contain('First name')
        })
        //Embaded command
        cy.get('#field_11').then(fsText => {
            cy.log(fsText.text())
            cy.log(`${fsText}`)
        })
    } )


})