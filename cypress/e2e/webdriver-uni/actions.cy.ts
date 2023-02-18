describe("Mouse actions", () => {
    it("Scroll into view", () => {
        cy.visit("https://www.webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
      })

    it("Drag and drop", () => {
        cy.visit("https://www.webdriveruniversity.com");
        cy.get("#actions").invoke("removeAttr", "target").click();
      cy.get('#draggable').trigger('mousedown', {which: 1})
      cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})
    })

    it("Double click", () => {
        cy.visit("https://www.webdriveruniversity.com");
        cy.get("#actions").invoke("removeAttr", "target").click();
     cy.get('#double-click').dblclick()
    })

    it.only("Click and hold", () => {
        cy.visit("https://www.webdriveruniversity.com");
        cy.get("#actions").invoke("removeAttr", "target").click();
     cy.get('#click-box').trigger('mousedown', {which: 1}).then(($el)=> {
        expect($el).to.have.css('background-color', 'rgb(0, 255, 0)') 
     })
    //  .trigger('mouseup', {force: true}, )
    })
    })