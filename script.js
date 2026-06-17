const categories = [
  {
    id: 'werk',
    name: 'Werk',
    description: 'Conflicten op de werkvloer en in teams.',
    cases: [
      {
        id: 'werk-1',
        title: 'Nieuwe Manager',
        description: 'Hassan voelt zich genegeerd sinds Emma als nieuwe manager veranderingen doorvoert. Er is spanning over vernieuwing, ervaring en betrokkenheid.',
        perspectiveA: 'Hassan voelt zich minder gewaardeerd omdat zijn jarenlange ervaring niet wordt gevraagd of erkend. Hij ziet veranderingen als te snel en onvoldoende afgestemd op de afdeling.',
        perspectiveB: 'Emma is jong, ambitieus en heeft duidelijke opdrachten om de afdeling te moderniseren. Ze ervaart weerstand en voelt druk van bovenaf om snel resultaten te laten zien.',
        positions: 'A wil betrokkenheid en erkenning; B wil ruimte om veranderingen door te voeren.',
        concerns: 'A vreest dat zijn ervaring wordt genegeerd en dat fouten ontstaan; B vreest dat haar gezag wordt ondermijnd en dat de afdeling achterblijft.',
        interests: 'A zoekt erkenning, respect, kwaliteit en betrokkenheid; B zoekt succesvolle verandering, samenwerking, vertrouwen en goede resultaten.',
        fullText: `Hassan en Emma werken in hetzelfde team. Emma is recent aangesteld als manager met de opdracht het team te moderniseren. Hassan werkt al 18 jaar op de afdeling en ervaart dat zijn ervaring niet wordt gevraagd of erkend. Hij ziet de veranderingen als te abrupt en onvoldoende afgestemd op de dagelijkse praktijk.

Emma voelt druk van het management om snel resultaten te laten zien en wil daarom nieuwe werkstromen invoeren. Ze merkt echter dat er veel weerstand is, vooral van Hassan. Hij vindt dat ze te weinig luistert en te weinig oog heeft voor de kennis in het team. Emma voelt zich daardoor niet gesteund, terwijl ze juist graag wil samenwerken.

Het conflict draait om respect voor ervaring versus de behoefte aan vernieuwing. Beide partijen willen dat het team beter draait, maar ze hebben verschillende verwachtingen over hoe dat moet gebeuren. De mediator kan het beste eerst beide perspectieven verkennen, erkennen wat er speelt en vervolgens met de partijen zoeken naar gemeenschappelijke belangen voordat er oplossingen worden voorgesteld.`,
        references: [
          { title: 'Kernprobleem', text: 'Respect voor ervaring vs. behoefte aan vernieuwing' },
          { title: 'Hassan voelt zich', text: 'Genegeerd, niet gevraagd, minder gewaardeerd, bezorgd over snelheid van veranderingen' },
          { title: 'Emma voelt zich', text: 'Onder druk, niet ondersteund, tegengewerkt door weerstand' },
          { title: 'Gemeenschappelijk doel', text: 'Beiden willen dat het team beter draait' },
          { title: 'Mediator-aanpak', text: '1) Beide perspectieven verkennen, 2) Erkennen wat er speelt, 3) Gemeenschappelijke belangen zoeken, 4) Dan pas oplossingen' },
          { title: 'Sleuteltekst Hassan', text: '"Niemand vraagt ooit naar mijn ervaring" - voelt zich niet gezien en niet betrokken' },
          { title: 'Sleuteltekst Emma', text: '"Ik heb het gevoel dat Hassan alles tegenwerkt" - voelt zich niet ondersteund in haar rol' }
        ],
        questions: [
          {
            text: 'Hassan zegt: "Niemand vraagt ooit naar mijn ervaring." Wat is de beste eerste reactie van de mediator?',
            options: [
              { label: 'A', text: 'Emma heeft waarschijnlijk een reden voor haar keuzes.', score: 0, feedback: 'Dit neemt al een positie in tegenover Hassan.', skill: 'neutrality' },
              { label: 'B', text: 'Kun je uitleggen wat je mist in de samenwerking met Emma?', score: 2, feedback: 'Je onderzoekt eerst Hassan zijn ervaring zonder te oordelen.', skill: 'listening' },
              { label: 'C', text: 'Veranderingen horen nu eenmaal bij een bedrijf.', score: 0, feedback: 'Dat minimaliseert Hassan zijn zorgen.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Emma zegt: "Ik heb het gevoel dat Hassan alles tegenwerkt." Wat doet een mediator?',
            options: [
              { label: 'A', text: 'Onderzoeken wat Emma precies ervaart.', score: 2, feedback: 'Je onderzoekt haar beleving voordat je conclusies trekt.', skill: 'emotion' },
              { label: 'B', text: 'Hassan vragen waarom hij zo negatief is.', score: 0, feedback: 'Dat is partijdig en kan het conflict verergeren.', skill: 'neutrality' },
              { label: 'C', text: 'Uitleggen dat managers beslissingen mogen nemen.', score: 0, feedback: 'Dat neemt een positie in voor Emma.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Wat is het belangrijkste doel van de mediator aan het begin van het gesprek?',
            options: [
              { label: 'A', text: 'Een oplossing vinden.', score: 0, feedback: 'Oplossingen komen later; eerst moet je begrijpen.', skill: 'structure' },
              { label: 'B', text: 'Begrijpen hoe beide partijen de situatie ervaren.', score: 2, feedback: 'Dit is het juiste begin van mediation.', skill: 'listening' },
              { label: 'C', text: 'Beslissen wie gelijk heeft.', score: 0, feedback: 'Dat is geen rol van de mediator.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Hassan en Emma beginnen door elkaar te praten. Wat doet de mediator?',
            options: [
              { label: 'A', text: 'Wachten tot één van beiden stopt.', score: 0, feedback: 'Dat geeft geen structuur aan het gesprek.', skill: 'structure' },
              { label: 'B', text: 'De beurtverdeling herstellen.', score: 2, feedback: 'Je herstelt de gespreksorde en creëert ruimte voor beide partijen.', skill: 'structure' },
              { label: 'C', text: 'Het gesprek beëindigen.', score: 0, feedback: 'Dat lost niets op.', skill: 'structure' }
            ]
          },
          {
            text: 'Welke vraag helpt om belangen te ontdekken?',
            options: [
              { label: 'A', text: 'Wie begon het conflict?', score: 0, feedback: 'Dat richt zich op schuld, niet op belangen.', skill: 'neutrality' },
              { label: 'B', text: 'Wat maakt dit onderwerp voor jou belangrijk?', score: 2, feedback: 'Deze vraag helpt belangen zichtbaar te maken.', skill: 'interests' },
              { label: 'C', text: 'Wie heeft gelijk?', score: 0, feedback: 'Dit leidt tot partijdigheid.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Emma raakt zichtbaar geïrriteerd. Wat doet de mediator?',
            options: [
              { label: 'A', text: 'De emotie erkennen.', score: 2, feedback: 'Emoties erken je om het gesprek constructief te houden.', skill: 'emotion' },
              { label: 'B', text: 'De emotie negeren.', score: 0, feedback: 'Negeren maakt de spanning vaak groter.', skill: 'neutrality' },
              { label: 'C', text: 'Van onderwerp veranderen.', score: 0, feedback: 'Dat lost de onderliggende emotie niet op.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Welke houding moet de mediator aannemen?',
            options: [
              { label: 'A', text: 'Betrokken dakloos.', score: 2, feedback: 'Dat is de gewenste mediatiehouding in deze casus.', skill: 'neutrality' },
              { label: 'B', text: 'Partijdig.', score: 0, feedback: 'De mediator moet niet partijdig zijn.', skill: 'neutrality' },
              { label: 'C', text: 'Dominant.', score: 0, feedback: 'Dominantie past niet bij mediation.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Welke fout moet de mediator vermijden?',
            options: [
              { label: 'A', text: 'Samenvatten.', score: 0, feedback: 'Samenvatten is juist een goede mediatorvaardigheid.', skill: 'listening' },
              { label: 'B', text: 'Oordelen.', score: 2, feedback: 'Oordelen moet je vermijden.', skill: 'neutrality' },
              { label: 'C', text: 'Luisteren.', score: 0, feedback: 'Luisteren is essentieel.', skill: 'listening' }
            ]
          },
          {
            text: 'Aan het einde vragen beide partijen: "Wat moeten wij nu doen?" Wat doet de mediator?',
            options: [
              { label: 'A', text: 'Zelf een oplossing geven.', score: 0, feedback: 'Een mediator geeft geen oplossing voor.', skill: 'neutrality' },
              { label: 'B', text: 'Partijen uitnodigen zelf oplossingen te bedenken.', score: 2, feedback: 'Je stimuleert autonomie en eigenaarschap.', skill: 'structure' },
              { label: 'C', text: 'Beslissen wie moet veranderen.', score: 0, feedback: 'Dat is geen rol van de mediator.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Wat is uiteindelijk het doel van mediation in deze casus?',
            options: [
              { label: 'A', text: 'Hassan overtuigen.', score: 0, feedback: 'Mediation gaat niet om één partij overtuigen.', skill: 'neutrality' },
              { label: 'B', text: 'Emma overtuigen.', score: 0, feedback: 'Mediation gaat niet om één partij overtuigen.', skill: 'neutrality' },
              { label: 'C', text: 'Wederzijds begrip en samenwerking verbeteren.', score: 2, feedback: 'Dit is het juiste mediationdoel.', skill: 'interests' }
            ]
          }
        ]
      },
      {
        id: 'werk-2',
        title: 'Wie draagt de zwaarste last?',
        description: 'Lisa werkt vaak over, terwijl Tom op tijd naar huis gaat voor zijn gezin.',
        perspectiveA: 'Lisa voelt zich uitgeput en ondergewaardeerd. Ze vindt dat zij meer doet dan haar collega’s.',
        perspectiveB: 'Tom werkt efficiënt tijdens kantooruren en wil begrip voor zijn thuissituatie met jonge kinderen.',
        positions: 'A wil een eerlijkere taakverdeling; B wil respect voor werk-privébalans.',
        concerns: 'A vreest overbelasting en dat haar inzet onzichtbaar blijft. B vreest onterecht beoordeeld te worden en dat de teamsfeer verslechtert.',
        interests: 'A wil waardering, een eerlijke werkverdeling en gezonde werkdruk. B wil respect, begrip, balans tussen werk en privé en goede samenwerking.',
        fullText: `Lisa werkt al zeven jaar op de klantenservice van een groot bedrijf. In die tijd heeft ze zich altijd ingezet en is ze betrouwbaar voor haar collega’s.

De afgelopen maanden is de werkdruk sterk gestegen. Enkele collega’s zijn vertrokken en nieuw personeel is nog in opleiding. Daardoor blijven veel taken liggen.

Lisa blijft steeds vaker langer op kantoor om achterstanden weg te werken. Soms werkt zij een uur langer, soms twee uur.

Wat haar dwarszit, is dat sommige collega’s wel op tijd naar huis gaan. Vooral Tom sluit elke dag precies om vijf uur zijn computer af.

Lisa voelt zich steeds vaker gefrustreerd. Ze heeft het gevoel dat zij de meeste verantwoordelijkheid draagt voor het succes van het team.

De laatste weken reageert ze sneller geïrriteerd op Tom. In vergaderingen merkt ze dat ze moeite heeft om haar frustratie te verbergen.

Ze voelt zich moe, ondergewaardeerd en niet gezien.

Tom is 38 jaar en werkt al vijf jaar in hetzelfde team als Lisa. Hij heeft twee jonge kinderen van vier en zes jaar.

Elke middag haalt hij zijn kinderen op van school. Daarom vertrekt hij meestal precies op tijd.

Tom ziet dat Lisa vaak langer blijft werken, maar hij heeft nooit gevraagd waarom. Hij denkt dat zij haar werk op haar eigen manier organiseert.

De laatste maanden is Lisa afstandelijker geworden. Ze reageert kortaf als hij iets vraagt en lijkt geïrriteerd als hij naar huis gaat.

Dat verbaast Tom.

Hij werkt hard tijdens kantooruren en probeert zo efficiënt mogelijk te zijn. Hij heeft niet het gevoel dat hij minder doet dan anderen.

Toen een collega vertelde dat Lisa vindt dat Tom te weinig verantwoordelijkheid neemt, voelde hij zich gekwetst.

Hij heeft het gevoel dat er over hem wordt geoordeeld zonder dat iemand zijn privé situatie kent.

Beide willen dat het team goed samenwerkt. De uitdaging is dat ze elkaar niet goed begrijpen en elkaar beoordelen in plaats van vragen te stellen.`,
        references: [
          { title: 'Kernprobleem', text: 'Werkdrukverschillen en gebrek aan wederzijds begrip' },
          { title: 'Lisa voelt zich', text: 'Overbelast, ondergewaardeerd, moe, gefrustreerd, niet gezien' },
          { title: 'Tom voelt zich', text: 'Onterecht beoordeeld, gekwetst, niet begrepen in zijn privésituatie' },
          { title: 'Lisa\'s situatie', text: '7 jaar ingezet, nu steeds langer werken, voelt verantwoordelijkheid voor teamsucces' },
          { title: 'Tom\'s situatie', text: '2 jonge kinderen (4 en 6 jaar), haalt ze op van school, werkt efficiënt in kantooruren' },
          { title: 'Gemeenschappelijk doel', text: 'Beiden willen dat het team goed samenwerkt' },
          { title: 'Mediator-aanpak', text: 'Eerst beide perspectieven onderzoeken; erkennen wat er speelt; zoeken naar wederzijds begrip' }
        ],
        questions: [
          {
            text: 'Lisa zegt: "Ik ben de enige die hier echt verantwoordelijkheid neemt." Wat is de beste reactie van de mediator?',
            options: [
              { label: 'A', text: 'Waarom denk je dat de anderen geen verantwoordelijkheid nemen?', score: 0, feedback: 'Deze vraag kan beschuldigend overkomen en houdt je in Lisa haar perspectief.', skill: 'neutrality' },
              { label: 'B', text: 'Kun je uitleggen waardoor je dat gevoel hebt gekregen?', score: 2, feedback: 'Je onderzoekt de ervaring van Lisa zonder oordeel.', skill: 'listening' },
              { label: 'C', text: 'Misschien verwacht je te veel van collega\'s.', score: 0, feedback: 'Dat neemt een oordeel over Lisa haar standpunt.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Tom zegt: "Ik voel me onterecht aangevallen." Wat doet de mediator?',
            options: [
              { label: 'A', text: 'Zijn gevoel onderzoeken.', score: 2, feedback: 'Je erkent zijn ervaring en blijft neutraal.', skill: 'emotion' },
              { label: 'B', text: 'Uitleggen dat Lisa waarschijnlijk gelijk heeft.', score: 0, feedback: 'Dat neemt een positie in richting Lisa.', skill: 'neutrality' },
              { label: 'C', text: 'Vragen waarom hij zich verdedigt.', score: 0, feedback: 'Dat kan als aanvallend en partijdig worden ervaren.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Wat is het belangrijkste doel aan het begin van het gesprek?',
            options: [
              { label: 'A', text: 'Begrijpen hoe beide partijen de situatie ervaren.', score: 2, feedback: 'Dit is het juiste begin van mediation.', skill: 'listening' },
              { label: 'B', text: 'De werkverdeling aanpassen.', score: 0, feedback: 'Dat kan pas nadat je beide perspectieven hebt begrepen.', skill: 'structure' },
              { label: 'C', text: 'Beslissen wie gelijk heeft.', score: 0, feedback: 'Dat is geen rol van de mediator.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Welke vraag helpt om belangen te ontdekken?',
            options: [
              { label: 'A', text: 'Wie werkt het hardst?', score: 0, feedback: 'Dat richt zich op vergelijking in plaats van belangen.', skill: 'neutrality' },
              { label: 'B', text: 'Wat maakt dit onderwerp voor jou belangrijk?', score: 2, feedback: 'Je zoekt naar onderliggende behoeften.', skill: 'interests' },
              { label: 'C', text: 'Wie heeft gelijk?', score: 0, feedback: 'Dat leidt tot partijdigheid.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Lisa wordt emotioneel tijdens het gesprek. Wat doet de mediator?',
            options: [
              { label: 'A', text: 'De emotie erkennen.', score: 2, feedback: 'Emoties erkennen helpt het gesprek constructief te houden.', skill: 'emotion' },
              { label: 'B', text: 'Van onderwerp veranderen.', score: 0, feedback: 'Dat negeert het onderliggende gevoel.', skill: 'neutrality' },
              { label: 'C', text: 'Het gesprek versnellen.', score: 0, feedback: 'Dat kan de emotie versterken in plaats van verlichten.', skill: 'structure' }
            ]
          },
          {
            text: 'Tom zegt: "Ik moet mijn kinderen ophalen." Wat onderzoekt de mediator?',
            options: [
              { label: 'A', text: 'De onderliggende belangen.', score: 2, feedback: 'Je zoekt naar de reden achter zijn uitspraak.', skill: 'interests' },
              { label: 'B', text: 'Of Tom gelijk heeft.', score: 0, feedback: 'Dat is geen neutrale mediatievraag.', skill: 'neutrality' },
              { label: 'C', text: 'Of Lisa overdrijft.', score: 0, feedback: 'Dat is partijdig richting Lisa.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Welke onderliggende behoefte hoor je waarschijnlijk bij Lisa?',
            options: [
              { label: 'A', text: 'Waardering.', score: 2, feedback: 'Dat sluit aan op haar behoefte aan erkenning en respect.', skill: 'interests' },
              { label: 'B', text: 'Meer salaris.', score: 0, feedback: 'Dat is niet duidelijk uit haar verhaal.', skill: 'neutrality' },
              { label: 'C', text: 'Promotie.', score: 0, feedback: 'Dat springt niet uit haar zorgen en belangen.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Welke fout moet de mediator vermijden?',
            options: [
              { label: 'A', text: 'Samenvatten.', score: 0, feedback: 'Samenvatten is juist een goede vaardigheid.', skill: 'listening' },
              { label: 'B', text: 'Oordelen.', score: 2, feedback: 'Oordelen moet je vermijden als mediator.', skill: 'neutrality' },
              { label: 'C', text: 'Doorvragen.', score: 0, feedback: 'Doorvragen is juist vaak nuttig.', skill: 'listening' }
            ]
          },
          {
            text: 'Beide partijen beginnen elkaar te onderbreken. Wat doet de mediator?',
            options: [
              { label: 'A', text: 'Structuur herstellen.', score: 2, feedback: 'Je herstelt respectvolle gespreksvoering.', skill: 'structure' },
              { label: 'B', text: 'Afwachten.', score: 0, feedback: 'Dan kunnen spanningen oplopen.', skill: 'structure' },
              { label: 'C', text: 'Zelf de oplossing geven.', score: 0, feedback: 'Dat is niet de rol van de mediator.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Wat is uiteindelijk het doel van mediation in deze casus?',
            options: [
              { label: 'A', text: 'Bepalen wie harder werkt.', score: 0, feedback: 'Mediation gaat niet over gelijk of ongelijk.', skill: 'neutrality' },
              { label: 'B', text: 'Een schuldige aanwijzen.', score: 0, feedback: 'Mediation is geen schuldvraag.', skill: 'neutrality' },
              { label: 'C', text: 'Meer begrip creëren en de samenwerking verbeteren.', score: 2, feedback: 'Dit is het juiste mediationdoel.', skill: 'interests' }
            ]
          }
        ]
      },
      {
        id: 'werk-3',
        title: 'Dezelfde kansen voor iedereen?',
        description: 'Ahmed voelt zich gepasseerd omdat een collega vaak de zichtbare, belangrijke projecten krijgt.',
        perspectiveA: 'Ahmed is gemotiveerd, volgt opleidingen en wil meer kans om zich te ontwikkelen.',
        perspectiveB: 'Mark kiest vaak voor Sophie vanwege haar ervaring en bewezen resultaten.',
        positions: 'A wil gelijke kansen; B wil betrouwbare resultaten veiligstellen.',
        concerns: 'A vreest dat zijn carrière stagneert; B vreest dat risico’s de resultaten kunnen schaden.',
        interests: 'A wil erkenning en professionele groei; B wil goede resultaten en een sterk team.',
        fullText: `Ahmed werkt zes jaar als accountmanager en wil doorgroeien. Hij ziet dat belangrijke projecten herhaaldelijk naar Sophie gaan, ondanks zijn inzet en verzoeken om meer verantwoordelijkheid. Mark, de teamleider, kiest Sophie vanwege haar ervaring en succes. Ahmed voelt zich daardoor overgeslagen en afgenomen in motivatie. Mark erkent Ahmeds inzet, maar wil bij belangrijke opdrachten vooral op zekerheid en ervaring sturen. De uitdaging is om begrip te creëren en te zoeken naar manieren om zowel ontwikkeling als resultaat te waarborgen.`,
        references: [
          { title: 'Kernprobleem', text: 'Carrièreontwikkeling vs. resultaatgarantie' },
          { title: 'Ahmed voelt zich', text: 'Overgeslagen, niet gezien ondanks inzet, afgenomen in motivatie' },
          { title: 'Mark denkt', text: 'Ahmed is gemotiveerd, maar kiest ervaren mensen voor resultaatgarantie' },
          { title: 'Ahmed\'s situatie', text: '6 jaar ervaring, volgt opleidingen, wil meer verantwoordelijkheid' },
          { title: 'Mark\'s situatie', text: 'Teamleider, voelt verantwoordelijkheid voor resultaten, waardeert ervaring' },
          { title: 'Sophie\'s rol', text: 'Krijgt projecten vanwege ervaring en bewezen resultaten' },
          { title: 'Gemeenschappelijk doel', text: 'Beiden willen teamsterkte en goede resultaten' },
          { title: 'Mediator-aanpak', text: 'Onderzoeken verwachtingen en belangen; zoeken naar balans tussen groei en resultaat' }
        ],
        questions: [
          {
            text: 'Ahmed zegt: "Het maakt niet uit hoe hard ik werk, Sophie krijgt toch altijd de beste kansen." Wat is de beste reactie van de mediator?',
            options: [
              { label: 'A', text: 'Waarom denk je dat dat gebeurt?', score: 0, feedback: 'Deze vraag kan beschuldigend overkomen en leidt niet direct naar Ahmeds ervaring.', skill: 'neutrality' },
              { label: 'B', text: 'Kun je uitleggen welke ervaringen je tot die conclusie hebben gebracht?', score: 2, feedback: 'Je onderzoekt concreet Ahmed zijn ervaring zonder te oordelen.', skill: 'listening' },
              { label: 'C', text: 'Misschien heeft Sophie gewoon meer talent.', score: 0, feedback: 'Dat relativeert Ahmed zijn gevoel en sluit zijn ervaring af.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Mark zegt: "Ik kies gewoon de meest ervaren persoon." Wat doet de mediator?',
            options: [
              { label: 'A', text: 'Onderzoeken wat Mark belangrijk vindt bij deze keuzes.', score: 2, feedback: 'Je verkent de overwegingen achter zijn keuzes.', skill: 'interests' },
              { label: 'B', text: 'Instemmen met Mark.', score: 0, feedback: 'Dat maakt je partijdig en blokkeert het gesprek.', skill: 'neutrality' },
              { label: 'C', text: 'Ahmed vragen waarom hij jaloers is.', score: 0, feedback: 'Dat is beschuldigend richting Ahmed en niet neutraal.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Wat is het belangrijkste doel aan het begin van het gesprek?',
            options: [
              { label: 'A', text: 'Begrijpen hoe beide partijen de situatie ervaren.', score: 2, feedback: 'Eerst verken je beleving en zorgen van beide kanten.', skill: 'listening' },
              { label: 'B', text: 'Projecten opnieuw verdelen.', score: 0, feedback: 'Oplossingen komen later; eerst moet je begrijpen.', skill: 'structure' },
              { label: 'C', text: 'Beslissen wie gelijk heeft.', score: 0, feedback: 'Dat is niet de rol van de mediator.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Welke vraag helpt om belangen te ontdekken?',
            options: [
              { label: 'A', text: 'Wie heeft de meeste ervaring?', score: 0, feedback: 'Dit leidt naar vergelijken, niet naar belangen.', skill: 'neutrality' },
              { label: 'B', text: 'Wat maakt dit onderwerp voor jou belangrijk?', score: 2, feedback: 'Je brengt onderliggende behoeften en waarden in beeld.', skill: 'interests' },
              { label: 'C', text: 'Wie heeft gelijk?', score: 0, feedback: 'Die vraag leidt tot partijdigheid.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Ahmed wordt zichtbaar emotioneel. Wat doet de mediator?',
            options: [
              { label: 'A', text: 'De emotie erkennen.', score: 2, feedback: 'Emoties erkennen helpt het gesprek veilig te houden.', skill: 'emotion' },
              { label: 'B', text: 'Van onderwerp veranderen.', score: 0, feedback: 'Dat ontkent wat er speelt.', skill: 'neutrality' },
              { label: 'C', text: 'Uitleggen dat emoties niet helpen.', score: 0, feedback: 'Dat kan de spanning vergroten en is niet ondersteunend.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Welke behoefte hoor je waarschijnlijk bij Ahmed?',
            options: [
              { label: 'A', text: 'Erkenning.', score: 2, feedback: 'Dit sluit aan bij zijn wens om gezien en gewaardeerd te worden.', skill: 'interests' },
              { label: 'B', text: 'Meer vakantiedagen.', score: 0, feedback: 'Dat is niet duidelijk uit zijn verhaal.', skill: 'neutrality' },
              { label: 'C', text: 'Een hoger salaris.', score: 0, feedback: 'Dat volgt niet uit de casus.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Mark zegt: "Ik had niet door dat Ahmed dit zo ervaarde." Wat doet de mediator?',
            options: [
              { label: 'A', text: 'Dit gebruiken om wederzijds begrip te vergroten.', score: 2, feedback: 'Een opening om perspectieven te verbinden.', skill: 'neutrality' },
              { label: 'B', text: 'Meteen oplossingen voorstellen.', score: 0, feedback: 'Oplossingen kun je beter laten komen van partijen zelf.', skill: 'structure' },
              { label: 'C', text: 'Het onderwerp afsluiten.', score: 0, feedback: 'Dat negeert de kans op herstel van vertrouwen.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Welke fout moet de mediator vermijden?',
            options: [
              { label: 'A', text: 'Samenvatten.', score: 0, feedback: 'Samenvatten is juist nuttig om begrip te laten zien.', skill: 'listening' },
              { label: 'B', text: 'Oordelen over wie gelijk heeft.', score: 2, feedback: 'Oordelen belemmert mediation en kan partijen vervreemden.', skill: 'neutrality' },
              { label: 'C', text: 'Doorvragen.', score: 0, feedback: 'Doorvragen helpt vaak om belangen te ontdekken.', skill: 'listening' }
            ]
          },
          {
            text: 'Beide partijen vragen de mediator wat er moet gebeuren. Wat doet de mediator?',
            options: [
              { label: 'A', text: 'Een beslissing nemen.', score: 0, feedback: 'Een mediator neemt geen bindende beslissingen.', skill: 'neutrality' },
              { label: 'B', text: 'Partijen uitnodigen zelf mogelijke oplossingen te bedenken.', score: 2, feedback: 'Je stimuleert eigenaarschap en haalbare oplossingen.', skill: 'structure' },
              { label: 'C', text: 'Mark adviseren hoe hij moet leidinggeven.', score: 0, feedback: 'Dat is richtinggevend en partijdig.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Wat is uiteindelijk het doel van mediation in deze casus?',
            options: [
              { label: 'A', text: 'Bepalen wie de volgende opdracht krijgt.', score: 0, feedback: 'Dat is te beperkt en positioneel.', skill: 'neutrality' },
              { label: 'B', text: 'Een winnaar aanwijzen.', score: 0, feedback: 'Mediation is geen wedstrijd.', skill: 'neutrality' },
              { label: 'C', text: 'Meer begrip, vertrouwen en samenwerking creëren.', score: 2, feedback: 'Dit is het gewenste resultaat van mediation.', skill: 'interests' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'school',
    name: 'School',
    description: 'Conflicten tussen leerlingen, docenten en teams op school.',
    cases: [
      {
        id: 'school-1',
        title: 'Groepsopdracht',
        description: 'Sarah draagt het meeste werk, terwijl Ruben thuis onder stress staat en weinig bijdraagt.',
        perspectiveA: 'Sarah voelt zich verantwoordelijk voor het resultaat.',
        perspectiveB: 'Ruben worstelt met privésituatie en schaamt zich.',
        positions: 'A wil inzet van iedereen; B wil begrip voor zijn situatie.',
        concerns: 'A vreest ongelijkheid; B vreest oordeel.',
        interests: 'A wil een goed resultaat; B wil steun en begrip.',
        references: [
          { title: 'Kernprobleem', text: 'Ongelijke inzet in groepsopdracht vs. privémoeilijkheden' },
          { title: 'Sarah voelt zich', text: 'Verantwoordelijk voor resultaat, draagt meeste werk' },
          { title: 'Ruben voelt zich', text: 'Onder druk thuis, schaamt zich, kan niet bijdragen' },
          { title: 'Mediator-aanpak', text: 'Onderzoeken wat beiden nodig hebben; zoeken naar steun en begrip' }
        ],
        questions: [
          {
            text: 'Wat helpt om dit conflict te verhelderen?',
            options: [
              { label: 'A', text: 'Vraag wat iedereen nodig heeft om bij te dragen.', score: 2, feedback: 'Je zoekt naar concrete behoeften.', skill: 'interests' },
              { label: 'B', text: 'Zeg dat Ruben harder moet werken.', score: 0, feedback: 'Dit sluit begrip uit en kan het vertrouwen ondermijnen.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of Sarah meer taken wil overnemen.', score: 1, feedback: 'Dat kan de druk op Sarah verhogen zonder het probleem op te lossen.', skill: 'structure' }
            ]
          },
          {
            text: 'Hoe toon je actief luisteren?',
            options: [
              { label: 'A', text: 'Herhaal wat Ruben voelt en vraag of dat klopt.', score: 2, feedback: 'Je toont empathie en laat ruimte voor nuance.', skill: 'listening' },
              { label: 'B', text: 'Bevestig dat Sarah gelijk heeft.', score: 0, feedback: 'Dat neemt een partijrol aan.', skill: 'neutrality' },
              { label: 'C', text: 'Stel direct een werkverdeling voor.', score: 1, feedback: 'Een verdeling kan later, eerst moet je de situatie verkennen.', skill: 'structure' }
            ]
          },
          {
            text: 'Welke vraag helpt jou als mediator neutraal te blijven?',
            options: [
              { label: 'A', text: 'Wat is voor jullie allebei belangrijk in dit project?', score: 2, feedback: 'Je vertaalt standpunten naar gedeelde belangen.', skill: 'neutrality' },
              { label: 'B', text: 'Wie draagt er nu het meeste bij?', score: 0, feedback: 'Dat kan beschuldigend overkomen.', skill: 'neutrality' },
              { label: 'C', text: 'Laten we eerst afspreken wat een eerlijk schema is.', score: 1, feedback: 'Dat is nuttig, maar nog niet direct gericht op neutraliteit.', skill: 'structure' }
            ]
          }
        ]
      },
      {
        id: 'school-2',
        title: 'Pesten',
        description: 'Noor voelt zich buitengesloten, terwijl klasgenoten denken dat het onschuldig is.',
        perspectiveA: 'Noor voelt zich gekwetst en onzeker.',
        perspectiveB: 'Klasgenoten zien hun gedrag als grapjes.',
        positions: 'A wil respect; B wil niet beschuldigd worden.',
        concerns: 'A vreest sociale isolatie; B vreest onterecht als pester gezien te worden.',
        interests: 'A wil veiligheid; B wil een fijne sfeer zonder confrontatie.',
        references: [
          { title: 'Kernprobleem', text: 'Buitensluiting vs. grappenmakerij - verschillende perspectieven' },
          { title: 'Noor voelt zich', text: 'Gekwetst, buitengesloten, onzeker, bang voor isolatie' },
          { title: 'Klasgenoten voelen zich', text: 'Niet schuldig (zien het als grapjes), bang beschuldigd te worden' },
          { title: 'Mediator-aanpak', text: 'Erkennen emoties van beide zijden; zoeken naar wederzijds begrip en veiligheid' }
        ],
        questions: [
          {
            text: 'Wat is de beste manier om emoties te erkennen?',
            options: [
              { label: 'A', text: 'Ik hoor dat jij je buitengesloten voelt, klopt dat?', score: 2, feedback: 'Je erkent de ervaring en nodigt uit tot bevestiging.', skill: 'emotion' },
              { label: 'B', text: 'Dit is gewoon een misverstand.', score: 0, feedback: 'Dat minimaliseert Noor haar gevoel.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of de klas een andere benadering wil proberen.', score: 1, feedback: 'Dat is nuttig, maar eerst moet je de situatie verkennen.', skill: 'structure' }
            ]
          },
          {
            text: 'Hoe blijf je neutraal met beide partijen?',
            options: [
              { label: 'A', text: 'Vraag wat elke partij belangrijk vindt voor de sfeer in de klas.', score: 2, feedback: 'Je maakt beide perspectieven gelijkwaardig.', skill: 'neutrality' },
              { label: 'B', text: 'Geef Noor advies over haar gedrag.', score: 0, feedback: 'Dat plaatst je aan één kant.', skill: 'neutrality' },
              { label: 'C', text: 'Vertel de klas dat pesten nooit goed is.', score: 1, feedback: 'Dat is waar, maar het maakt je nog geen mediator in het gesprek.', skill: 'structure' }
            ]
          },
          {
            text: 'Welke vraag helpt belangen vinden?',
            options: [
              { label: 'A', text: 'Wat willen jullie allebei bereiken in deze klas?', score: 2, feedback: 'Je zoekt naar gedeelde doelen.', skill: 'interests' },
              { label: 'B', text: 'Wie is er nu het meest verantwoordelijk?', score: 0, feedback: 'Dat is een beschuldigende vraag.', skill: 'neutrality' },
              { label: 'C', text: 'Is deze situatie makkelijk op te lossen?', score: 1, feedback: 'Dat gaat over oplossing in plaats van onderliggende waarden.', skill: 'structure' }
            ]
          }
        ]
      },
      {
        id: 'school-3',
        title: 'Conflict met Docent',
        description: 'Een student voelt zich onterecht beoordeeld, terwijl de docent de criteria volgt.',
        perspectiveA: 'De student voelt zich niet serieus genomen.',
        perspectiveB: 'De docent vindt de beoordeling eerlijk.',
        positions: 'A wil herkansing of uitleg; B wil vasthouden aan de regels.',
        concerns: 'A is bang voor onrecht; B is bang voor het ondermijnen van het criterium.',
        interests: 'A wil respect; B wil professionaliteit.',
        references: [
          { title: 'Kernprobleem', text: 'Gevoeld onrecht vs. eerlijke beoordeling volgens criteria' },
          { title: 'Student voelt zich', text: 'Niet serieus genomen, onrecht, bang voor gevolgen' },
          { title: 'Docent denkt', text: 'Beoordeling is eerlijk en volgt criteria' },
          { title: 'Mediator-aanpak', text: 'Begrijpen beide perspectieven; zoeken naar communicatie en respect' }
        ],
        questions: [
          {
            text: 'Hoe luister je actief in dit gesprek?',
            options: [
              { label: 'A', text: 'Herhaal wat de student belangrijk vindt aan zijn inzet.', score: 2, feedback: 'Je toont begrip voor de student zijn beleving.', skill: 'listening' },
              { label: 'B', text: 'Zeg dat de docent hard heeft gewerkt en niet hoeft te veranderen.', score: 0, feedback: 'Dat neemt een positie in.', skill: 'neutrality' },
              { label: 'C', text: 'Geef een oordeel over het cijfer.', score: 0, feedback: 'Dat is geen rol van de mediator.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Welke interventie kan de docent helpen perspectief te hebben?',
            options: [
              { label: 'A', text: 'Vraag wat de student nodig heeft om het gevoel van onrecht te verminderen.', score: 2, feedback: 'Je brengt de ervaring van de student in beeld.', skill: 'emotion' },
              { label: 'B', text: 'Staak het gesprek als het te emotioneel wordt.', score: 0, feedback: 'Dat voorkomt geen begrip.', skill: 'structure' },
              { label: 'C', text: 'Zeg dat de regels prioriteit hebben.', score: 1, feedback: 'Dat kan waar zijn, maar je mag de emoties niet negeren.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Wat helpt om de belangen te herkennen?',
            options: [
              { label: 'A', text: 'Vraag waar de docent en student allebei waarde aan hechten.', score: 2, feedback: 'Dat brengt gezamenlijke belangen in kaart.', skill: 'interests' },
              { label: 'B', text: 'Vraag wie er meer kennis heeft over de opdracht.', score: 0, feedback: 'Dat leidt af van het mediationdoel.', skill: 'neutrality' },
              { label: 'C', text: 'Zeg dat de student zijn score gewoon moet accepteren.', score: 0, feedback: 'Dat is partijdig richting de docent.', skill: 'neutrality' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'familie',
    name: 'Familie',
    description: 'Spanningen thuis tussen gezinsleden of familieleden.',
    cases: [
      {
        id: 'familie-1',
        title: 'Erfenis',
        description: 'Een broer wil het ouderlijk huis verkopen, de zus wil het behouden.',
        perspectiveA: 'De broer wil financiële duidelijkheid.',
        perspectiveB: 'De zus wil de herinneringen bewaren.',
        positions: 'A wil verkoop; B wil behoud.',
        concerns: 'A vreest geldproblemen; B vreest verlies van verbondenheid.',
        interests: 'A wil zekerheid; B wil emotionele waarde.',
        references: [
          { title: 'Kernprobleem', text: 'Financiële waarde vs. emotionele betekenis van erfenis' },
          { title: 'Broer voelt zich', text: 'Bang voor geldproblemen, wil financiële duidelijkheid' },
          { title: 'Zus voelt zich', text: 'Bang voor verlies van herinneringen en verbondenheid' },
          { title: 'Sleutelkwestie', text: 'Het huis vertegenwoordigt verschillende waarden voor beiden' },
          { title: 'Mediator-aanpak', text: 'Beide perspectieven erkennen; zoeken naar creativiteit (bijv. behoud met financiële oplossing)' }
        ],
        questions: [
          {
            text: 'Welke vraag helpt belangen onderzoeken?',
            options: [
              { label: 'A', text: 'Wat is dit huis voor jullie beiden?', score: 2, feedback: 'Je brengt de diepe betekenis en belangen in kaart.', skill: 'interests' },
              { label: 'B', text: 'Wie heeft het meeste recht op het huis?', score: 0, feedback: 'Dat kan beschuldigend werken.', skill: 'neutrality' },
              { label: 'C', text: 'Is het huis niet gewoon te groot voor jullie?', score: 1, feedback: 'Dat kan een praktische vraag zijn, maar nog niet gericht op emoties.', skill: 'emotion' }
            ]
          },
          {
            text: 'Hoe blijf je als mediator neutraal?',
            options: [
              { label: 'A', text: 'Herhaal beide zorgen zonder oordeel.', score: 2, feedback: 'Je laat zien dat je geen kant kiest.', skill: 'neutrality' },
              { label: 'B', text: 'Zeg dat de financiële kant het belangrijkst is.', score: 0, feedback: 'Dat negeert de emotionele waarde.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag de zus zich minder emotioneel op te stellen.', score: 0, feedback: 'Dat kan partijdig overkomen.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Wat helpt het gesprek structureren?',
            options: [
              { label: 'A', text: 'Vraag om eerst feiten en daarna emoties te benoemen.', score: 2, feedback: 'That helps duidelijkheid en rust te scheppen.', skill: 'structure' },
              { label: 'B', text: 'Laat iedereen vrij spreken zonder tijdslimiet.', score: 0, feedback: 'Dat kan het gesprek chaotisch maken.', skill: 'structure' },
              { label: 'C', text: 'Beëindig het gesprek zodra het emotioneel wordt.', score: 1, feedback: 'Emoties horen bij mediation; je hoeft het niet te vermijden.', skill: 'emotion' }
            ]
          }
        ]
      },
      {
        id: 'familie-2',
        title: 'Mantelzorg',
        description: 'Een dochter voelt zich uitgeput door mantelzorg, de broer helpt vooral financieel.',
        perspectiveA: 'De dochter voelt zich overbelast.',
        perspectiveB: 'De broer voelt zich onterecht beschuldigd.',
        positions: 'A wil praktische hulp; B wil erkenning voor zijn bijdrage.',
        concerns: 'A vreest uitputting; B vreest oneerlijke kritiek.',
        interests: 'A wil steun; B wil waardering.',
        references: [
          { title: 'Kernprobleem', text: 'Verschillende vormen van zorg (praktisch vs. financieel)' },
          { title: 'Dochter voelt zich', text: 'Overbelast, uitgeput, niet ondersteund in praktische zorg' },
          { title: 'Broer voelt zich', text: 'Onterecht beschuldigd, draagt financieel bij' },
          { title: 'Sleutelkwestie', text: 'Zichtbare zorg (praktisch) vs. onzichtbare zorg (financieel) - beide waardevol' },
          { title: 'Mediator-aanpak', text: 'Erkennen beide bijdragen; zoeken naar betere communicatie en steun' }
        ],
        questions: [
          {
            text: 'Welke formulering ondersteunt actief luisteren?',
            options: [
              { label: 'A', text: 'Ik hoor dat je veel zorgt en hulp nodig hebt, is dat juist?', score: 2, feedback: 'Je erkent de ervaring en vraagt om bevestiging.', skill: 'listening' },
              { label: 'B', text: 'Je moet je broer meer waarderen.', score: 0, feedback: 'Dat neemt een oordeel in plaats van een mediatiepositie.', skill: 'neutrality' },
              { label: 'C', text: 'Kun je het financieel maken, broer?', score: 1, feedback: 'Dat is een praktische vraag, niet direct gericht op gevoelens.', skill: 'structure' }
            ]
          },
          {
            text: 'Wat is een goede neutrale interventie?',
            options: [
              { label: 'A', text: 'Laat beiden hun verwachtingen verwoorden.', score: 2, feedback: 'Zo geef je iedereen gelijke ruimte.', skill: 'neutrality' },
              { label: 'B', text: 'Vertel de dochter dat zij meer moet delegeren.', score: 0, feedback: 'Dit kan als partij nemen overkomen.', skill: 'neutrality' },
              { label: 'C', text: 'Stel direct een verdeelsleutel voor.', score: 1, feedback: 'Een voorstel kan later, maar eerst moet je luisteren.', skill: 'structure' }
            ]
          },
          {
            text: 'Welke vraag helpt belangen zichtbaar maken?',
            options: [
              { label: 'A', text: 'Wat is voor jou belangrijk bij de zorg voor je moeder?', score: 2, feedback: 'Je zoekt naar de onderliggende motivatie.', skill: 'interests' },
              { label: 'B', text: 'Wie doet er nu meer dan de ander?', score: 0, feedback: 'Dat is een verdeelende vraag en kan de spanning verhogen.', skill: 'neutrality' },
              { label: 'C', text: 'Kun je dit niet beter professioneel regelen?', score: 1, feedback: 'Een externe oplossing kan, maar dit gaat voorbij aan jullie behoeften.', skill: 'structure' }
            ]
          }
        ]
      },
      {
        id: 'familie-3',
        title: 'Opvoeding',
        description: 'De vader wil duidelijke regels, de moeder wil meer zelfstandigheid voor de kinderen.',
        perspectiveA: 'Vader wil respect en structuur.',
        perspectiveB: 'Moeder wil ruimte voor zelfstandigheid.',
        positions: 'A wil regels; B wil vrijheid.',
        concerns: 'A vreest verlies van respect; B vreest spanningen.',
        interests: 'A wil veiligheid; B wil verbondenheid.',
        questions: [
          {
            text: 'Hoe houd je het gesprek neutraal?',
            options: [
              { label: 'A', text: 'Vraag naar de zorgen achter beide opties.', score: 2, feedback: 'Je houdt beide perspectieven gelijkwaardig.', skill: 'neutrality' },
              { label: 'B', text: 'Zeg dat kinderen regels nodig hebben.', score: 0, feedback: 'Dat is een oordeel zonder beide belangen te onderzoeken.', skill: 'neutrality' },
              { label: 'C', text: 'Stel een compromis voor tussen regels en vrijheid.', score: 1, feedback: 'Compromissen zijn later nuttig, maar eerst verken je de belangen.', skill: 'structure' }
            ]
          },
          {
            text: 'Welke interventie laat actief luisteren zien?',
            options: [
              { label: 'A', text: 'Vat samen hoe de waarden van ieder verschil maken.', score: 2, feedback: 'Je toont dat je écht luistert naar de achterliggende motieven.', skill: 'listening' },
              { label: 'B', text: 'Zeg dat ze moeten kiezen voor één aanpak.', score: 0, feedback: 'Dat beperkt de ruimte voor beide kanten.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag naar voorbeelden van moeilijke situaties.', score: 1, feedback: 'Een nuttige vraag, maar niet direct gericht op gevoelens.', skill: 'emotion' }
            ]
          },
          {
            text: 'Wat helpt om belangen te ontdekken?',
            options: [
              { label: 'A', text: 'Wat willen jullie bereiken voor de kinderen op lange termijn?', score: 2, feedback: 'Je brengt gezamenlijke belangen en toekomstbeelden in beeld.', skill: 'interests' },
              { label: 'B', text: 'Is deze discussie echt belangrijk?', score: 0, feedback: 'Dat kan het gevoel van belang wegnemen.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag naar regels die jullie allebei acceptabel vinden.', score: 1, feedback: 'Dat is relevant maar nog niet gericht op waarden.', skill: 'structure' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'relaties',
    name: 'Relaties',
    description: 'Conflicten tussen partners en binnen relaties.',
    cases: [
      {
        id: 'relaties-1',
        title: 'Jaloezie',
        description: 'Partner A voelt zich onzeker door het contact van partner B met een collega.',
        perspectiveA: 'Partner A ervaart onzekerheid en wantrouwen.',
        perspectiveB: 'Partner B ziet contact als puur vriendschappelijk.',
        positions: 'A wil grenzen; B wil vrijheid.',
        concerns: 'A vreest verlies; B vreest gebrek aan vertrouwen.',
        interests: 'A wil veiligheid; B wil autonomie.',
        references: [
          { title: 'Kernprobleem', text: 'Vertrouwen en grenzen in relatie vs. persoonlijke vrijheid' },
          { title: 'Partner A voelt zich', text: 'Onzeker, wantrouwig, bang voor verlies' },
          { title: 'Partner B voelt zich', text: 'Niet vertrouwd, wil persoonlijke vrijheid bewaren' },
          { title: 'Sleutelkwestie', text: 'Communicatie over vertrouwen en grenzen ontbreekt' },
          { title: 'Mediator-aanpak', text: 'Erkennen onzekerheid en behoefte aan vrijheid; zoeken naar gemeenschappelijke veiligheid' }
        ],
        questions: [
          {
            text: 'Welke vraag helpt emoties te erkennen?',
            options: [
              { label: 'A', text: 'Ik hoor dat dit je onzeker maakt, klopt dat?', score: 2, feedback: 'Je erkent de emotie zonder partij te kiezen.', skill: 'emotion' },
              { label: 'B', text: 'Je moet geruststellend zijn tegenover je partner.', score: 0, feedback: 'Dat is een advies en geen neutrale interventie.', skill: 'neutrality' },
              { label: 'C', text: 'Is dit echt een relatieprobleem?', score: 1, feedback: 'Dat kan als minimaliseren overkomen.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Hoe blijf je neutraal in dit gesprek?',
            options: [
              { label: 'A', text: 'Vraag beide partners naar wat ze nodig hebben qua vertrouwen.', score: 2, feedback: 'Je houdt de focus op behoeften.', skill: 'neutrality' },
              { label: 'B', text: 'Zeg dat de relatie vooral om eerlijkheid draait.', score: 1, feedback: 'Dat is waar, maar je kiest nog niet voor beide partijen.', skill: 'neutrality' },
              { label: 'C', text: 'Adviseer dat het contact met de collega stopt.', score: 0, feedback: 'Dat neemt een positionele houding aan.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Wat helpt om belangen te ontdekken?',
            options: [
              { label: 'A', text: 'Wat vinden jullie allebei belangrijk in jullie relatie?', score: 2, feedback: 'Je brengt gezamenlijke waarden in beeld.', skill: 'interests' },
              { label: 'B', text: 'Wie voelt zich nu het meest gekwetst?', score: 0, feedback: 'Dat kan competitie in plaats van samenwerking bevorderen.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag naar de regels rond contact met anderen.', score: 1, feedback: 'Dat gaat over afspraken, niet direct over belangen.', skill: 'structure' }
            ]
          }
        ]
      },
      {
        id: 'relaties-2',
        title: 'Toekomstplannen',
        description: 'Eén partner wil kinderen, de andere voelt zich nog niet klaar.',
        perspectiveA: 'Partner A denkt steeds vaker aan een gezin.',
        perspectiveB: 'Partner B ervaart druk en onzekerheid.',
        positions: 'A wil vooruit; B wil rust.',
        concerns: 'A vreest tijdverlies; B vreest overhaaste keuzes.',
        interests: 'A wil gezin; B wil stabiliteit.',
        references: [
          { title: 'Kernprobleem', text: 'Verschillende toekomstvisies en timing voor grote levensbeslissing' },
          { title: 'Partner A voelt zich', text: 'Klaar voor gezin, bang voor vertraging' },
          { title: 'Partner B voelt zich', text: 'Onder druk, onzeker, wil meer tijd en stabiliteit' },
          { title: 'Sleutelkwestie', text: 'Grote levensbeslissing waarbij beide partijen zich gezien willen voelen' },
          { title: 'Mediator-aanpak', text: 'Beide zeitgeistsvisies respecteren; zoeken naar communicatie en begrip' }
        ],
        questions: [
          {
            text: 'Welke vraag helpt actief luisteren?',
            options: [
              { label: 'A', text: 'Wat betekent een gezin voor jou?', score: 2, feedback: 'Je geeft ruimte voor persoonlijke waarden.', skill: 'listening' },
              { label: 'B', text: 'Waarom wil je geen kinderen?', score: 1, feedback: 'Deze vraag kan directer, maar het is nog niet actief luisteren.', skill: 'neutrality' },
              { label: 'C', text: 'Vertel je partner dat hij niet moet pushen.', score: 0, feedback: 'Dat is partijdig.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Hoe blijf je neutraal tussen deze wensen?',
            options: [
              { label: 'A', text: 'Vraag wat beide partners belangrijk vinden voor de toekomst.', score: 2, feedback: 'Je richt op gedeelde belangen en respecteert verschillen.', skill: 'neutrality' },
              { label: 'B', text: 'Zeg dat er een goed moment moet komen.', score: 0, feedback: 'Dat blijft te algemeen en niet behulpzaam.', skill: 'structure' },
              { label: 'C', text: 'Focus op de zorgen van de partner die geen kinderen wil.', score: 1, feedback: 'Je negeert dan de ander.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Welke vraag helpt belangen vinden?',
            options: [
              { label: 'A', text: 'Welke waarden willen jullie allebei behouden?', score: 2, feedback: 'Je zoekt naar onderliggende wensen die samen kunnen bestaan.', skill: 'interests' },
              { label: 'B', text: 'Wie voelt zich nu meer onder druk staan?', score: 0, feedback: 'Die vraag kan de spanning vergroten.', skill: 'neutrality' },
              { label: 'C', text: 'Heb je al een tijdlijn voor kinderen?', score: 1, feedback: 'Dat is praktisch, maar niet direct op waarden gericht.', skill: 'structure' }
            ]
          }
        ]
      },
      {
        id: 'relaties-3',
        title: 'Vertrouwen',
        description: 'Een partner voelt zich beschuldigd door verborgen berichten op een telefoon.',
        perspectiveA: 'Partner A voelt zich gekwetst en twijfelt aan eerlijkheid.',
        perspectiveB: 'Partner B ervaart zijn privacy geschonden.',
        positions: 'A wil duidelijkheid; B wil vrijheid.',
        concerns: 'A vreest oneerlijkheid; B vreest controle.',
        interests: 'A wil veiligheid; B wil respect.',
        questions: [
          {
            text: 'Wat is een goede neutrale vraag?',
            options: [
              { label: 'A', text: 'Wat hebben jullie allebei nodig om je veilig te voelen?', score: 2, feedback: 'Je houdt beide kanten gelijkwaardig horen.', skill: 'neutrality' },
              { label: 'B', text: 'Je moet je telefoon niet verbergen.', score: 0, feedback: 'Dat neemt een partijrol in.', skill: 'neutrality' },
              { label: 'C', text: 'Zeg dat vertrouwen de basis is van elke relatie.', score: 1, feedback: 'Dat is waar, maar nog geen mediationvraag.', skill: 'structure' }
            ]
          },
          {
            text: 'Hoe herken je belangen in dit gesprek?',
            options: [
              { label: 'A', text: 'Vraag wat eerlijkheid en privacy voor hen betekenen.', score: 2, feedback: 'Je brengt de onderliggende waarden in kaart.', skill: 'interests' },
              { label: 'B', text: 'Vraag wie er meer gefrustreerd is.', score: 0, feedback: 'Dat kan partijdigheid aanwakkeren.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of ze samen afspraken willen maken.', score: 1, feedback: 'Dat is relevant, maar niet direct gericht op belangen.', skill: 'structure' }
            ]
          },
          {
            text: 'Welke vraag toont actief luisteren?',
            options: [
              { label: 'A', text: 'Ik hoor dat dit je erg raakt, klopt dat?', score: 2, feedback: 'Je bevestigt de emotie zonder partij te kiezen.', skill: 'listening' },
              { label: 'B', text: 'Zeg dat hij je vertrouwen moet winnen.', score: 0, feedback: 'Dat is een advies en geen neutrale interventie.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of je kunt samenvatten wat er gebeurd is.', score: 1, feedback: 'Dat helpt, maar het is minder direct empathisch.', skill: 'listening' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'buurt',
    name: 'Buurt',
    description: 'Conflicten tussen buren over gedrag, regels en gebruik.',
    cases: [
      {
        id: 'buurt-1',
        title: 'Geluidsoverlast',
        description: 'Een buurman klaagt over harde muziek terwijl de buurvrouw vaak bezoek ontvangt.',
        perspectiveA: 'De buurman slaapt slecht door geluid.',
        perspectiveB: 'De buurvrouw voelt zich aangevallen door de klachten.',
        positions: 'A wil rust; B wil sociale ruimte.',
        concerns: 'A vreest chronische slaapverstoring; B vreest dat haar sociale leven beperkt wordt.',
        interests: 'A wil ontspanning; B wil vrijheid.',
        references: [
          { title: 'Kernprobleem', text: 'Geluidsoverlast vs. behoefte aan sociaal leven en gastvrijheid' },
          { title: 'Buurman voelt zich', text: 'Slecht slapen, overlast, voelt zich niet gerespecteerd' },
          { title: 'Buurvrouw voelt zich', text: 'Aangevallen, haar sociale leven bedreigd, niet begrepen' },
          { title: 'Sleutelkwestie', text: 'Balans tussen rust en sociaal leven in gedeelde ruimte' },
          { title: 'Mediator-aanpak', text: 'Beide perspectieven erkennen; zoeken naar praktische afspraken met respect' }
        ],
        questions: [
          {
            text: 'Wat helpt jou om neutraal te blijven?',
            options: [
              { label: 'A', text: 'Vraag naar beide perspectieven zonder te oordelen.', score: 2, feedback: 'Je geeft beide kanten ruimte.', skill: 'neutrality' },
              { label: 'B', text: 'Zeg dat geluidsoverlast altijd onacceptabel is.', score: 0, feedback: 'Dat neemt te snel een standpunt in.', skill: 'neutrality' },
              { label: 'C', text: 'Stel voor dat ze nooit meer feest mogen vieren.', score: 0, feedback: 'Dat is een partijgerichte oplossing.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Welke vraag helpt belangen te vinden?',
            options: [
              { label: 'A', text: 'Wat willen jullie allebei bereiken in deze buurt?', score: 2, feedback: 'Je zoekt naar gedeelde doelen.', skill: 'interests' },
              { label: 'B', text: 'Wie maakt er nu meer geluid?', score: 0, feedback: 'Dat is beschuldigend.', skill: 'neutrality' },
              { label: 'C', text: 'Is er een vorm van compromis mogelijk?', score: 1, feedback: 'Dat kan later, maar eerst verken je belangen.', skill: 'structure' }
            ]
          },
          {
            text: 'Hoe toon je actief luisteren hier?',
            options: [
              { label: 'A', text: 'Herhaal wat de buurman en buurvrouw belangrijk vinden.', score: 2, feedback: 'Je laat luisteren zien zonder oordeel.', skill: 'listening' },
              { label: 'B', text: 'Zeg dat ze geen rekening houden met elkaar.', score: 0, feedback: 'Dat is een oordeel en geen mediatie-interventie.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of de eigenaar al oplossingen heeft geprobeerd.', score: 1, feedback: 'Dat is nuttig, maar je kunt het nog sterker maken met empathie.', skill: 'structure' }
            ]
          }
        ]
      },
      {
        id: 'buurt-2',
        title: 'Parkeerplaats',
        description: 'Twee buren maken aanspraak op dezelfde parkeerplek en voelen zich niet gerespecteerd.',
        perspectiveA: 'Bewoner A wil zijn vaste plek behouden.',
        perspectiveB: 'Bewoner B wil de plek gebruiken wanneer dat nodig is.',
        positions: 'A wil exclusiviteit; B wil flexibiliteit.',
        concerns: 'A vreest dat zijn plek wordt weggenomen; B vreest onbegrip.',
        interests: 'A wil zekerheid; B wil gemak.',
        references: [
          { title: 'Kernprobleem', text: 'Eigendomsvraag en zekerheid vs. flexibiliteit in gedeelde ruimte' },
          { title: 'Bewoner A voelt zich', text: 'Eigenaar van vaste plek, wil zekerheid, bang voor verlies' },
          { title: 'Bewoner B voelt zich', text: 'Niet gerespecteerd, wil flexibiliteit, bang voor onbegrip' },
          { title: 'Sleutelkwestie', text: 'Geen van beiden voelt zich gezien in hun behoefte' },
          { title: 'Mediator-aanpak', text: 'Beide belangen onderzoeken; zoeken naar eerlijke praktische afspraken' }
        ],
        questions: [
          {
            text: 'Wat helpt om dit gesprek structureren?',
            options: [
              { label: 'A', text: 'Laat beiden om de beurt hun punten delen.', score: 2, feedback: 'Dat brengt structuur en eerlijkheid.', skill: 'structure' },
              { label: 'B', text: 'Reken af op wie het meeste last heeft.', score: 0, feedback: 'Dat kan als partijdig overkomen.', skill: 'neutrality' },
              { label: 'C', text: 'Stel direct een schema voor.', score: 1, feedback: 'Een schema is nuttig later, maar eerst moet je luisteren.', skill: 'structure' }
            ]
          },
          {
            text: 'Welke vraag helpt belangen ontdekken?',
            options: [
              { label: 'A', text: 'Wat is voor jullie allebei belangrijk aan deze plek?', score: 2, feedback: 'Je brengt onderliggende belangen in beeld.', skill: 'interests' },
              { label: 'B', text: 'Wie was hier eerst?', score: 0, feedback: 'Dat hoeft niet relevant te zijn voor mediation.', skill: 'neutrality' },
              { label: 'C', text: 'Kun je niet een andere plek zoeken?', score: 1, feedback: 'Dat kan, maar eerst verken je hun behoeften.', skill: 'structure' }
            ]
          },
          {
            text: 'Waartoe nodigt een goede luistervraag uit?',
            options: [
              { label: 'A', text: 'Hoe voel je je als je de plek niet kunt gebruiken?', score: 2, feedback: 'Je vraagt naar de ervaring en emotie.', skill: 'emotion' },
              { label: 'B', text: 'Ben je boos omdat je niet kunt parkeren?', score: 0, feedback: 'Dat klinkt als een oordeel.', skill: 'neutrality' },
              { label: 'C', text: 'Wat is het grootste bezwaar tegen een schema?', score: 1, feedback: 'Dat is praktisch, niet zo zeer empathisch.', skill: 'structure' }
            ]
          }
        ]
      },
      {
        id: 'buurt-3',
        title: 'Huisdieren',
        description: 'Een hond blaft vaak en zorgt voor overlast, terwijl de eigenaar zich aangevallen voelt.',
        perspectiveA: 'De overbuur ervaart regelmatige geluidsoverlast.',
        perspectiveB: 'De eigenaar probeert oplossingen te vinden en voelt zich niet gehoord.',
        positions: 'A wil stilte; B wil begrip voor de hond.',
        concerns: 'A vreest continu geluid; B vreest onterecht oordeel.',
        interests: 'A wil rust; B wil ruimte voor zijn huisdier.',
        questions: [
          {
            text: 'Wat helpt je om neutraal te blijven?',
            options: [
              { label: 'A', text: 'Erken beide zorgen en vraag naar concrete voorbeelden.', score: 2, feedback: 'Je blijft neutraal en laat ruimte aan beide kanten.', skill: 'neutrality' },
              { label: 'B', text: 'Zeg dat de hond stil moet zijn.', score: 0, feedback: 'Dat neemt een positie in.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag wie de meeste last heeft.', score: 1, feedback: 'Dat is niet neutraal genoeg.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Welke vraag helpt belangen herkennen?',
            options: [
              { label: 'A', text: 'Wat vinden jullie allebei belangrijk in jullie leefomgeving?', score: 2, feedback: 'Je zoekt naar gedeelde belangen.', skill: 'interests' },
              { label: 'B', text: 'Is een huisdier niet ongepast hier?', score: 0, feedback: 'Dat is een oordeel, geen mediationvraag.', skill: 'neutrality' },
              { label: 'C', text: 'Kun je het dier anders huisvesten?', score: 1, feedback: 'Dat is een praktische oplossing, maar nog geen belangenvraag.', skill: 'structure' }
            ]
          },
          {
            text: 'Wat toont actief luisteren in dit geval?',
            options: [
              { label: 'A', text: 'Herhaal wat de overlast voor de buur betekent.', score: 2, feedback: 'Je erkent de impact op de ander.', skill: 'listening' },
              { label: 'B', text: 'Zeg dat de eigenaar maar een andere buurt moet zoeken.', score: 0, feedback: 'Dat is geen neutraliteit.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of de eigenaar al oplossingen heeft geprobeerd.', score: 1, feedback: 'Dat is nuttig, maar je kunt het nog sterker maken met empathie.', skill: 'structure' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'zorg',
    name: 'Zorg',
    description: 'Conflicten tussen patiënten, familie en zorgprofessionals.',
    cases: [
      {
        id: 'zorg-1',
        title: 'Patiënt en Verpleegkundige',
        description: 'Familieleden vinden dat hun moeder onvoldoende aandacht krijgt, terwijl de verpleegkundige onder hoge druk werkt.',
        perspectiveA: 'Familieleden zijn bezorgd over haar welzijn.',
        perspectiveB: 'De verpleegkundige doet haar best onder lastige omstandigheden.',
        positions: 'A wil meer aandacht; B wil hulp en begrip.',
        concerns: 'A vreest verwaarlozing; B vreest burnout.',
        interests: 'A wil zorgkwaliteit; B wil steun en werkbaarheid.',
        questions: [
          {
            text: 'Hoe toon je empathie zonder partijdig te worden?',
            options: [
              { label: 'A', text: 'Erken dat beiden goede intenties hebben en vraag wat zij nodig hebben.', score: 2, feedback: 'Je valideert zonder te kiezen.', skill: 'emotion' },
              { label: 'B', text: 'Zeg dat de verpleegkundige harder moet werken.', score: 0, feedback: 'Dat is partijgericht.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag alleen naar het rooster van de verpleegkundige.', score: 1, feedback: 'Dat is praktisch maar mist empathie.', skill: 'structure' }
            ]
          },
          {
            text: 'Welke vraag helpt belangen blootleggen?',
            options: [
              { label: 'A', text: 'Wat is voor jullie allebei belangrijk in de zorg van je moeder?', score: 2, feedback: 'Je brengt onderliggende waarden in kaart.', skill: 'interests' },
              { label: 'B', text: 'Vind je dat de zorg prioriteit heeft over werkdruk?', score: 0, feedback: 'Dit is een binaire vraag die kan polariseren.', skill: 'neutrality' },
              { label: 'C', text: 'Wat is het grootste knelpunt in het huidige rooster?', score: 1, feedback: 'Dat is relevant maar nog niet direct gericht op belangen.', skill: 'structure' }
            ]
          },
          {
            text: 'Wat helpt het gesprek te structureren?',
            options: [
              { label: 'A', text: 'Stel voor om eerst zorgen en daarna oplossingen te bespreken.', score: 2, feedback: 'Dat helpt om duidelijkheid te scheppen.', skill: 'structure' },
              { label: 'B', text: 'Laat iedereen vrijuit praten zonder sturing.', score: 0, feedback: 'Dat kan het gesprek onoverzichtelijk maken.', skill: 'structure' },
              { label: 'C', text: 'Zeg dat zij zich voor moeten bereiden op een oplossing.', score: 1, feedback: 'Voorbereiding is goed, maar eerst moet je luisteren.', skill: 'structure' }
            ]
          }
        ]
      },
      {
        id: 'zorg-2',
        title: 'Collega\'s in de Zorg',
        description: 'Twee verpleegkundigen beschuldigen elkaar van slechte samenwerking en de sfeer verslechtert.',
        perspectiveA: 'Verpleegkundige A voelt zich niet gehoord.',
        perspectiveB: 'Verpleegkundige B voelt zich ondergewaardeerd.',
        positions: 'A wil meer erkenning; B wil duidelijkheid over taakverdeling.',
        concerns: 'A vreest dat zij alleen komt te staan; B vreest onduidelijkheid.',
        interests: 'A wil samenwerking; B wil erkenning en duidelijkheid.',
        questions: [
          {
            text: 'Welke vraag helpt actief luisteren?',
            options: [
              { label: 'A', text: 'Wat ervaar je in de samenwerking met je collega?', score: 2, feedback: 'Je vraagt naar de ervaring zonder oordeel.', skill: 'listening' },
              { label: 'B', text: 'Zeg dat zij beiden meer moeten doen.', score: 0, feedback: 'Dat is te algemeen en niet empathisch.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of dit al eerder gebeurde.', score: 1, feedback: 'Dat kan helpen voor context.', skill: 'structure' }
            ]
          },
          {
            text: 'Wat is een goede neutrale interventie?',
            options: [
              { label: 'A', text: 'Laat ieder zeggen wat hij nodig heeft om beter samen te werken.', score: 2, feedback: 'Je houdt de focus op behoeften.', skill: 'neutrality' },
              { label: 'B', text: 'Geef één van beiden meteen advies.', score: 0, feedback: 'Dat keert de rol van de mediator om.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of hun leidinggevende kan bemiddelen.', score: 1, feedback: 'Een andere bemiddelaar kan later nuttig zijn, maar eerst verken je zelf hun verhaal.', skill: 'structure' }
            ]
          },
          {
            text: 'Welke vraag helpt belangen te vinden?',
            options: [
              { label: 'A', text: 'Wat vinden jullie allebei belangrijk in jullie werk?', score: 2, feedback: 'Je zoekt naar gedeelde belangen.', skill: 'interests' },
              { label: 'B', text: 'Wie doet er nu meer dan de ander?', score: 0, feedback: 'Dat kan de relatie verder schaden.', skill: 'neutrality' },
              { label: 'C', text: 'Is er een taakindeling die het beter maakt?', score: 1, feedback: 'Dat is praktisch, maar eerst verken je belangen.', skill: 'structure' }
            ]
          }
        ]
      },
      {
        id: 'zorg-3',
        title: 'Behandelkeuze',
        description: 'Een patiënt voelt zich niet serieus genomen, de arts volgt medische richtlijnen.',
        perspectiveA: 'De patiënt wil meer inspraak in de behandeling.',
        perspectiveB: 'De arts wil de best beschikbare zorg leveren.',
        positions: 'A wil medezeggenschap; B wil veilige zorg.',
        concerns: 'A vreest dat zijn zorgen niet worden gehoord; B vreest risico bij afwijking.',
        interests: 'A wil respect; B wil effectiviteit.',
        questions: [
          {
            text: 'Hoe blijf je neutraal in dit zorgsgesprek?',
            options: [
              { label: 'A', text: 'Herhaal beide zorgen en vraag wat ze belangrijk vinden.', score: 2, feedback: 'Je erkent beide kanten zonder oordeel.', skill: 'neutrality' },
              { label: 'B', text: 'Zeg dat de arts gelijk heeft omdat hij expertise heeft.', score: 0, feedback: 'Dat neemt een partijrol in.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of de patiënt een andere arts wil zien.', score: 1, feedback: 'Dat kan een optie zijn, maar nog niet direct een mediatorvraag.', skill: 'structure' }
            ]
          },
          {
            text: 'Welke vraag helpt belangen te ontdekken?',
            options: [
              { label: 'A', text: 'Wat is voor jou het belangrijkste doel van de behandeling?', score: 2, feedback: 'Je zoekt naar onderliggende waarden in plaats van alleen zorgvoorkeuren.', skill: 'interests' },
              { label: 'B', text: 'Heb je al eerder zo\'n behandeling gehad?', score: 1, feedback: 'Dat geeft informatie, maar niet direct over belangen.', skill: 'structure' },
              { label: 'C', text: 'Zeg dat de arts zijn richtlijn moet volgen.', score: 0, feedback: 'Dat neemt geen neutrale houding aan.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Hoe luister je actief naar de patiënt?',
            options: [
              { label: 'A', text: 'Vat samen hoe het voor de patiënt voelt om niet gehoord te worden.', score: 2, feedback: 'Je erkent de emotionele ervaring.', skill: 'listening' },
              { label: 'B', text: 'Zeg dat hij te emotioneel is.', score: 0, feedback: 'Dat is niet behulpzaam.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of hij een second opinion wil.', score: 1, feedback: 'Dat is een mogelijke stap, maar eerst luister je.', skill: 'structure' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sport',
    name: 'Sport',
    description: 'Conflicten binnen sportteams en tussen spelers en coaches.',
    cases: [
      {
        id: 'sport-1',
        title: 'Speeltijd',
        description: 'Een speler voelt zich gemarginaliseerd omdat hij weinig kansen krijgt.',
        perspectiveA: 'De speler voelt zich teleurgesteld en onzeker.',
        perspectiveB: 'De coach kiest op basis van prestaties.',
        positions: 'A wil meer speeltijd; B wil het team sterk houden.',
        concerns: 'A vreest dat hij niet serieus wordt genomen; B vreest verlies van resultaten.',
        interests: 'A wil ontwikkeling; B wil teambalans.',
        questions: [
          {
            text: 'Wat is een goede vraag voor actief luisteren?',
            options: [
              { label: 'A', text: 'Hoe ervaar je je rol in het team?', score: 2, feedback: 'Je vraagt naar de ervaring zonder oordeel.', skill: 'listening' },
              { label: 'B', text: 'Zeg dat je coach je duidelijk moet maken.', score: 0, feedback: 'Dat is partijgericht.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of je meer moet trainen.', score: 1, feedback: 'Dat kan nuttig zijn, maar is een praktische vraag.', skill: 'structure' }
            ]
          },
          {
            text: 'Hoe kun je neutraliteit tonen?',
            options: [
              { label: 'A', text: 'Vat samen wat de speler en coach willen.', score: 2, feedback: 'Je laat beide kanten zien.', skill: 'neutrality' },
              { label: 'B', text: 'Zeg dat de coach gelijk heeft met zijn keuzes.', score: 0, feedback: 'Dat is partijdig.', skill: 'neutrality' },
              { label: 'C', text: 'Stel voor dat de speler meer moeite moet doen.', score: 1, feedback: 'Dat legt de druk op één kant.', skill: 'neutrality' }
            ]
          },
          {
            text: 'Welke vraag helpt belangen te ontdekken?',
            options: [
              { label: 'A', text: 'Wat willen jullie allebei bereiken met het team?', score: 2, feedback: 'Je zoekt naar gedeelde doelen.', skill: 'interests' },
              { label: 'B', text: 'Wie verdient meer speeltijd?', score: 0, feedback: 'Dat kan verdeeldheid creëren.', skill: 'neutrality' },
              { label: 'C', text: 'Is er een andere speler die hetzelfde voelt?', score: 1, feedback: 'Dat is minder direct op belangen.', skill: 'structure' }
            ]
          }
        ]
      },
      {
        id: 'sport-2',
        title: 'Teamconflict',
        description: 'De aanvoerder vindt dat sommige spelers trainingen niet serieus nemen.',
        perspectiveA: 'De aanvoerder voelt irritatie over de inzet van anderen.',
        perspectiveB: 'Een teamgenoot voelt zich bekritiseerd en ondergewaardeerd.',
        positions: 'A wil meer inzet; B wil erkenning.',
        concerns: 'A vreest verminderde teamdiscipline; B vreest onbegrip.',
        interests: 'A wil succes; B wil waardering.',
        questions: [
          {
            text: 'Hoe luister je naar beide kanten?',
            options: [
              { label: 'A', text: 'Vraag wat inzet en respect voor jullie betekenen.', score: 2, feedback: 'Je laat beide perspectieven duidelijk worden.', skill: 'listening' },
              { label: 'B', text: 'Zeg dat teamgenoten zich gewoon moeten gedragen.', score: 0, feedback: 'Dat is een oordeel en geen mediatoractie.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of de coach regels moet stellen.', score: 1, feedback: 'Dat is een mogelijke vervolgvraag, maar minder gericht op emoties.', skill: 'structure' }
            ]
          },
          {
            text: 'Welke interventie helpt om neutraal te blijven?',
            options: [
              { label: 'A', text: 'Erken beide zorgen en vraag naar de impact ervan.', score: 2, feedback: 'Je blijft betrokken zonder partij te kiezen.', skill: 'neutrality' },
              { label: 'B', text: 'Zeg dat de aanvoerder te streng is.', score: 0, feedback: 'Dat is partijdig.', skill: 'neutrality' },
              { label: 'C', text: 'Stel dat de groep een teamcoaching nodig heeft.', score: 1, feedback: 'Dat is een mogelijke oplossing, maar nog niet neutraal genoeg.', skill: 'structure' }
            ]
          },
          {
            text: 'Wat helpt belangen te identificeren?',
            options: [
              { label: 'A', text: 'Wat willen jullie allebei voor het team bereiken?', score: 2, feedback: 'Je zoekt naar gezamenlijke doelen.', skill: 'interests' },
              { label: 'B', text: 'Wie werkt er harder?', score: 0, feedback: 'Dat kan competitie stimuleren.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of ze buiten training afspraken kunnen maken.', score: 1, feedback: 'Dat kan helpen, maar eerst verken je belangen.', skill: 'structure' }
            ]
          }
        ]
      },
      {
        id: 'sport-3',
        title: 'Selectie',
        description: 'Een speler is teleurgesteld over niet geselecteerd worden voor een toernooi.',
        perspectiveA: 'De speler twijfelt aan de eerlijkheid van de keuze.',
        perspectiveB: 'De trainer wil het sterkste team samenstellen.',
        positions: 'A wil eerlijkheid; B wil resultaat.',
        concerns: 'A vreest dat talent wordt gemist; B vreest verlies van kansen.',
        interests: 'A wil erkenning; B wil succes voor het team.',
        questions: [
          {
            text: 'Wat is een goede neutrale vraag?',
            options: [
              { label: 'A', text: 'Wat betekent een eerlijke selectie voor jullie?', score: 2, feedback: 'Je brengt belangen in beeld zonder oordeel.', skill: 'neutrality' },
              { label: 'B', text: 'Zeg dat de trainer beter weet wat goed is.', score: 0, feedback: 'Dat is partijdig richting de trainer.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of de speler harder wil trainen.', score: 1, feedback: 'Dat verschuift het gesprek naar een oplossing zonder begrip.', skill: 'structure' }
            ]
          },
          {
            text: 'Hoe herken je belangen in dit geval?',
            options: [
              { label: 'A', text: 'Vraag wat de speler en trainer beiden belangrijk vinden in selectie.', score: 2, feedback: 'Je zoekt naar gedeelde waarden.', skill: 'interests' },
              { label: 'B', text: 'Vraag of de speler boos is.', score: 0, feedback: 'Dat erkent de emotie niet voldoende.', skill: 'emotion' },
              { label: 'C', text: 'Vraag of het team meer training nodig heeft.', score: 1, feedback: 'Dat kan nuttig zijn, maar je kunt eerst beter luisteren.', skill: 'structure' }
            ]
          },
          {
            text: 'Welke luisterinterventie is hier effectief?',
            options: [
              { label: 'A', text: 'Herhaal waarom deze selectie een emotionele impact heeft.', score: 2, feedback: 'Je toont dat je de emotie en situatie begrijpt.', skill: 'listening' },
              { label: 'B', text: 'Zeg dat sport hard is en je niet moet klagen.', score: 0, feedback: 'Dat minimaliseert de ervaring van de speler.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of de selectieprocedure helder is.', score: 1, feedback: 'Dat is praktisch, maar je kunt eerst beter luisteren.', skill: 'structure' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'online',
    name: 'Online & Social Media',
    description: 'Conflicten die ontstaan via chat, social media of online samenwerkingen.',
    cases: [
      {
        id: 'online-1',
        title: 'WhatsApp Groep',
        description: 'Een student voelt zich buitengesloten in een groepschat en anderen zeggen dat het niet bewust gebeurt.',
        perspectiveA: 'De student voelt zich genegeerd en onzeker.',
        perspectiveB: 'De groepsleden zeggen dat het niet expres is.',
        positions: 'A wil betrokkenheid; B wil geen beschuldiging.',
        concerns: 'A vreest uitsluiting; B vreest onterechte beschuldiging.',
        interests: 'A wil erkenning; B wil een goede groep.',
        questions: [
          {
            text: 'Hoe help je dit online conflict te verhelderen?',
            options: [
              { label: 'A', text: 'Vraag wat de student voelt bij de stilte in de chat.', score: 2, feedback: 'Je brengt de ervaring centraal.', skill: 'emotion' },
              { label: 'B', text: 'Zeg dat ze gewoon vaker moeten reageren.', score: 0, feedback: 'Dat is te praktisch en negeert emotie.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of ze de groepsregels moeten aanpassen.', score: 1, feedback: 'Dat kan later helpen, maar eerst verken je gevoelens.', skill: 'structure' }
            ]
          },
          {
            text: 'Welke vraag ondersteunt actief luisteren?',
            options: [
              { label: 'A', text: 'Ik hoor dat je je buitengesloten voelt, klopt dat?', score: 2, feedback: 'Je erkent de emotie en vraagt bevestiging.', skill: 'listening' },
              { label: 'B', text: 'Je moet jezelf gewoon laten horen.', score: 0, feedback: 'Dat geeft instructies in plaats van luisteren.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of de chat te druk is geworden.', score: 1, feedback: 'Dat is een praktische vraag, niet per se luistergericht.', skill: 'structure' }
            ]
          },
          {
            text: 'Wat helpt neutraliteit in online conflicten?',
            options: [
              { label: 'A', text: 'Vraag beide kanten wat zij belangrijk vinden in hun communicatie.', score: 2, feedback: 'Je laat beide kanten gelijkwaardig horen.', skill: 'neutrality' },
              { label: 'B', text: 'Zeg dat online discussies minder serieus zijn.', score: 0, feedback: 'Dat minimaliseert het probleem.', skill: 'neutrality' },
              { label: 'C', text: 'Stel voor dat iedereen beter formuleert.', score: 1, feedback: 'Dat kan later, maar eerst luister je.', skill: 'structure' }
            ]
          }
        ]
      },
      {
        id: 'online-2',
        title: 'Cyberpesten',
        description: 'Kwetsende berichten veroorzaken onveiligheid, terwijl afzenders het als grap zien.',
        perspectiveA: 'Het slachtoffer voelt zich onveilig en gekwetst.',
        perspectiveB: 'De afzenders noemen het een grap en hadden de impact niet verwacht.',
        positions: 'A wil stoppen; B wil niet te ver gaan.',
        concerns: 'A vreest verder pesten; B vreest overreactie.',
        interests: 'A wil veiligheid; B wil begrip.',
        questions: [
          {
            text: 'Hoe erken je de emotionele impact van cyberpesten?',
            options: [
              { label: 'A', text: 'Ik hoor dat dit je veel pijn doet, hoe ervaar je dat?', score: 2, feedback: 'Je erkent de emotie en nodigt uit tot delen.', skill: 'emotion' },
              { label: 'B', text: 'Het is maar een grapje, toch?', score: 0, feedback: 'Dat minimaliseert het slachtoffer.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of iedereen wil stoppen met berichten delen.', score: 1, feedback: 'Dat is een oplossing, maar eerst verken je de impact.', skill: 'structure' }
            ]
          },
          {
            text: 'Wat helpt je om neutraal te blijven?',
            options: [
              { label: 'A', text: 'Vraag naar de intentie van de afzenders en de impact op het slachtoffer.', score: 2, feedback: 'Je houdt beide kanten in beeld.', skill: 'neutrality' },
              { label: 'B', text: 'Zeg dat pesten nooit acceptabel is.', score: 0, feedback: 'De uitspraak is juist, maar je bent dan niet neutraal.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of ze het beter met elkaar kunnen uitpraten.', score: 1, feedback: 'Dat is mogelijk, maar nog niet genoeg gericht op de belangen.', skill: 'structure' }
            ]
          },
          {
            text: 'Welke vraag brengt belangen in kaart?',
            options: [
              { label: 'A', text: 'Wat willen jullie allemaal graag bereiken in deze groep?', score: 2, feedback: 'Je zoekt naar gezamenlijke waarden en veiligheid.', skill: 'interests' },
              { label: 'B', text: 'Wie voelt zich het meest gekwetst?', score: 0, feedback: 'Dat kan polariseren.', skill: 'neutrality' },
              { label: 'C', text: 'Is er een regel die jullie willen invoeren?', score: 1, feedback: 'Dat kan later, maar eerst verken je belangen.', skill: 'structure' }
            ]
          }
        ]
      },
      {
        id: 'online-3',
        title: 'Social Media Bericht',
        description: 'Een bericht wordt persoonlijk opgevat, terwijl de schrijver zegt niemand te bedoelen.',
        perspectiveA: 'De ontvanger voelt zich aangevallen.',
        perspectiveB: 'De schrijver bedoelde het niet persoonlijk.',
        positions: 'A wil een verklaring; B wil ruimte voor intentie.',
        concerns: 'A vreest misbruik; B vreest dat hij wordt verkeerd begrepen.',
        interests: 'A wil duidelijkheid; B wil begrip.',
        questions: [
          {
            text: 'Wat is een goede vraag om actief luisteren te tonen?',
            options: [
              { label: 'A', text: 'Hoe voelde het bericht voor jou?', score: 2, feedback: 'Je vraagt naar de persoonlijke ervaring.', skill: 'listening' },
              { label: 'B', text: 'Zeg dat je het niet persoonlijk bedoelde.', score: 0, feedback: 'Dat maakt je partijdig richting de schrijver.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of ze het bericht willen verwijderen.', score: 1, feedback: 'Dat is een praktische stap, maar geen luistervraag.', skill: 'structure' }
            ]
          },
          {
            text: 'Hoe blijf je neutraal bij de interpretatie?',
            options: [
              { label: 'A', text: 'Vraag wat ieder belangrijk vindt in online communicatie.', score: 2, feedback: 'Je zoekt naar gedeelde normen.', skill: 'neutrality' },
              { label: 'B', text: 'Zeg dat de schrijver fout zit.', score: 0, feedback: 'Dat is partijdig en niet behulpzaam.', skill: 'neutrality' },
              { label: 'C', text: 'Stel voor om het bericht aan te passen.', score: 1, feedback: 'Dat kan later, maar eerst luister je.', skill: 'structure' }
            ]
          },
          {
            text: 'Welke vraag helpt belangen ontdekken?',
            options: [
              { label: 'A', text: 'Wat willen jullie allebei bereiken met deze groep?', score: 2, feedback: 'Je brengt gezamenlijke belangen in beeld.', skill: 'interests' },
              { label: 'B', text: 'Wie voelt zich nu het meest gekwetst?', score: 0, feedback: 'Dat kan conflict versterken.', skill: 'neutrality' },
              { label: 'C', text: 'Vraag of iedereen duidelijke regels wil.', score: 1, feedback: 'Dat is mogelijk maar nog niet direct naar belangen.', skill: 'structure' }
            ]
          }
        ]
      }
    ]
  }
  ,
  {
    id: 'vaardigheden',
    name: 'Vaardigheden',
    description: 'Training en toetsing van mediatorvaardigheden (luisteren, vragen, reframen, etc.)',
    cases: [
      {
        id: 'vaardigheden-1',
        title: 'Mediatorvaardigheden - Toets',
        description: 'Meerkeuzevragen over kernvaardigheden van de mediator.',
        perspectiveA: '',
        perspectiveB: '',
        positions: '',
        concerns: '',
        interests: '',
        references: [
          { title: 'Samenvatting mediatorvaardigheden', text: 'Actief luisteren, vragen stellen, herformuleren, spiegelen, parafraseren, samenvatten, schillen, metacommunicatie en toekomstgericht denken. Neutraliteit, machtsbalans en de houding (intelligent dom, actief lui, betrokken dakloos) vormen de kern.' }
        ],
        questions: [
          { text: 'Een partij zegt: "Ik heb het gevoel dat niemand naar mij luistert." Wat hoort een mediator vooral?', options: [ { label: 'A', text: 'Een feit', score: 0, feedback: 'Geen primaire feitelijke uitspraak.', skill: 'listening' }, { label: 'B', text: 'Een belang', score: 0, feedback: 'Dit gaat meer over emotie.', skill: 'listening' }, { label: 'C', text: 'Een emotie', score: 2, feedback: 'Juist: dit is een emotie die erkenning vraagt.', skill: 'emotion' }, { label: 'D', text: 'Een oplossing', score: 0, feedback: 'Nog geen oplossingsvraag.', skill: 'structure' } ] },
          { text: 'Wat is het belangrijkste doel van actief luisteren?', options: [ { label: 'A', text: 'Advies geven', score: 0, feedback: 'De mediator geeft geen advies als primaire doel.', skill: 'neutrality' }, { label: 'B', text: 'Oplossingen voorstellen', score: 0, feedback: 'Oplossingen komen later.', skill: 'structure' }, { label: 'C', text: 'Begrijpen wat partijen bedoelen', score: 2, feedback: 'Luisteren is vooral begrijpen.', skill: 'listening' }, { label: 'D', text: 'Discussies winnen', score: 0, feedback: 'Niet het doel van mediation.', skill: 'neutrality' } ] },
          { text: 'Welke reactie past het best bij actief luisteren?', options: [ { label: 'A', text: '"Dat had u anders moeten aanpakken."', score: 0, feedback: 'Oordeel, geen luisteren.', skill: 'neutrality' }, { label: 'B', text: '"Ik hoor dat dit u erg raakt."', score: 2, feedback: 'Erkent emotie en toont luisteren.', skill: 'emotion' }, { label: 'C', text: '"Ik denk dat uw collega gelijk heeft."', score: 0, feedback: 'Partijdig.', skill: 'neutrality' }, { label: 'D', text: '"U moet zich niet zo druk maken."', score: 0, feedback: 'Minimaliseert emotie.', skill: 'emotion' } ] },
          { text: 'Waar let een mediator tijdens het luisteren ook op?', options: [ { label: 'A', text: 'Alleen feiten', score: 0, feedback: 'Te beperkt.', skill: 'listening' }, { label: 'B', text: 'Alleen emoties', score: 0, feedback: 'Te beperkt.', skill: 'emotion' }, { label: 'C', text: 'Verbale én non-verbale signalen', score: 2, feedback: 'Beide zijn belangrijk.', skill: 'listening' }, { label: 'D', text: 'Alleen lichaamstaal', score: 0, feedback: 'Te beperkt.', skill: 'listening' } ] },
          { text: 'Welke vraag is een open vraag?', options: [ { label: 'A', text: 'Bent u boos?', score: 0, feedback: 'Gesloten vraag.', skill: 'listening' }, { label: 'B', text: 'Was dat gisteren?', score: 0, feedback: 'Gesloten vraag.', skill: 'structure' }, { label: 'C', text: 'Hoe heeft u deze situatie ervaren?', score: 2, feedback: 'Open vraag die uitlokt tot vertellen.', skill: 'listening' }, { label: 'D', text: 'Heeft u hierover een mail gestuurd?', score: 0, feedback: 'Gesloten vraag.', skill: 'structure' } ] },
          { text: 'Waarom gebruikt een mediator open vragen?', options: [ { label: 'A', text: 'Om gesprekken af te sluiten', score: 0, feedback: 'Niet de reden.', skill: 'structure' }, { label: 'B', text: 'Om veel informatie te verzamelen', score: 2, feedback: 'Open vragen brengen informatie en context.', skill: 'listening' }, { label: 'C', text: 'Om ja/nee-antwoorden te krijgen', score: 0, feedback: 'Dat doen gesloten vragen.', skill: 'structure' }, { label: 'D', text: 'Om discussie te vermijden', score: 0, feedback: 'Niet primair.', skill: 'neutrality' } ] },
          { text: 'Welke vraag stimuleert het meest tot vertellen?', options: [ { label: 'A', text: 'Is dat gebeurd?', score: 0, feedback: 'Gesloten.', skill: 'structure' }, { label: 'B', text: 'Wanneer gebeurde dat?', score: 0, feedback: 'Kan vervolgvraag zijn.', skill: 'structure' }, { label: 'C', text: 'Wat speelde er volgens u?', score: 2, feedback: 'Open en uitnodigend.', skill: 'listening' }, { label: 'D', text: 'Was u aanwezig?', score: 0, feedback: 'Gesloten.', skill: 'structure' } ] },
          { text: 'Welke vraag is NIET open?', options: [ { label: 'A', text: 'Wat gebeurde er toen?', score: 0, feedback: 'Open vraag.', skill: 'listening' }, { label: 'B', text: 'Hoe voelde u zich?', score: 0, feedback: 'Open vraag.', skill: 'emotion' }, { label: 'C', text: 'Waarom was dit belangrijk?', score: 0, feedback: 'Open vraag.', skill: 'interests' }, { label: 'D', text: 'Heeft u dat gezegd?', score: 2, feedback: 'Gesloten ja/nee-vraag.', skill: 'structure' } ] },
          { text: 'Welke vraag is gesloten?', options: [ { label: 'A', text: 'Wat gebeurde er?', score: 0, feedback: 'Open.', skill: 'listening' }, { label: 'B', text: 'Hoe ervoer u dat?', score: 0, feedback: 'Open.', skill: 'emotion' }, { label: 'C', text: 'Heeft u de brief ontvangen?', score: 2, feedback: 'Gesloten feitelijke vraag.', skill: 'structure' }, { label: 'D', text: 'Waarom vond u dat moeilijk?', score: 0, feedback: 'Open.', skill: 'listening' } ] },
          { text: 'Wanneer gebruikt een mediator vooral gesloten vragen?', options: [ { label: 'A', text: 'Om emoties te onderzoeken', score: 0, feedback: 'Open vragen beter voor emoties.', skill: 'emotion' }, { label: 'B', text: 'Om feiten te controleren', score: 2, feedback: 'Gesloten vragen zijn handig voor feiten.', skill: 'structure' }, { label: 'C', text: 'Om belangen te ontdekken', score: 0, feedback: 'Open vragen beter voor belangen.', skill: 'interests' }, { label: 'D', text: 'Om oplossingen te zoeken', score: 0, feedback: 'Niet primair.', skill: 'structure' } ] },
          { text: 'Partij zegt: "Mijn baas behandelt mij als vuil." Welke herformulering past het best?', options: [ { label: 'A', text: 'Uw baas doet inderdaad vervelend.', score: 0, feedback: 'Partijdig en oordelend.', skill: 'neutrality' }, { label: 'B', text: 'U vindt dat uw baas moet veranderen.', score: 0, feedback: 'Nog te positioneel.', skill: 'neutrality' }, { label: 'C', text: 'U heeft behoefte aan respectvolle behandeling.', score: 2, feedback: 'Neutraliseert taal en richt op behoefte.', skill: 'neutrality' }, { label: 'D', text: 'Uw baas is onredelijk.', score: 0, feedback: 'Oordeel.', skill: 'neutrality' } ] },
          { text: 'Wat is het doel van reframing?', options: [ { label: 'A', text: 'Partijen corrigeren', score: 0, feedback: 'Niet het doel.', skill: 'neutrality' }, { label: 'B', text: 'Emoties versterken', score: 0, feedback: 'Ongewenst.', skill: 'emotion' }, { label: 'C', text: 'Negatieve taal neutraliseren', score: 2, feedback: 'Juist: reframen maakt taal constructiever.', skill: 'neutrality' }, { label: 'D', text: 'Overtuigen', score: 0, feedback: 'Niet neutraal.', skill: 'neutrality' } ] },
          { text: 'Partij zegt: "Hij luistert nooit." Welke reframe is het beste?', options: [ { label: 'A', text: 'Hij is lastig.', score: 0, feedback: 'Beledigend.', skill: 'neutrality' }, { label: 'B', text: 'U vindt luisteren belangrijk.', score: 2, feedback: 'Reframe richt op belang.', skill: 'listening' }, { label: 'C', text: 'Hij doet expres moeilijk.', score: 0, feedback: 'Aannames.', skill: 'neutrality' }, { label: 'D', text: 'Hij heeft ongelijk.', score: 0, feedback: 'Oordeel.' } ] },
          { text: 'Een partij zegt: "Ik ben hier helemaal klaar mee." Wat spiegel je?', options: [ { label: 'A', text: 'U wilt stoppen.', score: 0, feedback: 'Te categorisch.', skill: 'emotion' }, { label: 'B', text: 'U bent waarschijnlijk gefrustreerd.', score: 2, feedback: 'Spiegelt emotie en opent gesprek.', skill: 'emotion' }, { label: 'C', text: 'Dat klopt niet.', score: 0, feedback: 'Ontkenning.', skill: 'neutrality' }, { label: 'D', text: 'U overdrijft.', score: 0, feedback: 'Minimaliseren.' } ] },
          { text: 'Wat is het doel van spiegelen?', options: [ { label: 'A', text: 'Oplossingen geven', score: 0, feedback: 'Niet primair.', skill: 'structure' }, { label: 'B', text: 'Emoties zichtbaar maken', score: 2, feedback: 'Juist: spiegelen maakt emoties expliciet.', skill: 'emotion' }, { label: 'C', text: 'Discussies stoppen', score: 0, feedback: 'Niet het doel.', skill: 'neutrality' }, { label: 'D', text: 'Adviezen geven', score: 0, feedback: 'Niet neutraal.' } ] },
          { text: 'Welke reactie is een spiegeling?', options: [ { label: 'A', text: '"Wat bedoelt u precies?"', score: 0, feedback: 'Vraagt door, maar is geen spiegeling.', skill: 'listening' }, { label: 'B', text: '"Ik merk veel teleurstelling bij u."', score: 2, feedback: 'Directe spiegeling van emotie.', skill: 'emotion' }, { label: 'C', text: '"Dat is niet verstandig."', score: 0, feedback: 'Oordeel.', skill: 'neutrality' }, { label: 'D', text: '"U moet kalmeren."', score: 0, feedback: 'Sturend.' } ] },
          { text: 'Waarom vat een mediator samen?', options: [ { label: 'A', text: 'Om partijen te onderbreken', score: 0, feedback: 'Niet het doel.', skill: 'structure' }, { label: 'B', text: 'Om het gesprek te structureren', score: 2, feedback: 'Samenvatten helpt overzicht en richting.', skill: 'structure' }, { label: 'C', text: 'Om een oordeel te geven', score: 0, feedback: 'Niet neutraal.', skill: 'neutrality' }, { label: 'D', text: 'Om sneller klaar te zijn', score: 0, feedback: 'Niet het doel.' } ] },
          { text: 'Wat hoort NIET in een samenvatting?', options: [ { label: 'A', text: 'Feiten', score: 0, feedback: 'Feiten horen erbij.', skill: 'structure' }, { label: 'B', text: 'Belangen', score: 0, feedback: 'Belangen horen erbij.', skill: 'interests' }, { label: 'C', text: 'Eigen mening', score: 2, feedback: 'Een samenvatting bevat geen eigen mening.', skill: 'neutrality' }, { label: 'D', text: 'Emoties', score: 0, feedback: 'Emoties kunnen verwerkt worden in een samenvatting.', skill: 'emotion' } ] },
          { text: 'Welke uitspraak is een samenvatting?', options: [ { label: 'A', text: '"Dus als ik u goed begrijp, voelt u zich niet gehoord en wilt u meer betrokken worden."', score: 2, feedback: 'Helder parafraseert en vat samen.', skill: 'listening' }, { label: 'B', text: '"Ik denk dat u gelijk heeft."', score: 0, feedback: 'Oordeel.', skill: 'neutrality' }, { label: 'C', text: '"Uw collega moet veranderen."', score: 0, feedback: 'Partijdig.', skill: 'neutrality' }, { label: 'D', text: '"Dat is een groot probleem."', score: 0, feedback: 'Vaag.' } ] },
          { text: 'Wat is het doel van schillen?', options: [ { label: 'A', text: 'Standpunten verdedigen', score: 0, feedback: 'Niet het doel.', skill: 'interests' }, { label: 'B', text: 'Belangen ontdekken', score: 2, feedback: 'Schillen zoekt onderliggende belangen.', skill: 'interests' }, { label: 'C', text: 'Discussies stoppen', score: 0, feedback: 'Niet primair.', skill: 'neutrality' }, { label: 'D', text: 'Adviezen geven', score: 0, feedback: 'Niet neutraal.' } ] },
          { text: 'Partij zegt: "Ik wil opslag." Welke vraag is een goede schilvraag?', options: [ { label: 'A', text: 'Waarom verdient u dat?', score: 0, feedback: 'Kan verdedigen.', skill: 'neutrality' }, { label: 'B', text: 'Waarom is opslag voor u belangrijk?', score: 2, feedback: 'Zo kom je bij het belang.', skill: 'interests' }, { label: 'C', text: 'Heeft u dat recht?', score: 0, feedback: 'Niet gericht op belang.', skill: 'neutrality' }, { label: 'D', text: 'Hoeveel wilt u?', score: 0, feedback: 'Praktische vraag, geen schilvraag.', skill: 'structure' } ] },
          { text: 'Wat zit meestal achter een standpunt?', options: [ { label: 'A', text: 'Een belang', score: 2, feedback: 'Belangen liggen vaak achter standpunten.', skill: 'interests' }, { label: 'B', text: 'Een fout', score: 0, feedback: 'Niet per se.', skill: 'neutrality' }, { label: 'C', text: 'Een oordeel', score: 0, feedback: 'Oordeel kan aanwezig zijn maar is niet hetzelfde als belang.', skill: 'neutrality' }, { label: 'D', text: 'Een advies', score: 0, feedback: 'Geen logisch achterliggende factor.' } ] },
          { text: 'Wat betekent metacommunicatie?', options: [ { label: 'A', text: 'Praten over oplossingen', score: 0, feedback: 'Dat is inhoud, niet metacommunicatie.', skill: 'structure' }, { label: 'B', text: 'Praten over emoties', score: 0, feedback: 'Emoties kunnen onderdeel zijn maar niet volledige definitie.', skill: 'emotion' }, { label: 'C', text: 'Praten over de communicatie zelf', score: 2, feedback: 'Juist: metacommunicatie bespreekt hoe er wordt gesproken.', skill: 'structure' }, { label: 'D', text: 'Praten over regels', score: 0, feedback: 'Dat is niet de kern.', skill: 'structure' } ] },
          { text: 'Partijen onderbreken elkaar voortdurend. Welke interventie past?', options: [ { label: 'A', text: 'Stop ermee.', score: 0, feedback: 'Te directief.', skill: 'structure' }, { label: 'B', text: 'Wie begon ermee?', score: 0, feedback: 'Vragen naar schuld leidt af.', skill: 'neutrality' }, { label: 'C', text: 'Ik merk dat jullie elkaar vaak onderbreken. Wat gebeurt er tussen jullie?', score: 2, feedback: 'Metacommunicatie die patronen zichtbaar maakt.', skill: 'structure' }, { label: 'D', text: 'Jullie moeten rustiger worden.', score: 0, feedback: 'Te sturend.' } ] },
          { text: 'Welke vraag is toekomstgericht?', options: [ { label: 'A', text: 'Waarom gebeurde dit?', score: 0, feedback: 'Verleden gericht.', skill: 'structure' }, { label: 'B', text: 'Wie begon ermee?', score: 0, feedback: 'Verleden en beschuldigend.', skill: 'neutrality' }, { label: 'C', text: 'Hoe ziet een goede samenwerking er over zes maanden uit?', score: 2, feedback: 'Toekomstgerichte vraag.', skill: 'structure' }, { label: 'D', text: 'Wie heeft gelijk?', score: 0, feedback: 'Niet toekomstgericht.', skill: 'neutrality' } ] },
          { text: 'Waarom gebruikt een mediator toekomstgerichte vragen?', options: [ { label: 'A', text: 'Om schuldigen te vinden', score: 0, feedback: 'Nee.', skill: 'neutrality' }, { label: 'B', text: 'Om oplossingen te stimuleren', score: 2, feedback: 'Toekomstvragen richten op oplossingen.', skill: 'structure' }, { label: 'C', text: 'Om emoties te vergroten', score: 0, feedback: 'Nee.', skill: 'emotion' }, { label: 'D', text: 'Om feiten te controleren', score: 0, feedback: 'Nee.' } ] },
          { text: 'Wat betekent "intelligent dom"?', options: [ { label: 'A', text: 'Weinig kennis hebben', score: 0, feedback: 'Niet de bedoeling.', skill: 'neutrality' }, { label: 'B', text: 'Nieuwsgierig blijven zonder aannames', score: 2, feedback: 'Juist: nieuwsgierigheid zonder aannames.', skill: 'neutrality' }, { label: 'C', text: 'Niet luisteren', score: 0, feedback: 'Nee.', skill: 'listening' }, { label: 'D', text: 'Veel praten', score: 0, feedback: 'Nee.' } ] },
          { text: 'Wat betekent "actief lui"?', options: [ { label: 'A', text: 'Geen vragen stellen', score: 0, feedback: 'Nee.', skill: 'neutrality' }, { label: 'B', text: 'Niets doen', score: 0, feedback: 'Nee.', skill: 'neutrality' }, { label: 'C', text: 'Partijen verantwoordelijk laten blijven voor de oplossing', score: 2, feedback: 'Juist: mediator begeleidt, neemt niet over.', skill: 'structure' }, { label: 'D', text: 'Gesprekken vermijden', score: 0, feedback: 'Nee.' } ] },
          { text: 'Wat betekent "betrokken dakloos"?', options: [ { label: 'A', text: 'Geen interesse tonen', score: 0, feedback: 'Niet juist.', skill: 'neutrality' }, { label: 'B', text: 'Geen kant kiezen maar wel betrokken blijven', score: 2, feedback: 'Juist: neutraal en betrokken.', skill: 'neutrality' }, { label: 'C', text: 'Altijd neutraal zwijgen', score: 0, feedback: 'Nee.', skill: 'neutrality' }, { label: 'D', text: 'Emoties vermijden', score: 0, feedback: 'Nee.' } ] },
          { text: 'Wat is een kernkwaliteit van een mediator?', options: [ { label: 'A', text: 'Oordelen', score: 0, feedback: 'Niet gewenst.', skill: 'neutrality' }, { label: 'B', text: 'Adviseren', score: 0, feedback: 'Niet primaire rol.', skill: 'neutrality' }, { label: 'C', text: 'Neutraliteit', score: 2, feedback: 'Neutraliteit is kernkwaliteit.', skill: 'neutrality' }, { label: 'D', text: 'Beslissen', score: 0, feedback: 'Geen rol van mediator.' } ] }
        ]
      }
    ]
  }
];

let currentCategory = null;
let currentCase = null;
let currentQuestionIndex = 0;
let score = 0;
let maxScore = 0;
let answeredCount = 0;
let questionResults = [];
let skillSummary = {
  neutrality: 0,
  listening: 0,
  emotion: 0,
  interests: 0,
  structure: 0,
};
let totalScore = 0;
let totalAnswers = 0;
let dashboardSkillTotals = { ...skillSummary };
let dashboardQuestionTotals = { ...skillSummary };

const sections = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('.nav-button');
const categoryListEl = document.getElementById('categoryList');
const caseListPageEl = document.getElementById('caseListPage');
const caseListEl = document.getElementById('caseList');
const caseListHeadingEl = document.getElementById('caseListHeading');
const backToCategoriesListBtn = document.getElementById('backToCategoriesList');
const caseTitleEl = document.getElementById('caseTitle');
const caseDescriptionEl = document.getElementById('caseDescription');
const caseFullTextEl = document.getElementById('caseFullText');
const caseAEl = document.getElementById('caseA');
const caseBEl = document.getElementById('caseB');
const casePositionsEl = document.getElementById('casePositions');
const caseConcernsEl = document.getElementById('caseConcerns');
const caseInterestsEl = document.getElementById('caseInterests');
const practiceCaseNameEl = document.getElementById('practiceCaseName');
const questionTextEl = document.getElementById('questionText');
const answerButtonsEl = document.getElementById('answerButtons');
const feedbackBoxEl = document.getElementById('feedbackBox');
const currentScoreEl = document.getElementById('currentScore');
const maxScoreEl = document.getElementById('maxScore');
const finalScoreEl = document.getElementById('finalScore');
const correctCountEl = document.getElementById('correctCount');
const incorrectCountEl = document.getElementById('incorrectCount');
const feedbackListEl = document.getElementById('feedbackList');
const improvementsListEl = document.getElementById('improvementsList');
const dashboardTotalScoreEl = document.getElementById('dashboardTotalScore');
const dashboardProgressEl = document.getElementById('dashboardProgress');
const skillNeutralityEl = document.getElementById('skillNeutrality');
const skillListeningEl = document.getElementById('skillListening');
const skillEmotionEl = document.getElementById('skillEmotion');
const skillInterestsEl = document.getElementById('skillInterests');
const skillStructureEl = document.getElementById('skillStructure');
const badgeListEl = document.getElementById('badgeList');
const startTrainingBtn = document.getElementById('startTraining');
const backToCategoriesBtn = document.getElementById('backToCategories');
const startExerciseBtn = document.getElementById('startExercise');
const backToCaseBtn = document.getElementById('backToCase');
const backToCaseFromInstructionsBtn = document.getElementById('backToCaseFromInstructions');
const beginPracticeBtn = document.getElementById('beginPractice');
const nextQuestionBtn = document.getElementById('nextQuestion');
const nextCaseBtn = document.getElementById('nextCase');
const dashboardBtn = document.querySelector('[data-target="dashboard"]');

function showSection(id) {
  sections.forEach(section => {
    section.classList.toggle('active', section.id === id);
  });
  navButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.target === id);
  });
}

function renderCategories() {
  categoryListEl.innerHTML = categories.map(category => `
    <article class="category-card">
      <div>
        <h3>${category.name}</h3>
        <p>${category.description}</p>
      </div>
      <button class="primary-button" data-category="${category.id}">Bekijk casussen</button>
    </article>
  `).join('');
  document.querySelectorAll('[data-category]').forEach(button => {
    button.addEventListener('click', () => selectCategory(button.dataset.category));
  });
}

function selectCategory(categoryId) {
  currentCategory = categories.find(c => c.id === categoryId);
  caseListHeadingEl.textContent = `Casussen in ${currentCategory.name}`;
  renderCaseList();
  showSection('caseListPage');
}

function renderCaseList() {
  if (!currentCategory) return;
  caseListEl.innerHTML = `
    <div class="grid">
      ${currentCategory.cases.map(item => `
        <article class="case-card">
          <div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
          <button class="primary-button" data-case="${item.id}">Bekijk</button>
        </article>
      `).join('')}
    </div>
  `;
  document.querySelectorAll('[data-case]').forEach(button => {
    button.addEventListener('click', () => selectCase(button.dataset.case));
  });
}

function selectCase(caseId) {
  if (!currentCategory) return;
  currentCase = currentCategory.cases.find(item => item.id === caseId);
  currentQuestionIndex = 0;
  score = 0;
  maxScore = currentCase.questions.reduce((sum, q) => sum + 2, 0);
  answeredCount = 0;
  feedbackBoxEl.textContent = '';
  loadCaseDetail();
  showSection('caseDetail');
}

function loadCaseDetail() {
  caseTitleEl.textContent = currentCase.title;
  caseDescriptionEl.textContent = currentCase.description;
  caseFullTextEl.innerHTML = (currentCase.fullText || currentCase.description).split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('');
  caseAEl.textContent = currentCase.perspectiveA;
  caseBEl.textContent = currentCase.perspectiveB;
  casePositionsEl.textContent = currentCase.positions;
  caseConcernsEl.textContent = currentCase.concerns;
  caseInterestsEl.textContent = currentCase.interests;
  
  // Render references
  const referencesEl = document.getElementById('referencesMaterial');
  if (currentCase.references && currentCase.references.length > 0) {
    referencesEl.innerHTML = currentCase.references.map(ref => `
      <div class="reference-key">
        <strong>${ref.title}</strong>
        ${ref.text}
      </div>
    `).join('');
  } else {
    referencesEl.innerHTML = '<p>Geen aanvullende bronnen beschikbaar.</p>';
  }
}

function startPractice() {
  currentQuestionIndex = 0;
  score = 0;
  maxScore = currentCase.questions.length * 2;
  answeredCount = 0;
  questionResults = [];
  feedbackBoxEl.textContent = 'Kies een antwoord om te starten.';
  currentScoreEl.textContent = score;
  maxScoreEl.textContent = maxScore;
  practiceCaseNameEl.textContent = currentCase.title;
  renderQuestion();
  showSection('practice');
}

function showInstructions() {
  showSection('instructions');
}

function renderQuestion() {
  const question = currentCase.questions[currentQuestionIndex];
  questionTextEl.textContent = question.text;
  answerButtonsEl.innerHTML = question.options.map((option, index) => `
    <button type="button" class="answer-button" data-index="${index}">${option.label}. ${option.text}</button>
  `).join('');
  answerButtonsEl.onclick = event => {
    const button = event.target.closest('.answer-button');
    if (!button || button.disabled) return;
    answerButtonsEl.querySelectorAll('.answer-button').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    selectAnswer(Number(button.dataset.index));
  };
}

function selectAnswer(optionIndex) {
  const question = currentCase.questions[currentQuestionIndex];
  const option = question.options[optionIndex];
  const isCorrect = option.score > 0;
  const correctOption = question.options.find(opt => opt.score > 0) || question.options[0];
  questionResults.push({
    question: question.text,
    selectedLabel: option.label,
    selectedText: option.text,
    correct: isCorrect,
    feedback: option.feedback,
    correctLabel: correctOption.label,
    correctText: correctOption.text
  });
  score += option.score;
  totalScore += option.score;
  answeredCount += 1;
  dashboardQuestionTotals[option.skill] += 1;
  dashboardSkillTotals[option.skill] += option.score;
  skillSummary[option.skill] += option.score;
  totalAnswers += 1;
  feedbackBoxEl.textContent = option.feedback;
  feedbackBoxEl.className = isCorrect ? 'feedback correct' : 'feedback incorrect';
  currentScoreEl.textContent = score;
  updateDashboardMetrics();
  disableAnswers();
}

function disableAnswers() {
  document.querySelectorAll('.answer-button').forEach(button => {
    button.disabled = true;
    button.classList.add('disabled');
  });
}

function enableAnswers() {
  document.querySelectorAll('.answer-button').forEach(button => {
    button.disabled = false;
    button.classList.remove('disabled', 'selected');
  });
}

function nextQuestion() {
  if (currentQuestionIndex < currentCase.questions.length - 1) {
    currentQuestionIndex += 1;
    enableAnswers();
    renderQuestion();
    feedbackBoxEl.textContent = 'Kies het volgende antwoord.';
    feedbackBoxEl.className = 'feedback';
  } else {
    showResult();
  }
}

function showResult() {
  finalScoreEl.textContent = `${score} / ${maxScore}`;
  const correctAnswers = questionResults.filter(result => result.correct).length;
  const incorrectAnswers = questionResults.length - correctAnswers;
  correctCountEl.textContent = `${correctAnswers}`;
  incorrectCountEl.textContent = `${incorrectAnswers}`;
  const missed = questionResults.filter(result => !result.correct);
  if (missed.length > 0) {
    feedbackListEl.innerHTML = missed.map(result => `
      <li>
        <strong>${result.question}</strong><br>
        Jouw keuze: ${result.selectedLabel}. ${result.selectedText}<br>
        Correct: ${result.correctLabel}. ${result.correctText}<br>
        Feedback: ${result.feedback}
      </li>
    `).join('');
  } else {
    feedbackListEl.innerHTML = '<li>Alle antwoorden zijn correct.</li>';
  }
  improvementsListEl.innerHTML = getImprovementPoints(missed).map(text => `<li>${text}</li>`).join('');
  showSection('result');
}

function getImprovementPoints(missed) {
  const skillCounts = missed.reduce((acc, result) => {
    acc[result.skill] = (acc[result.skill] || 0) + 1;
    return acc;
  }, {});
  const sortedSkills = Object.entries(skillCounts).sort((a, b) => b[1] - a[1]);
  if (sortedSkills.length === 0) {
    return ['Geen verbeterpunten, je hebt alle vragen goed beantwoord.'];
  }
  return sortedSkills.map(([skill, count]) => {
    return `Werk aan ${formatSkill(skill)}: je maakte ${count} fout antwoord${count === 1 ? '' : 'en'} in dit gebied.`;
  });
}

function formatSkill(key) {
  return {
    neutrality: 'Neutraliteit',
    listening: 'Luisteren',
    emotion: 'Emoties',
    interests: 'Belangen',
    structure: 'Structuur'
  }[key] || key;
}

function updateDashboardMetrics() {
  const scoreSum = totalScore;
  const answered = totalAnswers;
  dashboardTotalScoreEl.textContent = scoreSum;
  dashboardProgressEl.textContent = answered > 0 ? `${answered} vraag${answered === 1 ? '' : 'en'} beantwoord` : 'Nog geen vragen beantwoord';
  skillNeutralityEl.textContent = dashboardQuestionTotals.neutrality ? `${dashboardSkillTotals.neutrality} / ${dashboardQuestionTotals.neutrality * 2}` : '0';
  skillListeningEl.textContent = dashboardQuestionTotals.listening ? `${dashboardSkillTotals.listening} / ${dashboardQuestionTotals.listening * 2}` : '0';
  skillEmotionEl.textContent = dashboardQuestionTotals.emotion ? `${dashboardSkillTotals.emotion} / ${dashboardQuestionTotals.emotion * 2}` : '0';
  skillInterestsEl.textContent = dashboardQuestionTotals.interests ? `${dashboardSkillTotals.interests} / ${dashboardQuestionTotals.interests * 2}` : '0';
  skillStructureEl.textContent = dashboardQuestionTotals.structure ? `${dashboardSkillTotals.structure} / ${dashboardQuestionTotals.structure * 2}` : '0';
}

function initNavigation() {
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.target;
      if (target === 'categories') {
        renderCategories();
      }
      if (target === 'dashboard') {
        updateDashboardMetrics();
      }
      showSection(target);
    });
  });
  startTrainingBtn.addEventListener('click', () => {
    showSection('categories');
    renderCategories();
  });
  backToCategoriesListBtn.addEventListener('click', () => showSection('categories'));
  backToCategoriesBtn.addEventListener('click', () => showSection('categories'));
  startExerciseBtn.addEventListener('click', showInstructions);
  backToCaseBtn.addEventListener('click', () => showSection('caseDetail'));
  backToCaseFromInstructionsBtn.addEventListener('click', () => showSection('caseDetail'));
  beginPracticeBtn.addEventListener('click', startPractice);
  nextQuestionBtn.addEventListener('click', nextQuestion);
  nextCaseBtn.addEventListener('click', () => {
    showSection('categories');
    renderCategories();
  });
}

initNavigation();
renderCategories();
showSection('home');
