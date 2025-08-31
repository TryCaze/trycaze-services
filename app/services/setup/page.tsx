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
  Monitor,
  Shield,
  Wifi,
  Users,
  Calendar,
  Hammer,
  Package,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

 const services = [
    {
      title: "Instalacija OS i softvera",
      icon: <Settings className="w-8 h-8" />,
      description: "Kompletna instalacija operativnih sustava i potrebnih programa",
      details: [
        "Instalacija Windows, Linux ili macOS",
        "Instalacija uredskih programa (Office, PDF čitači)",
        "Postavljanje preglednika i dodataka",
        "Instalacija antivirusnih rješenja",
        "Konfiguracija osnovnih postavki"
      ]
    },
    {
      title: "Montaža hardvera",
      icon: <Cpu className="w-8 h-8" />,
      description: "Instalacija fizičkih komponenti i priprema uređaja za rad",
      details: [
        "Sastavljanje računala od komponenti",
        "Zamjena i nadogradnja dijelova",
        "Čišćenje i održavanje hardvera",
        "Postavljanje periferija (monitori, printeri)",
        "Rješavanje pregrevanja i hlađenja"
      ]
    },
    {
      title: "Optimizacija sustava",
      icon: <Monitor className="w-8 h-8" />,
      description: "Postavljanje softvera i optimizacija prema vrsti korištenja",
      details: [
        "Optimizacija za gaming performanse",
        "Poslovna konfiguracija uredskog rada",
        "Optimizacija baterije za prijenosnike",
        "Postavljanje kreativnih softvera (Adobe, CAD)",
        "Konfiguracija za streaming i video rad"
      ]
    },
    {
      title: "Sigurnosne postavke",
      icon: <Shield className="w-8 h-8" />,
      description: "Konfiguracija operativnih sustava i sigurnosnih postavki",
      details: [
        "Postavljanje vatrozida i sigurnosnih protokola",
        "Konfiguracija korisničkih računa i dozvola",
        "Postavljanje backup i oporavka sustava",
        "Enkripcija osjetljivih podataka",
        "Konfiguracija parental kontrola"
      ]
    },
    {
      title: "Mrežne usluge",
      icon: <Wifi className="w-8 h-8" />,
      description: "Povezivanje s mrežnim servisima i konfiguracija",
      details: [
        "Postavljanje bežičnih i žičanih mreža",
        "Konfiguracija routera i mrežne sigurnosti",
        "Podešavanje zajedničkih resursa i printera",
        "Spajanje na cloud servise",
        "Rješavanje problema s internet vezom"
      ]
    },
    {
      title: "Korisnička podrška",
      icon: <Users className="w-8 h-8" />,
      description: "Edukacija i podrška za krajnje korisnike",
      details: [
        "Obuka korisnika korištenju novog sustava",
        "Postavljanje udaljene pomoći i podrške",
        "Kreiranje korisničkih priručnika",
        "Podrška prijelazu s starog na novi sustav",
        "Tehnička podrška nakon postavljanja"
      ]
    }
  ];

const steps = [
  {
    title: '1. Razgovor',
    icon: <PhoneCall className="w-5 h-5 text-blue-400" />,
    description: 'Kontaktiraj nas i reci što ti treba.',
  },
  {
    title: '2. Termin i ponuda',
    icon: <Calendar className="w-5 h-5 text-blue-400" />,
    description: 'Dogovaramo termin i šaljemo ponudu.',
  },
  {
    title: '3. Avans',
    icon: <Euro className="w-5 h-5 text-blue-400" />,
    description: 'Nakon što se dogovorimo oko cijene i detalja projekta, tražimo uplatu 50% unaprijed. To nam osigurava da možemo odmah krenuti s radom i rezervirati vrijeme za Vas.',
  },
  {
    title: '4. Postavljanje',
    icon: <Hammer className="w-5 h-5 text-blue-400" />,
    description: 'Instalacija i konfiguracija prema vašim potrebama.',
  },
  {
    title: '5. Predaja',
    icon: <Package className="w-5 h-5 text-blue-400" />,
    description: 'Testiranje i predaja spremnog uređaja.',
  }
];

const faqs = [
  { q: "Koliko traje postavljanje računala?",
    a: "Vrijeme postavljanja ovisi o složenosti zadatka, ali obično traje od nekoliko sati do jednog dana.",
  },
  {
    q: "Koji operativni sustavi podržavate?",
    a: "Podržavamo Windows, Linux i macOS operativne sustave.",
  },
  {
    q: "Mogu li dobiti pomoć s prijenosnim računalom?",
    a: "Da, nudimo usluge postavljanja i optimizacije za prijenosna računala.",
  },
  {
    q: "Što ako imam specifične zahtjeve?",
    a: "Rado ćemo prilagoditi naše usluge vašim specifičnim potrebama. Kontaktirajte nas za detalje.",
  },
  {
    q: "Nudite li podršku nakon postavljanja?",
    a: "Da, nudimo tehničku podršku i savjete nakon postavljanja računala.",
  },
  {
    q: "Koje sigurnosne mjere poduzimate?",
    a: "Postavljamo antivirusne programe, vatrozide i druge sigurnosne protokole kako bismo zaštitili vaše računalo.",
  },
  {
    q: "Mogu li nadograditi svoje postojeće računalo?",
    a: "Da, nudimo usluge nadogradnje hardvera i softvera za postojeća računala.",
  },
  {
    q: "Kako mogu zakazati uslugu?",
    a: "Možete nas kontaktirati putem e-maila kako biste dogovorili termin.",
  },
      ]

export default function Setupspage() {
  // FAQ accordion state
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle FAQ open/close
  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  // simple motion helper
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  } as const;

  return (
    <main className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section id="hero" className="py-24 px-4 text-center">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Postavljanje računala
          </h1>
          <p className="text-slate-400 text-lg">
           Instalacija i konfiguracija računalnih sustava. Kompletno postavljanje novih i postojećih računala
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="#pricing"
              className="inline-block bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold py-3 px-6 rounded-xl"
            >
              Pogledaj cijene
            </Link>
            <Link
              href="#contact"
              className="inline-block border border-slate-700 hover:border-slate-600 transition-colors text-white font-semibold py-3 px-6 rounded-xl"
            >
              Javi se
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Overview of Services */}
            <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Naše Usluge Postavljanja</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <div className="text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="value" className="py-20 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-8"
          >
            Zašto nas?
          </motion.h2>
          <ul className="space-y-4 text-slate-300 max-w-3xl mx-auto">
            {[
              "Iskustvo s različitim operativnim sustavima i softverom",
              "Prilagođene postavke prema vašim potrebama",
              "Brza i efikasna usluga",
              "Podrška i savjeti nakon postavljanja",
              "Konkuretne cijene i transparentnost",
              "Sigurnost i zaštita podataka",
              "Povjerenje brojnih zadovoljnih klijenata",
            ].map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

    {/* Process */}
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5 pointer-events-none" />

      <div className="relative px-4 max-w-4xl mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Kako funkcionira
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Lako razumljiv i jednostavan proces
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-md"
            >
              <div className="bg-blue-500/10 rounded-full p-2">{step.icon}</div>
              <div>
                <h3 className="text-white font-medium text-base mb-1">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Cijene
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Osnovni Paket",
              price: "€50",
              features: [
                "Instalacija OS-a",
                "Osnovna konfiguracija",
                "Instalacija osnovnog softvera",
                "Postavljanje korisničkih računa",
              ],
            },
            {
              name: "Standardni Paket",
              price: "€100",
              features: [
                "Sve iz Osnovnog Paketa",
                "Instalacija dodatnog softvera",
                "Optimizacija sustava",
                "Sigurnosne postavke",
                "Mrežne konfiguracije",
              ],
            },
            {
              name: "Premium Paket",
              price: "€150",
              features: [
                "Sve iz Standardnog Paketa",
                "Napredna optimizacija za specifične potrebe",
                "Postavljanje i konfiguracija perifernih uređaja",
                "Korisnička edukacija i podrška",
                "Nadogradnja i montaža hardvera",
              ],
            },
          ].map((p, i) => (
            <motion.div
              key={p.name}
              {...fadeUp}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-3xl font-bold mb-4">{p.price}</p>
              <ul className="space-y-2 mb-6 text-slate-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="inline-block w-full text-center bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold py-3 rounded-xl"
              >
                Zatraži ponudu
              </Link>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-slate-400 mt-4 text-sm">
          * Cijene su informativne i ovise o opsegu posla.
        </p>
      </section>

      {/* FAQ */}

    <section className="relative py-20">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Često postavljanja pitanja
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Sve što trebate znati prije nego što krenete.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-md transition"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-white font-medium">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
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
                    className="overflow-hidden px-6 pb-4 text-slate-300 text-sm"
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

      {/* CTA */}
      <section id="contact" className="py-20 px-4 text-center bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Spreman/na za novu stranicu?</h2>
          <p className="text-slate-300 mb-6">
            Pošalji nam kratko što ti treba i javimo se brzo.
          </p>
          <Link
            href="mailto:trycaze@proton.me?subject=Upit%20za%20postavljanje%20računala&body=Pozdrav%2C%0A%0AZanima me usluga postavljanja računala.%20Molim%20vas%20da%20me%20kontaktirate%20kako%20bismo%20dogovorili%20detalje.%0A%0AHvala!%0A"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl"
          >
            Kontaktiraj nas
          </Link>
        </motion.div>
      </section>
    </main>
  );
}