import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STUDIJA SLUČAJA: Revitalizacija starih računala, Linux Mint",
  description:
    "Studija slučaja o oživljavanju starih računala instalacijom Linux Mint operacijskog sustava, ciljevi, metodologija, testovi performansi i preporuke za praktičnu uporabu.",
  keywords: [
    "Linux Mint",
    "revitalizacija",
    "stara računala",
    "optimizacija",
    "performanse",
    "upute za instalaciju",
    "održivost",
    "studija slučaja",
    "besplatni operacijski sustav",
    "softverska nadogradnja"
  ],
  authors: [{ name: "Projekt: Revitalizacija starih računala" }],
  openGraph: {
    title: "STUDIJA SLUČAJA: Revitalizacija starih računala, Linux Mint",
    description:
      "Detaljna studija slučaja o poboljšanju performansi starih računala instalacijom Linux Mint.",
    type: "article",
    locale: "hr-HR",
    siteName: "TryCaze",
  },
  twitter: {
    card: "summary_large_image",
    title: "STUDIJA SLUČAJA: Revitalizacija starih računala, Linux Mint",
    description:
      "Kako je promjena operacijskog sustava na Linux Mint drastično poboljšala performanse starijih računala.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false
  }
};

export default function CaseStudy() {
  return (
    <section className="relative bg-black text-slate-300 py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5 pointer-events-none" />

      <div className="relative mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          <span className="bg-clip-text bg-gradient-to-r text-white">
            STUDIJ SLUČAJA: Revitalizacija starih računala instalacijom Linux Mint operacijskog sustava
          </span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Oživljavanje starih računala kroz moderni, brži i održivi operacijski sustav.
        </p>
      </div>

      {/* 1. Uvod */}
      <div className="relative mb-12">
        <h2 className="text-2xl font-semibold text-white mb-2">1. Uvod</h2>
        <p className="text-slate-300 leading-relaxed">
          Ovaj projekt nastao je iz vlastite inicijative s ciljem istraživanja mogućnosti oživljavanja starijih računala koja su zbog usporenog rada postala gotovo neupotrebljiva. Većina starijih uređaja može ponovno postati potpuno funkcionalna ako im se pruži prilika, najčešće kroz softversku optimizaciju, a ne nužno kroz skupu hardversku nadogradnju.
          <br /><br />
          Kako su računala imala slabe performanse pod Windows 10 sustavom, odlučio sam provesti detaljno testiranje i instalaciju modernog, besplatnog i optimiziranog operacijskog sustava Linux Mint.
          Cilj je bio utvrditi koliko se realno može poboljšati brzina i korisničko iskustvo bez ikakvih financijskih ulaganja.
          <br /><br />
          Projekt je ujedno i istraživanje održivosti, jer produžavanje životnog vijeka računalne opreme smanjuje elektronički otpad i troškove, dok istovremeno pruža potpuno funkcionalne uređaje za svakodnevne zadatke.
        </p>
      </div>

      {/* 2. Ciljevi projekta */}
      <div className="relative mb-12">
        <h2 className="text-2xl font-semibold text-white mb-2">2. Ciljevi projekta</h2>
        <p className="text-slate-300 leading-relaxed">
          Projekt je imao nekoliko jasno definiranih ciljeva:
          <br /><br />
          • Revitalizirati starija računala koja su bila prespora za osnovne radnje.
          <br />
          • Usporediti performanse prije i nakon zamjene operacijskog sustava.
          <br />
          • Procijeniti isplativost softverske optimizacije u odnosu na kupnju novog hardvera.
          <br />
          • Steći praktično iskustvo u instalaciji operacijskih sustava, optimizaciji i testiranju performansi.
          <br />
          • Promicati održivi pristup tehnologiji, posebno kroz produžavanje životnog vijeka postojećih uređaja.
        </p>
      </div>

      {/* 3. Računala i specifikacije */}
      <div className="relative mb-12">
        <h2 className="text-2xl font-semibold text-white mb-2">3. Računala i specifikacije</h2>
        <p className="text-slate-300 leading-relaxed">
          Projekt je uključivao tri računala, od kojih je jedno detaljno testirano i dokumentirano. Sva tri uređaja imali su slične karakteristike, a jedno mjereno računalo imalo je sljedeće specifikacije:
          <br /><br />
          • CPU: Intel Celeron J3060 @ 1.60 GHz
          <br />
          • RAM: 8 GB
          <br />
          • Disk: 222 GB SSD
          <br />
          • Grafička kartica: Integrirana
          <br />
          • Arhitektura: 64-bit
          <br />
          • Izvorni OS: Windows 10
          <br /><br />
          Iako na papiru ove specifikacije ne izgledaju loše, sustav je u praksi radio vrlo sporo. Posebno su problem bili:
          <br /><br />
          • dugo vrijeme podizanja sustava,
          <br />
          • zastajkivanje pri svakodnevnim zadacima,
          <br />
          • ekstremno sporo otvaranje dokumenata,
          <br />
          • visoko opterećenje procesora čak i pri osnovnim radnjama.
          <br /><br />
          Zbog toga je početno korisničko iskustvo bilo iznimno loše.
        </p>
      </div>


      {/* 4. Priprema i tijek projekta */}
      <div className="relative mb-12">
        <h2 className="text-2xl font-semibold text-white mb-2">4. Priprema i tijek projekta</h2>
        
        <h3 className="text-xl font-semibold text-white mb-2 mt-4">4.1. Odabir operacijskog sustava</h3>
        <p className="text-slate-300 leading-relaxed mb-4">
          Odlučio sam se za Linux Mint Cinnamon, zbog sljedećih prednosti:
          <br /><br />
          • izgledom i načinom rada podsjeća na Windows,
          <br />
          • optimiziran je za slabiji hardver,
          <br />
          • potpuno je besplatan i otvorenog koda,
          <br />
          • dolazi s predinstaliranim programima koji pokrivaju sve osnovne potrebe,
          <br />
          • stabilan je i jednostavan za početnike.
          <br /><br />
          Mint je savršen za korisnike koji žele brz sustav, ali bez komplikacija.
        </p>

        <h3 className="text-xl font-semibold text-white mb-2">4.2. Fizička priprema računala</h3>
        <p className="text-slate-300 leading-relaxed mb-4">
          Uređaj je prvo očišćen od nakupljene prašine, što je važno jer pregrijavanje može usporiti komponente.
          Ništa drugo nije nadograđeno niti zamijenjeno, cilj je bio testirati koliko softver može učiniti sam.
        </p>

        <h3 className="text-xl font-semibold text-white mb-2">4.3. Instalacija sustava</h3>
        <p className="text-slate-300 leading-relaxed">
          Instalacija je provedena preko USB-a:
          <br /><br />
          1. Izrada instalacijskog USB sticka.
          <br />
          2. Pokretanje uređaja kroz Boot izbornik.
          <br />
          3. Instalacija Linux Mint-a s preporučenim postavkama.
          <br />
          4. Postavljanje osnovnih aplikacija poput web preglednika i uredskih alata.
          <br /><br />
          Nakon instalacije sustav je odmah bio spreman za rad.
        </p>
      </div>

      {/* 5. Metodologija mjerenja */}
      <div className="relative mb-12">
        <h2 className="text-2xl font-semibold text-white mb-2">5. Metodologija mjerenja</h2>
        <p className="text-slate-300 leading-relaxed">
          Da bi rezultati bili što pouzdaniji, prije i nakon instalacije mjerene su sljedeće radnje:
          <br /><br />
          1. Vrijeme podizanja sustava (Booting)
          <br />
          2. Otvaranje YouTube videa
          <br />
          3. Pretraživanje interneta (otvaranje web stranice)
          <br />
          4. Otvaranje dokumenta
          <br /><br />
          Za svaku od aktivnosti:
          <br /><br />
          • test je ponovljen 10 puta,
          <br />
          • korištena je ručna štoperica,
          <br />
          • bilježene su sve pojedinačne vrijednosti,
          <br />
          • izračunat je prosjek, minimum i maksimum.
          <br /><br />
          Ova metoda daje realističnu sliku svakodnevnog korištenja, jer simulira tipične zadatke koje bi korisnik redovito obavljao.
        </p>
      </div>

      {/* 6. Rezultati testiranja */}
      <div className="relative mb-12">
        <h2 className="text-2xl font-semibold text-white mb-2">6. Rezultati testiranja</h2>
        
        <h3 className="text-xl font-semibold text-white mb-2">6.1. Rezultati na Windows 10 sustavu</h3>
        <p className="text-slate-300 leading-relaxed mb-4">
          Windows 10 je pokazao ozbiljna usporenja:
          <br /><br />
          • Booting: oko 62 sekunde
          <br />
          • YouTube: oko 22 sekunde
          <br />
          • Internet pretraga: oko 2 sekunde
          <br />
          • Otvaranje dokumenta: čak 5 minuta i 36 sekundi
          <br /><br />
          Najviše problema stvaralo je otvaranje dokumenata, što je praktički onemogućavalo ozbiljniji rad.
        </p>

        <h3 className="text-xl font-semibold text-white mb-2">6.2. Rezultati nakon instalacije Linux Mint-a</h3>
        <p className="text-slate-300 leading-relaxed">
          Nakon instalacije Linux Mint-a, rezultati su se dramatično poboljšali:
          <br /><br />
          • Booting: 49.5 sekundi
          <br />
          • YouTube: 8.3 sekunde
          <br />
          • Internet: 1.5 sekunda
          <br />
          • Document: 34.1 sekunda
          <br /><br />
          Poboljšanje je vidljivo u svim kategorijama, ali posebno kod otvaranja dokumenata, sustav je bio više od 10 puta brži.
        </p>
      </div>

      {/* 7. Analiza poboljšanja */}
      <div className="relative mb-12">
        <h2 className="text-2xl font-semibold text-white mb-2">7. Analiza poboljšanja</h2>
        <p className="text-slate-300 leading-relaxed">
          • Podizanje sustava (Booting): Windows: 62 s → Linux Mint: 49 s → Poboljšanje od 20%
          <br /><br />
          • Otvaranje YouTube videa: Windows: 22 s → Linux Mint: 8 s → Sustav je oko 62% brži
          <br /><br />
          • Pretraživanje interneta: Windows: 2 s → Linux Mint: 1.5 s → Poboljšanje oko 30%
          <br /><br />
          • Otvaranje dokumenata: Windows: 5 min 36 s → Linux Mint: 34 s → Ubrzanje preko 1000%
          <br /><br />
          Ovo je najveće i najvažnije poboljšanje.
        </p>
      </div>

      {/* 8. Praktična upotreba nakon obnove */}
      <div className="relative mb-12">
        <h2 className="text-2xl font-semibold text-white mb-2">8. Praktična upotreba nakon obnove</h2>
        <p className="text-slate-300 leading-relaxed">
          Nakon instalacije Linux Mint-a, sva ispitana računala postala su:
          <br /><br />
          • stabilna,
          <br />
          • brza,
          <br />
          • pouzdana,
          <br />
          • spremna za svakodnevne aktivnosti kao što su pregledavanje interneta, rad s dokumentima i reprodukcija videa.
          <br /><br />
          Ponovno su dobila novu vrijednost i mogu se koristiti za razne tipične zadatke bez frustracija.
        </p>
      </div>

      {/* 9. Naučene lekcije i preporuke */}
      <div className="relative mb-12">
        <h2 className="text-2xl font-semibold text-white mb-2">9. Naučene lekcije i preporuke</h2>
        
        <h3 className="text-xl font-semibold text-white mb-2">Naučeno:</h3>
        <p className="text-slate-300 leading-relaxed mb-4">
          • Linux Mint iznimno je učinkovit na starijem hardveru.
          <br />
          • Sustav radi brzo i stabilno čak i na konfiguracijama koje imaju problema s Windowsom.
          <br />
          • Većina korisnika lako se navikne na Mint jer je jednostavan i intuitivan.
          <br />
          • Softverska optimizacija može napraviti ogromnu razliku bez ikakvih troškova.
        </p>

        <h3 className="text-xl font-semibold text-white mb-2">Preporuke:</h3>
        <p className="text-slate-300 leading-relaxed">
          • Nadogradnja RAM-a ili SSD-a može dodatno ubrzati sustav (ako je potrebno).
          <br />
          • Korištenje lakših okruženja poput XFCE može dati još bolje performanse.
          <br />
          • Preporučljivo je povremeno provesti osnovnu optimizaciju (čišćenje, ažuriranja, uklanjanje nepotrebnih aplikacija).
          <br />
          • Ovakvi projekti mogu se lako prenijeti na druga stara računala, za osobnu upotrebu ili u lokalnoj zajednici.
        </p>
      </div>

      {/* 10. Zaključak */}
      <div className="relative mb-12">
        <h2 className="text-2xl font-semibold text-white mb-2">10. Zaključak</h2>
        <p className="text-slate-300 leading-relaxed">
          Projekt revitalizacije starih računala pokazao je koliko je snažan utjecaj promjene operacijskog sustava na performanse.
          Linux Mint se dokazao kao:
          <br /><br />
          • brz,
          <br />
          • stabilan,
          <br />
          • moderan,
          <br />
          • jednostavan za korištenje,
          <br />
          • te idealan izbor za starije uređaje.
          <br /><br />
          Sva testiranja i mjerenja potvrđuju da Windows 10 nije prilagođen slabijim konfiguracijama, dok Linux Mint izvlači maksimum iz dostupnog hardvera.
          Rezultati pokazuju da je čak i veoma sporo računalo moguće učiniti iznenađujuće brzim, korisnim i pouzdanim, i to potpuno besplatno.
          <br /><br />
          Ovaj studij slučaja predstavlja dokaz da je produžavanje životnog vijeka tehnologije itekako moguće te da stariji uređaji još uvijek mogu imati praktičnu vrijednost uz prave softverske prilagodbe.
        </p>
      </div>
    </section>
  );
}