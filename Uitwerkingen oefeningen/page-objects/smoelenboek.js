export class Smoelenboek {

    openFoto(naam) {
        cy.contains(naam).click()
    }

    checkGeboorteDatum(datum) {
        cy.contains(datum).should('be.visible')
    }

}