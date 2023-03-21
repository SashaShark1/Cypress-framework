declare global{
    namespace Cypress {
        interface Chainable {
            // filterBrand (num: number): Cypress.Chainable<JQuery<HTMLElement>>;          
            // checkCarTitle (text: string): void;
            selectProduct (productName: string): void;
            wdFormSubmit (fName: string, lName: string, comment: string, email?: string): void;
            containsAssert(selector: string, text: string): void;
            addProductToBasket(productName: string): Cypress.Chainable<JQuery<HTMLElement>>;
            navigateToHome(): void;
            navigateToCheckbox(): void;
          
        }
    }
}

export {};