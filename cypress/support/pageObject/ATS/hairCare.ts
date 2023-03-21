export class HairCarePage {
   addProduct(arr: string[]) {
    arr.forEach(function(el:string) {
        cy.addProductToBasket(el).then(() => {
          // debugger
        })
       })
        
         cy.get('.topcart').click().debug()
   }
    
   
    }