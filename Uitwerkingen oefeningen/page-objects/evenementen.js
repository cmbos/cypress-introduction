export class Evenementen {

    openEvenement(evenementNaam) {
        cy.contains(evenementNaam).click()
    }

    checkCollegaAangemeld(naam) {
        cy.contains(naam).should('be.visible')
    }    

}