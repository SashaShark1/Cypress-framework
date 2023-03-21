import {HomePageWU} from "../../support/pageObject/WU/homePage"
import {ContactUsWU} from "../../support/pageObject/WU/contactUs"

describe("Test Contact us form", () => {
    Cypress.config("defaultCommandTimeout", 20000)
    const homePage = new HomePageWU()
    const contactUs = new ContactUsWU()
    before(function (){
       cy.viewport(550, 750)
    })
    beforeEach(function (){
        cy.fixture('example').then(function(data) {
            this.data = data
        // globalThis.data = data
        })
    })
    
    it.only("Should be able to submit a successful submit via contact us form", function () {
          cy.visit('/' + 'Contact-Us/contactus.html')
          cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
         cy.title().should('eq', 'WebDriver | Contact Us')
         cy.url().should('include', 'contactus')
        //   cy.get('[name="first_name"]').type(this.data.first_name)
        //   cy.get('[name="last_name"]').type(this.data.last_name)
        //   cy.get('[name="email"]').type(this.data.email)
        //   cy.get('[name="message"]').type('Message')
        //   cy.get('[type="submit"]').click()
        //   cy.get('h1').should('have.text', 'Thank You for your Message!')
        // cy.wdFormSubmit(this.data.first_name, this.data.last_name,'Message', this.data.email)
        // cy.wdFormSubmit(Cypress.env("first_name"), this.data.last_name,'Message', this.data.email)
        contactUs.formSubmittion(this.data.first_name, this.data.last_name, this.data.email, 'Message')
                cy.containsAssert('h1', 'Thank You for your Message!')
    } )

    it("Should not be able to submit a successful submit via contact us form as all fiels are required", function () {
        cy.visit(Cypress.env('webdriverUniHp') + '/Contact-Us/contactus.html')
        // cy.wait(3000)
        // cy.get('[name="first_name"]').type(this.data.first_name)
        //   cy.get('[name="last_name"]').type(this.data.last_name)   
        // cy.get('[name="message"]').type('Fail')
        // cy.get('[type="submit"]').click()
        // cy.get('body').contains('Error: all fields are required')
        cy.wdFormSubmit(this.data.first_name, this.data.last_name, 'Message')
        cy.containsAssert('body', 'Error: all fields are required')
        cy.screenshot('Make a contact u form submition')
    } )

    it("Should be able to submit a successful submit via contact us form", ()=> {
        // cy.visit('https://www.webdriveruniversity.com')
        // cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
    homePage.visitHomePage()
    // cy.pause()
    homePage.clickContactUs()
  } )
//   npx cypress run --browser chrome --spec cypress/e2e/webdriver-uni/contact-us.cy.ts --env first_name=Bill
})