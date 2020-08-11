it('5. Immune intranet - Cypress evenement', function() {
    cy.visit('https://intranet.immune.it/home/login?BackURL=/')
    //inloggen
    cy.get('#FrontendLoginForm_LoginForm_Email').type('cbos@immune.it')
    cy.get('#FrontendLoginForm_LoginForm_Password').type('q1w2e3r4T%')
    cy.get('#FrontendLoginForm_LoginForm_action_dologin').click()
    // selecteren Cypress evenement
    cy.contains('Evenementen').click()
    cy.contains('Workshop Cypress.io (Virtual Classroom) 2 avonden').click()
    // controle naam deelnemer
    cy.contains('Edwin Peters').should('be.visible')
    cy.contains('Christian Bos').should('not.be.visible')
})