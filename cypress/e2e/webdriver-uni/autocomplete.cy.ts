describe("Autocomplete", () => {
  it("Select specific product via autocomplete", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();
    cy.get("#myInput").type("A");
    cy.get("#myInputautocomplete-list > *").each(($el) => {
      const product = $el.text();
      const productToSelect = "Almond";

      if (product === productToSelect) {
        // $el.click();
        $el.trigger('click');
        cy.get("#submit-button").click();
        cy.url().should("include", productToSelect);
      }
    }).then(()=> {
        cy.get("#myInput").type("G");
            cy.get("#myInputautocomplete-list > *").each(($el) => {
              const product = $el.text();
              const productToSelect = "Grapes";
        
              if (product === productToSelect) {
                // $el.click();
                $el.trigger('click');
                cy.get("#submit-button").click();
                cy.url().should("include", productToSelect);
              }
            });
        })
  })

//   it.only("Select specific product via autocomplete2", () => {
//     cy.visit("https://www.webdriveruniversity.com");
//     cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();
//     cy.get("#myInput").type("G");
//     cy.get("#myInputautocomplete-list > *").each(($el) => {
//       const product = $el.text();
//       const productToSelect = "Grapes";

//       if (product === productToSelect) {
//  //       $el.click();
// $el.trigger('click');
//         cy.get("#submit-button").click();
//         cy.url().should("include", productToSelect);
//       }
//     });
//   });


});
