import {Intranet} from '../page-objects/intranet'
import {Evenementen} from '../page-objects/evenementen'

const intranet = new Intranet()
const evenementen = new Evenementen()

it('6. Intranet - refactoring', function() {
    intranet.homepage()
    intranet.login('mijn_emailadres', 'mijn_wachtwoord')
    intranet.clickMenuItem('Evenementen')
    evenementen.openEvenement('Workshop Cypress.io (Virtual Classroom) 2 avonden')
    evenementen.checkCollegaAangemeld('Naam collega')
})