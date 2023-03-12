describe("Handling data via WD", () => {

    beforeEach(() => {
      cy.navigateToHome();
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
  
      it("Calculate the total age of all users", () => {
        let userDetails: any[] = []
        let numb = 0
       cy.get('#thumbnail-1 td').each(($el, index, $list) => {
        userDetails[index] = $el.text()
       }).then(()=> {
        for(let i = 0; i < userDetails.length; i++) {
            if(Number(userDetails[i])) {
                numb += Number(userDetails[i])
            }
         
        }
        cy.log(`Total age: ${numb}`)
        expect(numb).to.eq(322)
       })
      });

      it("Calculate and assert the age of given user based on last name", () => {
      cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
        const text = $el.text()
        if(text.includes('Woods')) {
            cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age)=> {
                const userAge = age.text()
                expect(userAge).to.equal('80')
            })
        }
       })
      });

    })