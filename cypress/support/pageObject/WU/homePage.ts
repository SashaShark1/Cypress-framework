export class HomePageWU {
visitHomePage() {
cy.visit(Cypress.env('webdriverUniHp'), {timeout: 60000})
}

clickContactUs() {
    cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true, timeout: 8000})
}
}