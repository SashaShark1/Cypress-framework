describe("Datapicker", () => {

    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
      cy.get('#datepicker').click()
    })
  
      it.skip("Select date from datepicker", () => {
        let date = new Date()
        date.setDate(date.getDate())
        //@ts-ignore
        cy.log(date.getDate())

        let date2 = new Date()
        date2.setDate(date.getDate() + 5)
        //@ts-ignore
        cy.log(date2.getDate())
      })

      it("Select date from datepicker", () => {
  
        let date = new Date()
        date.setDate(date.getDate() + 1160)
        //@ts-ignore
        cy.log(date.getDate())

        let futureYear = date.getFullYear()
        let futureMonth = date.toLocaleString("default", {month: "long"})
        let futureDay = date.getDate()

        cy.log(`FutureYear: ${futureYear}`)
        cy.log(`FutureMonth: ${futureMonth}`)
        cy.log(`FutureDay: ${futureDay}`)

        function selectMonthAndYear(){
          cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currDate => {
            if(!currDate.text().includes(`${futureYear}`)) {
              cy.get('.next').first().click()
              selectMonthAndYear()
            }
          }).then(() => {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currDate => {
              if(!currDate.text().includes(`${futureMonth}`)) {
                cy.get('.next').first().click()
                selectMonthAndYear()
              }
            })
          })
        }

        function selectFutureDay() {
          cy.get('[class="day"]').contains(futureDay).click()
        }
        selectMonthAndYear()
        selectFutureDay()
      })
    })
