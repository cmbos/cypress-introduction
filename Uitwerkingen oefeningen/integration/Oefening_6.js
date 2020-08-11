import {Intranet} from '../page-objects/intranet'
import {Evenementen} from '../page-objects/evenementen'

const intranet = new Intranet()
const evenementen = new Evenementen()

it('6. Intranet - refactoring', function() {
    intranet.homepage()
    intranet.login('cbos@immune.it', 'q1w2e3r4T%')
    intranet.clickMenuItem('Evenementen')
    evenementen.openEvenement('Workshop Cypress.io (Virtual Classroom) 2 avonden')
    evenementen.checkCollegaAangemeld('Edwin Peters')
})