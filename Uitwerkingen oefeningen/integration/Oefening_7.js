import {Intranet} from '../page-objects/intranet'
import {Smoelenboek} from '../page-objects/smoelenboek'

const intranet = new Intranet()
const smoelenboek = new Smoelenboek()

it('7. Smoelenboek', function() {
    intranet.homepage()
    intranet.login('cbos@immune.it', 'q1w2e3r4T%')
    intranet.clickMenuItem('Smoelenboek')
    smoelenboek.openFoto('Christian Bos')
    smoelenboek.checkGeboorteDatum('03 December 1982')
})