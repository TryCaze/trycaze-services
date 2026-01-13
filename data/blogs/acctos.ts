import { BlogPost } from '@/types/blog';

export const acctos: BlogPost = {
    slug: 'acctos',
    title: 'Acctos - Open Source Računovodstveni Softver',
    description: 'Acctos je besplatan i open source računovodstveni softver dizajniran za male tvrtke, napisan u Pythonu.',
    excerpt: 'Acctos je besplatan open-source alat napisan u Pythonu za vođenje računovodstva malih tvrtki.',
    date: '2026-01-02',
    updatedAt: '',
    author: 'Kristijan Vukušić',
    categories: ['poslovno', 'it'],
    tags: ['python', 'open-source', 'računovodstvo'],
    published: true,
    featured: true,
    readingTime: '10 min',
    coverImage: '/images/acctosicon.svg',
    metadata: {
        title: 'Acctos - Open Source Računovodstveni Softver',
        description: 'Acctos je besplatan i open source računovodstveni softver dizajniran za male tvrtke, napisan u Pythonu.',
        keywords: ['python', 'open-source', 'računovodstvo'],
        ogImage: '/images/acctosicon.svg',
        canonicalUrl: ''
    },
    content: [
        {
            type: 'H1',
            content: 'Što je Acctos?'
        },
        {
            type: 'paragraph',
            content: 'Acctos je besplatan i open source računovodstveni softver dizajniran za male tvrtke. Napisan je u Pythonu i pruža jednostavno rješenje za vođenje financija, fakturiranje i upravljanje računima.'
        },
        {
            type: 'H2',
            content: 'Glavne Značajke'
        },
        {
            type: 'list',
            content: 'Acctos nudi sljedeće glavne značajke:',
            items: [
                'Vođenje bankovnih računa',
                'Transakcijsko praćenje',
                'Vođenje zaliha',
                'Vođenje izvještaja o dobiti i gubitku',
            ]
        },
        {
            type: 'subtitle',
            content: 'Vođenje Bankovnih Računa'
        },
        {
            type: 'paragraph',
            content: 'Acctos omogućava korisnicima da prate svoje bankovne račune, vode njihove transakcije, obavještavaju o stanju računima. Podržava više vrsta računa kao što su tekući, štedni i kreditni računi. Korisnici mogu dodavati, uređivati i brisati račune prema svojim potrebama.'
        },
        {
            type: 'image',
            content: '/images/blog/acctos/racun.png',
            imageAlt: 'Prikaz bankovnog računa u Acctosu'
        },
        {
            type: 'subtitle',
            content: 'Transakcijsko Praćenje',
        },
        {
            type: 'paragraph',
            content: 'Korisnici mogu bilježiti sve financijske transakcije, uključujući prihode i rashode. Svaka transakcija može biti kategorizirana kako bi se olakšalo praćenje financijskog stanja.'
        },
        {
            type: 'image',
            content: '/images/blog/acctos/transakcije.png',
            imageAlt: 'Prikaz transakcija u Acctosu'
        },
        {
            type: 'subtitle',
            content: 'Kategorije'
        },
        {
            type: 'paragraph',
            content: 'Acctos omogućava korisnicima da kreiraju i upravljaju kategorijama za bolje organiziranje svojih financijskih podataka. Kategorije pomažu u analizi prihoda i rashoda po različitim segmentima poslovanja.'
        },
        {
            type: 'image',
            content: '/images/blog/acctos/kategorije.png',
            imageAlt: 'Prikaz kategorija u Acctosu'
        },
        {
            type: 'subtitle',
            content: 'Vođenje Zaliha'
        },
        {
            type: 'paragraph',
            content: 'Acctos omogućava praćenje zaliha proizvoda ili usluga koje tvrtka nudi. Korisnici mogu dodavati nove stavke, ažurirati količine i pratiti prodaju.'
        },
        {
            type: 'image',
            content: '/images/blog/acctos/zalihe.png',
            imageAlt: 'Prikaz zaliha u Acctosu'
        },
        {
            type: 'subtitle',
            content: 'Izvještaji o Dobiti i Gubitku'
        },
        {
            type: 'paragraph',
            content: 'Softver generira izvještaje o dobiti i gubitku, pružajući korisnicima uvid u financijsko zdravlje njihove tvrtke. Ovi izvještaji pomažu u donošenju informiranih poslovnih odluka(Trenutačno u razvoju).'
        },
        {
            type: 'H2',
            content: 'Zašto Odabrati Acctos?'
        },
        {
            type: 'paragraph',
            content: 'Acctos je idealan za male tvrtke koje traže jednostavno i pristupačno rješenje za računovodstvo. Kao open source softver, korisnici imaju potpunu kontrolu nad svojim podacima i mogu prilagoditi softver prema svojim potrebama.'
        },
        {
            type: 'H2',
            content: 'Kako Početi?'
        },
        {
            type: 'paragraph',
            content: 'Acctos u ovom trenutku nije dostupan za preuzimanje jer je još u fazi razvoja. Međutim, zainteresirani korisnici mogu pratiti razvoj na službenoj GitHub stranici projekta i slobodno sudjelovati u razvoju. Svaka dokumentacija i upute za instalaciju bit će dostupne na toj stranici.'
        },
        {
            type: 'link',
            content: 'https://github.com/trycaze/acctos'
        },
        {
            type: 'H2',
            content: 'Tehnologije Korištene u Acctosu'
        },
        {
            type: 'paragraph',
            content: 'Acctos je razvijen koristeći Python, što osigurava stabilnost i fleksibilnost. Trenutačna integracija podataka koristi se Sqlite za pohranu podataka što trenutačno samo podržava lokalne korisnike. U budućnosti podržavati će se više korisničkih računa kako bi baze podataka mogli biti dostupni više autoritiziranih korisnika.'
        },
        {
            type: 'H2',
            content: 'Planovi za Budućnost'
        },
        {
            type: 'paragraph',
            content: 'Razvojni tim (ja) planira(m) dodati nove značajke kao što su podrška za više korisnika. Povratne informacije korisnika bit će ključne za oblikovanje budućih verzija softvera.'
        },
        {
            type: 'H2',
            content: 'Zaključak'
        },
        {
            type: 'paragraph',
            content: 'Acctos predstavlja obećavajuće rješenje za male tvrtke koje traže besplatan i prilagodljiv računovodstveni softver. Pratite razvoj i budite spremni isprobati ovaj alat kada postane dostupan!'
        }
    ]
};