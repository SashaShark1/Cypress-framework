

describe("Test Contact us form", () => {
    beforeEach(function (){
        cy.fixture('example').then(function(data) {
            this.data = data
        // globalThis.data = data
        })
    })
    
    it("Should be able to submit a successful submit via contact us form", function () {
          cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
          cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
         cy.title().should('eq', 'WebDriver | Contact Us')
         cy.url().should('include', 'contactus')
        //   cy.get('[name="first_name"]').type(this.data.first_name)
        //   cy.get('[name="last_name"]').type(this.data.last_name)
        //   cy.get('[name="email"]').type(this.data.email)
        //   cy.get('[name="message"]').type('Message')
        //   cy.get('[type="submit"]').click()
        //   cy.get('h1').should('have.text', 'Thank You for your Message!')
        cy.wdFormSubmit(this.data.first_name, this.data.last_name,'Message', this.data.email)
        cy.containsAssert('h1', 'Thank You for your Message!')
    } )

    it("Should not be able to submit a successful submit via contact us form as all fiels are required", function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(this.data.first_name)
        //   cy.get('[name="last_name"]').type(this.data.last_name)   
        // cy.get('[name="message"]').type('Fail')
        // cy.get('[type="submit"]').click()
        // cy.get('body').contains('Error: all fields are required')
        cy.wdFormSubmit(this.data.first_name, this.data.last_name, 'Message')
        cy.containsAssert('body', 'Error: all fields are required')
    } )

    it("Should be able to submit a successful submit via contact us form", ()=> {
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
    
  } )
})