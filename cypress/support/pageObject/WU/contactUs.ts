export class ContactUsWU {
   formSubmittion(first_name: string, last_name: string, email: string, text: string){
       cy.get('[name="first_name"]').type(first_name)
          cy.get('[name="last_name"]').type(last_name)
          cy.get('[name="email"]').type(email)
          cy.get('[name="message"]').type(text)
          cy.get('[type="submit"]').click()
          cy.get('h1').should('have.text', 'Thank You for your Message!')
         //  cy.get('h1').contains('Thank You for your Message!', {timeout: 60000})
   }
    }