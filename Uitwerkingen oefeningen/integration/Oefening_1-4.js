describe('Opdrachten avond 1 - Webelementen', function() {

    it('1. Checkboxes', function() {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        // aanklikken checkboxes
        cy.get('#checkboxes > :nth-child(1)').click()
        cy.get('#checkboxes > :nth-child(3)').click()
        // checken eerste checkbox aangevinkt, tweede niet
        cy.get('#checkboxes > :nth-child(1)').should('be.checked')
        cy.get('#checkboxes > :nth-child(3)').should('not.be.checked')
    })

    it('2. Dropdown', function() {
        cy.visit('https://the-internet.herokuapp.com/dropdown')
        // check standaardwaarde
        cy.get('#dropdown').should('have.value', null)
        // selecteren 'Option 2' en controleren waarde
        cy.get('#dropdown').select('Option 2')
        cy.get('#dropdown').should('have.value', '2')
    })

    it('3. Login page', function() {
        cy.visit('https://the-internet.herokuapp.com/login')
        // inloggen
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!', { log: false })
        cy.get('.fa').click()
        // check ingelogd
        cy.contains('You logged into a secure area!').should('be.visible')
    })

    describe('4. Dynamic controls', function() {

        it('4a. Remove/add', function() {
            cy.visit('https://the-internet.herokuapp.com/dynamic_controls')
            // click checkbox en button
            cy.get('#checkbox > input').click()
            cy.get('#checkbox-example > button').click()
            // check (en wacht op) melding
            cy.get('#message').should('contain.text', 'It\'s gone!')
        })

        it('4b. Enable/disable', function() {
            cy.visit('https://the-internet.herokuapp.com/dynamic_controls')
            // click button en check (en wacht op) message
            cy.get('#input-example > button').click()
            cy.get('#message').should('contain.text', 'It\'s enabled!')
            // text in input
            cy.get('#input-example > input').type('Nu kan ik hier iets in typen')
        })

    })
    

})