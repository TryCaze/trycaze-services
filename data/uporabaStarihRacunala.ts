import { BlogPost } from '@/types/blog';

export const uporabaStarihRacunala: BlogPost = {
    slug: 'ponovna-uporaba-starih-racunala',
    title: 'Kako upotrijebiti Vaše staro računalo?',
    description: 'Ako imate staro računalo koje skuplja prašinu, ne žurite ga baciti! Postoji mnogo kreativnih načina kako ga možete ponovno iskoristiti i dati mu novi život.',
    excerpt: 'Oživite svoje staro računalo i iskoristite ga na potpuno nove načine.',
    date: '2025-10-25',
    author: 'Kristijan',
    categories: ['IT', 'Recikliranje', 'Serveri', 'Postavljanje', 'Popravci'],
    tags: ['staro računalo', 'linux', 'home server', 'recikliranje', 'popravak računala', 'cloud', 'smart home'],
    published: false,
    featured: true,
    readingTime: '6 min',
    coverImage: 'https://i.imgur.com/CsHCiXd.png',
    metadata: {
        title: 'Ponovna uporaba starih računala. Kako oživjeti i iskoristiti vaše staro računalo',
        description: 'Pročitajte naš detaljan vodič o tome kako ponovno iskoristiti vaše staro računalo. Naučite kako ga pretvoriti u kućni server, instalirati Linux, koristiti za igre, multimediju ili automatizaciju doma.',
        keywords: ['staro računalo', 'linux', 'home server', 'recikliranje', 'smart home', 'kućni server', 'popravak računala'],
        ogImage: 'https://i.imgur.com/CsHCiXd.png',
        canonicalUrl: '/ponovna-uporaba-starih-racunala'
    },
    content: [
        {
            type: 'H1',
            content: 'Zašto ponovno koristiti staro računalo?'
        },
        {
            type: 'paragraph',
            content: 'Stara računala često završe na otpadu, što nije samo štetno za okoliš, već i propuštena prilika za korisne primjene. Ponovna uporaba starih računala može smanjiti elektronički otpad, uštedjeti novac i pružiti vam priliku da naučite nove vještine.'
        },
        {
            type: 'H2',
            content: 'Mogućnosti ponovne uporabe'
        },
        {
            type: 'paragraph',
            content: 'Evo nekoliko ideja kako možete ponovno iskoristiti vaše staro računalo:'
        },
        {
            type: 'H3',
            content: '1. Kućni server: '
        },
        {
            type: 'paragraph',
            content: 'Pretvorite staro računalo u kućni server za pohranu podataka, medijski streaming ili čak hosting web stranica.'
        },
        {
            type: 'H3',
            content: '2. Instalacija Linuxa:'
        },
        {
            type: 'paragraph',
            content:'Ako je vaše računalo sporo s Windowsom, instalirajte laganu Linux distribuciju poput Lubuntu ili Xubuntu za brže performanse.'
        },
        {
            type: 'H3',
            content: '3. Računalo za igre:'
        },
        {
            type: 'paragraph',
            content: 'Koristite staro računalo za retro igre ili kao platformu za emulatore starih konzola.'
        },
        {
            type: 'H3',
            content: '4. Multimedijalno središte:'
        },
        {
            type: 'paragraph',
            content: 'Pretvorite ga u medijski centar koristeći softver poput Kodi za gledanje filmova, slušanje glazbe i pregledavanje fotografija.'
        },
        {
            type: 'H3',
            content: '5. Automatizacija doma:'
        },
        {
            type: 'paragraph',
            content: 'Iskoristite staro računalo za upravljanje pametnim uređajima u vašem domu putem platformi poput Home Assistant.'
        },
        {
            type: 'H2',
            content: '1. Kućni Server',
        },
        {
            type: 'image',
            content: '/images/blog/homeserver.png',
            imageAlt: 'Slika kućnog servera'
        },
        {
            type: 'paragraph',
            content: 'Stara računala često završe zaboravljena u ormarima ili na tavanu, iako još uvijek mogu itekako dobro poslužiti, pogotovo kao kućni serveri. U ovom dijelu naučit ćeš kako prenamijeniti staro računalo u praktičan, tih i koristan server za svoj dom.'
        },
        {
            type: 'H3',
            content: 'Što je kućni server?'
        },
        {
            type: 'paragraph',
            content: 'Kućni server je računalo koje neprekidno radi i pruža određene usluge drugim uređajima u mreži, poput spremanja datoteka, streamanja filmova, sigurnosnih kopija ili hostanja web stranica.'
        },
        {
            type: 'paragraph',
            content: 'U osnovi, to je tvoje osobno “računalno središte” koje ti omogućuje:'
        },
        {
            type: 'paragraph',
            content: '1. Centralizirano spremanje podataka'
        },
        {
            type: 'paragraph',
            content: '2. Dijeljenje datoteka između uređaja'
        },
        {
            type: 'paragraph',
            content: '3. Automatske sigurnosne kopije'
        },
        {
            type: 'paragraph',
            content: '4. Pokretanje privatnog oblaka, igara ili web aplikacija'
        },
        {
            type: 'H3',
            content: '1. Centralizirano spremanje podataka'
        },
        {
            type: 'paragraph',
            content: 'Umjesto da tvoji podaci budu raspršeni po različitim uređajima, kućni server omogućuje ti da sve pohraniš na jedno mjesto. To olakšava pristup i upravljanje datotekama.'
        },
        {
            type: 'H3',
            content: '2. Dijeljenje datoteka između uređaja'
        },
        {
            type: 'paragraph',
            content: 'S kućnim serverom možeš jednostavno dijeliti datoteke između računala, tableta i pametnih telefona unutar svoje mreže. Nemorate više koristiti USB stickove ili slati datoteke putem e-pošte.'
        },
        {
            type: 'H3',
            content: '3. Automatske sigurnosne kopije'
        },
        {
            type: 'paragraph',
            content: 'Redovite sigurnosne kopije su ključne za zaštitu podataka. Kućni server može automatski izrađivati sigurnosne kopije tvojih važnih datoteka, štiteći te od gubitka podataka.'
        },
        {
            type: 'H3',
            content: '4. Pokretanje privatnog oblaka, igara ili web aplikacija'
        },
        {
            type: 'paragraph',
            content: 'S kućnim serverom možeš pokrenuti vlastiti privatni oblak za pohranu podataka, hostati igre za svoje prijatelje poput Minecraft ili Terraria servera. Razvijanje i testirati web aplikacije.'
        },
        {
            type: 'H2',
            content: '2. Instalacija Linuxa'
        },
        {
            type: 'image',
            content: '/images/blog/linux.png',
            imageAlt: 'Linux Distribucije'
        },
        {
            type: 'paragraph',
            content: 'Ako tvoje staro računalo postaje sporo s Windows operativnim sustavom, instalacija Linuxa može biti izvrstan način da mu udahneš novi život. Linux je poznat po svojoj učinkovitosti i može raditi glatko čak i na starijem hardveru.'
        },
        {
            type: 'H3',
            content: 'Što je Linux?'
        },
        {
            type: 'paragraph',
            content: 'Linux je besplatan i otvoreni operativni sustav koji je poznat po svojoj stabilnosti, sigurnosti i prilagodljivosti. Za razliku od Windowsa ili macOS-a, Linux dolazi u različitim "distribucijama" koje su prilagođene različitim potrebama korisnika.'
        }
    ]
};