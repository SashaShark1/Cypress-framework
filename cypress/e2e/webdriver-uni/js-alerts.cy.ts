describe("Handle js alerts", () => {
    it("Confirm js alerts contains the correct text", ()=> {
          cy.visit('https://www.webdriveruniversity.com')
          cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
          cy.get('#button1').click()

          cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
          })      
    } )

    it("Validate js confirm", ()=> {
          cy.visit('https://www.webdriveruniversity.com')
          cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
          cy.get('#button4').click()

          cy.on('window:confirm', () => {
            return true
            // expect(str).to.equal('I am an alert box!')
          })
          cy.get('#confirm-alert-text').contains('You pressed OK!')      
    } )
    it("Validate js confirm cansel", ()=> {
          cy.visit('https://www.webdriveruniversity.com')
          cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
          cy.get('#button4').click()

          cy.on('window:confirm', () => {
            return false          
          })
          cy.get('#confirm-alert-text').contains('You pressed Cancel!')      
    } )

    it.only("Validate js confirm using a stub", ()=> {
          cy.visit('https://www.webdriveruniversity.com')
          cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
          const stub = cy.stub()  
         

          cy.on('window:confirm', stub)
          cy.get('#button4').click().then(()=> {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
          }) .then(()=> {
            return true
          }) .then(()=> {
            cy.get('#confirm-alert-text').contains('You pressed OK!') 
          }) 
         
    } )

})