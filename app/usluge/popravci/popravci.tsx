"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle,
  Cpu,
  PhoneCall,
  Euro,
  ChevronDown,
  Settings,
  Shield,
  Clock,
  Wrench,
  Monitor,
  Printer,
  Zap,
  Package,
  Thermometer,
  CircuitBoard,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Dijagnostika",
    icon: <Settings className="w-8 h-8" />,
    description: "Detaljna hardverska i softverska dijagnostika za precizno otkrivanje kvara",
    details: [
      "Analiza hardverskih komponenti",
      "Dijagnostika softverskih problema",
      "Testiranje napajanja i napona",
      "Provjera temperatur i hlađenja",
      "Analiza RAM memorije i procesora"
    ]
  },
  {
    title: "Hardverski popravci",
    icon: <Cpu className="w-8 h-8" />,
    description: "Zamjena neispravnih komponenti poput RAM-a, SSD-a, napajanja i ventilatora",
    details: [
      "Zamjena RAM memorije",
      "Instalacija SSD i HDD diskova",
      "Zamjena napajanja",
      "Servis ventilatora i hlađenja",
      "Popravak matične ploče",
      "Zamjena zaslona prijenosnika"
    ]
  },
  {
    title: "Softverski servis",
    icon: <Monitor className="w-8 h-8" />,
    description: "Rješavanje softverskih problema, reinstalacije sustava i čišćenje zlonamjernih programa",
    details: [
      "Instalacija i reinstalacija Windows, Linux, macOS",
      "Uklanjanje virusa i malware-a",
      "Optimizacija operativnog sustava",
      "Oporavak izgubljenih podataka",
      "Konfiguracija sigurnosnih postavki"
    ]
  },
  {
    title: "Servis printera",
    icon: <Printer className="w-8 h-8" />,
    description: "Popravak i održavanje printera i ostale opreme",
    details: [
      "Čišćenje i zamjena mlaznih glava",
      "Rješavanje problema s tonerima",
      "Popravak mehaničkih kvarova",
      "Konfiguracija mrežnih printera",
      "Održavanje i čišćenje"
    ]
  },
  {
    title: "Čišćenje i održavanje",
    icon: <Thermometer className="w-8 h-8" />,
    description: "Redovno čišćenje i održavanje za optimalne performanse",
    details: [
      "Čišćenje od prašine i nečistoća",
      "Zamjena termalne paste",
      "Servis sistema hlađenja",
      "Prevencija pregrijavanja",
      "Opći pregled i servis"
    ]
  },
  {
    title: "Ekspres servis",
    icon: <Zap className="w-8 h-8" />,
    description: "Hitni popravci s prioritetnim rješavanjem",
    details: [
      "Brza dijagnostika (do 24h)",
      "Hitni popravci za poslovne klijente",
      "Ekspres zamjena komponenti",
      "Servis na licu mjesta po potrebi",
      "Dostava popravljenog uređaja"
    ]
  }
];

const steps = [
  {
    title: '1. Kontakt i dijagnostika',
    icon: <PhoneCall className="w-5 h-5 text-secondary" />,
    description: 'Opišite problem ili donesite uređaj na besplatnu dijagnostiku.',
  },
  {
    title: '2. Ponuda i odobrenje',
    icon: <Euro className="w-5 h-5 text-secondary" />,
    description: 'Šaljemo vam detaljnu ponudu s cijenom i rokom izrade za odobrenje.',
  },
  {
    title: '3. Popravak',
    icon: <Wrench className="w-5 h-5 text-secondary" />,
    description: 'Izvodimo profesionalne popravke koristeći kvalitetne komponente.',
  },
  {
    title: '4. Testiranje i garancija',
    icon: <Shield className="w-5 h-5 text-secondary" />,
    description: 'Testiramo popravak i izdajemo garanciju na izvršene usluge.',
  },
  {
    title: '5. Predaja uređaja',
    icon: <Package className="w-5 h-5 text-secondary" />,
    description: 'Predajemo uređaj s dokumentacijom i garancijom.',
  }
];

const faqs = [
  {
    q: "Koliko traje dijagnostika?",
    a: "Brza dijagnostika obično traje do 24 sata. Detaljna dijagnostika može trajati 1-2 radna dana.",
  },
  {
    q: "Nudite li garanciju na popravke?",
    a: "Da, na sve popravke nudimo garanciju od 6 mjeseci, a na zamijenjene komponente 12 mjeseci.",
  },
  {
    q: "Popravljate li Apple uređaje?",
    a: "Da, servisiramo iApple MacBook računala, iMacove i druge Apple uređaje.",
  },
  {
    q: "Što ako se kvar ponovi nakon popravka?",
    a: "U slučaju ponovljenog kvara unutar garancijskog roka, popravak vršimo besplatno.",
  },
  {
    q: "Radite li oporavak podataka?",
    a: "Da, nudimo usluge oporavka podataka s oštećenih diskova i drugih medija.",
  },
  {
    q: "Mogu li doći po servis na kućnu adresu?",
    a: "Za veće uređaje i poslovne klijente nudimo i uslugu servisa na licu mjesta.",
  },
  {
    q: "Koristite li originalne dijelove?",
    a: "Koristimo kvalitetne, nove komponente. Za određene modele koristimo i originalne dijelove po želji klijenta.",
  },
  {
    q: "Koliko dugo traju popravci?",
    a: "Većina popravaka je završena unutar 2-3 radna dana. Za hitne slučajeve nudimo ekspres servis.",
  },
];

export default function PCRepairsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  } as const;

  return (
    <main className="bg-primary text-white">
      {/* Hero Section */}
      <section id="hero" className="py-24 px-4 text-center">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Servis računala i opreme
          </h1>
          <p className="text-white text-lg">
            Brza dijagnostika i profesionalni popravci računala, prijenosnika, printera i ostale opreme.
            Koristimo kvalitetne komponente i pružamo garanciju na izvršene usluge.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="#pricing"
              className="inline-block bg-secondary hover:bg-secondary-dark transition-colors text-white font-semibold py-3 px-6 rounded-xl"
            >
              Cijene popravaka
            </Link>
            <Link
              href="/form/narudzba-popravaka"
              className="inline-block border border-secondary hover:border-secondary-dark transition-colors text-white font-semibold py-3 px-6 rounded-xl"
            >
              Zakaži servis
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-light-blue">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Zašto odabrati naš servis?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-secondary" />,
                title: "Garancija",
                description: "Garancija na sve popravke i komponente"
              },
              {
                icon: <Clock className="w-8 h-8 text-secondary" />,
                title: "Brzi servis",
                description: "Većina popravaka završena unutar 2-3 dana"
              },
              {
                icon: <CircuitBoard className="w-8 h-8 text-secondary" />,
                title: "Kvalitetni dijelovi",
                description: "Koristimo provjerene i kvalitetne komponente"
              },
              {
                icon: <Settings className="w-8 h-8 text-secondary" />,
                title: "Iskusni tehničari",
                description: "Profesionalci s višegodišnjim iskustvom"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary/50 backdrop-blur-sm rounded-xl p-6 border border-secondary text-center"
              >
                <div className="text-secondary mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-white">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-light-blue">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Naše Usluge Servisiranja
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary/50 backdrop-blur-sm rounded-xl p-6 border border-secondary hover:border-secondary-dark transition-colors"
              >
                <div className="text-secondary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-white mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 bg-light-blue">
        <div className="absolute inset-0 opacity-5 pointer-events-none" />

        <div className="relative px-4 max-w-4xl mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              <span className="text-white">
                Kako funkcionira servis
              </span>
            </h2>
            <p className="mt-4 text-white text-lg">
              Jednostavan i transparentan proces popravka
            </p>
          </motion.div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 bg-primary/50 border border-secondary rounded-xl p-6 backdrop-blur-md"
              >
                <div className="bg-secondary/10 rounded-full p-2">{step.icon}</div>
                <div>
                  <h3 className="text-white font-medium text-base mb-1">{step.title}</h3>
                  <p className="text-white text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Cijene servisa
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Osnovni servis",
              price: "od 30€",
              features: [
                "Besplatna dijagnostika",
                "Čišćenje od prašine",
                "Osnovne softverske popravke",
                "Optimizacija sustava",
                "Uklanjanje virusa i malware-a",
                "Garancija 3 mjeseca"
              ],
            },
            {
              name: "Standardni servis",
              price: "od 50€",
              features: [
                "Sve iz osnovnog servisa",
                "Hardverska dijagnostika",
                "Zamjena ventilatora",
                "Zamjena termalne paste",
                "Instalacija SSD diska",
                "Garancija 6 mjeseci"
              ],
            },
            {
              name: "Kompletan servis",
              price: "od 80€",
              features: [
                "Sve iz standardnog servisa",
                "Zamjena matične ploče",
                "Popravak napajanja",
                "Zamjena zaslona prijenosnika",
                "Oporavak podataka",
                "Garancija 12 mjeseci"
              ],
            },
          ].map((p, i) => (
            <motion.div
              key={p.name}
              {...fadeUp}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="rounded-2xl border border-secondary bg-primary/50 p-6"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{p.name}</h3>
              <p className="text-3xl font-bold mb-4 text-secondary">{p.price}</p>
              <ul className="space-y-2 mb-6 text-white">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-1" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/form/narudzba-popravaka"
                className="inline-block w-full text-center bg-secondary hover:bg-secondary-dark transition-colors text-white font-semibold py-3 rounded-xl"
              >
                Zatraži ponudu
              </Link>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-white mt-4 text-sm">
          * Cijene su informativne i ovise o konkretnom kvaru i modelu uređaja.
          Cijene komponenti se naplaćuju posebno.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-light-blue">
        <div className="absolute inset-0 opacity-5 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              <span className="text-white">
                Često postavljana pitanja
              </span>
            </h2>
            <p className="mt-4 text-white text-lg">
              Sve što trebate znati prije servisa
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-primary/50 border border-secondary rounded-xl backdrop-blur-md transition"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="text-white font-medium">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-white transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-6 pb-4 text-white text-sm"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 text-center bg-light-blue">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Trebate servis?</h2>
          <p className="text-white mb-6">
            Kontaktirajte nas za besplatnu dijagnostiku ili pošaljite upit za popravak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/form/narudzba-popravaka"
              className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-6 rounded-xl"
            >
              Pošalji upit
            </Link>
            <Link
              href="mailto:trycaze@proton.me?subject=Upit%20za%20servis%20računala&body=Pozdrav%2C%0A%0ATrebao/la bih servis računala.%20Molim vas da me kontaktirate kako bismo dogovorili detalje.%0A%0AOpis problema:%0A%0ATip uređaja (računalo, prijenosnik, printer):%0A%0AHvala!"
              className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-6 rounded-xl"
            >
              Javite nam se
            </Link>
          </div>
          <p className="text-white mt-6 text-sm">
            Radno vrijeme: Pon-Pet 7:00 - 19:00
          </p>
          <p className="text-white text-sm">
            Sub 9:00-14:00, Nedjeljom zatvoreno
          </p>
        </motion.div>
      </section>
    </main>
  );
}