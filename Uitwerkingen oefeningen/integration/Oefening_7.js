import {Intranet} from '../page-objects/intranet'
import {Smoelenboek} from '../page-objects/smoelenboek'

const intranet = new Intranet()
const smoelenboek = new Smoelenboek()

it('7. Smoelenboek', function() {
    intranet.homepage()
    intranet.login('mijn_emailadres', 'mijn_wachtwoord')
    intranet.clickMenuItem('Smoelenboek')
    smoelenboek.openFoto('Christian Bos')
    smoelenboek.checkGeboorteDatum('mijn_geboortedatum')
})