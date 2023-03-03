describe("Upload file", () => {

    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
    })
  
      it("Upload file via WDU", () => {
      cy.get("#myFile").selectFile("cypress/fixtures/example.json")
      cy.get("#submit-button").click()
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Your file has now been uploaded!')
      })     
       })

      it("Upload no file via WDU", () => {
        cy.get("#submit-button").click()
        cy.on("window:alert", (str) => {
            expect(str).to.equal('You need to select a file to upload!')
        })
       
    })
      });

