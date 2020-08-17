it('5. Immune intranet - Cypress evenement', function() {
    cy.visit('https://intranet.immune.it/home/login?BackURL=/')
    //inloggen
    cy.get('#FrontendLoginForm_LoginForm_Email').type('mijn_emailadres')
    cy.get('#FrontendLoginForm_LoginForm_Password').type('mijn_wachtwoord')
    cy.get('#FrontendLoginForm_LoginForm_action_dologin').click()
    // selecteren Cypress evenement
    cy.contains('Evenementen').click()
    cy.contains('Workshop Cypress.io (Virtual Classroom) 2 avonden').click()
    // controle naam deelnemer
    cy.contains('Edwin Peters').should('be.visible')
    cy.contains('Christian Bos').should('not.be.visible')
})