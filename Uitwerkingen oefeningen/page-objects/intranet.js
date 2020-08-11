export class Intranet {

    homepage() {
        cy.visit('https://intranet.immune.it/home/login?BackURL=/')
    }
    
    login(username, password) {
        cy.get('#FrontendLoginForm_LoginForm_Email').type(username)
        cy.get('#FrontendLoginForm_LoginForm_Password').type(password)
        cy.get('#FrontendLoginForm_LoginForm_action_dologin').click()
    }

    checkLoginError(expectedMessage) {
        cy.get('#FrontendLoginForm_LoginForm_error').should('have.text', expectedMessage)
    }

    clickMenuItem(item) {
        cy.contains(item).click()
    }
}