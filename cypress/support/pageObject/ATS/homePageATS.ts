export class HomePageATS {
    visitHomePageATS() {
        cy.visit('https://www.automationteststore.com/')
    }
    
    clickHeaderLinks(product: string) {
        cy.get('[href*="product/category&path"]').contains(product).click()
    
    }
    }