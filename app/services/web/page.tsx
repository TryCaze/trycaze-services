"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle,
  Code2,
  MonitorSmartphone,
  ShoppingCart,
  Layout,
  Cpu,
  Gauge,
  ShieldCheck,
  Rocket,
  Database,
  Server,
  Layers,
  PhoneCall,
  Folder,
  Euro,
  Construction,
  RocketIcon,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";


const steps = [
  {
    title: '1. Razgovor',
    icon: <PhoneCall className="w-5 h-5 text-blue-400" />,
    description: 'Razgovaramo o vašim potrebama, ciljevima i trenutnoj postavci. Bez ikakve obveze.',
  },
  {
    title: '2. Plan',
    icon: <Folder className="w-5 h-5 text-blue-400" />,
    description: 'Dogovorimo sadržaj, dizajn i funkcionalnosti.',
  },
  {
    title: '3. Avans',
    icon: <Euro className="w-5 h-5 text-blue-400" />,
    description: 'Nakon što se dogovorimo oko cijene i detalja projekta, tražimo uplatu 50% unaprijed. To nam osigurava da možemo odmah krenuti s radom i rezervirati vrijeme za vaš projekt.',
  },
  {
    title: '4. Izrada',
    icon: <Construction className="w-5 h-5 text-blue-400" />,
    description: 'Izrađujemo i šaljemo ti pretpregled za povratnu informaciju.',
  },
  {
    title: '5. Lansiranje i podrška',
    icon: <RocketIcon className="w-5 h-5 text-blue-400" />,
    description: 'Pomažemo i nakon objave do 5 godina. Optimizacije i sitne dorade.'
  }
];

const faqs = [
                  {
              q: "Koliko traje izrada?",
              a: "Za jednostavne stranice tjedan dana do dva tjedna, za veće projekte tri do šest tjedana (ovisno o sadržaju).",
            },
            { q: "Radite li redizajn?", a: "Da, možemo doraditi ili iz temelja osvježiti postojeću stranicu." },
            { q: "Hoće li raditi na mobitelu?", a: "Da, sve radimo responzivno." },
            { q: "Pomažete s domenom/hostingom?", a: "Naravno, možemo sve složiti i objasniti." },
            {
              q: "Imam mali budžet, ima li rješenje?",
              a: "Uvijek možemo krenuti s manjim paketom i nadograđivati kasnije.",
            },
            {
              q: "Što ako trebam pomoć nakon lansiranja?",
              a: "Nudimo podršku i održavanje do 5 godina nakon lansiranja.",
            },
            {
              q: "Koje tehnologije koristite?",
              a: "Koristimo moderne tehnologije poput Next.js, React, Tailwind CSS i druge.",
            },
            { q: "Kako mogu pratiti napredak?", a: "Redovito komuniciramo i koristimo alate za praćenje zadataka." },
            {
              q: "Što ako nisam zadovoljan?",
              a: "Cilj nam je uvijek zadovoljiti klijenta, pa ćemo raditi dok ne budeš zadovoljan/na.",
            },
          ]

import { useState } from "react";

export default function Webdev() {
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
            Radimo savršene i jednostavne{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
               web stranice
            </span>
          </h1>
          <p className="text-slate-400 text-lg">
            Bez kompliciranja. Brzo, jasno i po mjeri. Tu smo za moderne stranice,
            web shop ili male web aplikacije.
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
      <section id="services" className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Što radimo
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <Layout className="w-8 h-8 text-blue-400" />,
              title: "Web stranice",
              desc: "Jednostavne ili napredne, ali uvijek brze i uredne.",
            },
            {
              icon: <ShoppingCart className="w-8 h-8 text-blue-400" />,
              title: "Web shop",
              desc: "Sve što trebaš za online prodaju, od košarice do naplate.",
            },
            {
              icon: <Code2 className="w-8 h-8 text-blue-400" />,
              title: "Web aplikacije",
              desc: "Dashboards, integrirane alate i integracije po mjeri.",
            },
            {
              icon: <MonitorSmartphone className="w-8 h-8 text-blue-400" />,
              title: "Responzivan dizajn",
              desc: "Radi odlično na mobitelu, tabletu i računalu.",
            },
            {
              icon: <Cpu className="w-8 h-8 text-blue-400" />,
              title: "Brzina i SEO",
              desc: "Optimizacija performansi i bolje pozicije na Googleu.",
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
              title: "Sigurnost i podrška",
              desc: "Sigurna rješenja. Pomoć i nakon lansiranja!",
            },
          ].map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-slate-400">{desc}</p>
            </motion.div>
          ))}
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
              "Stranica koja izgleda dobro i pretvara posjetitelje u upite.",
              "Brzo učitavanje. Nitko ne voli čekati (* ^ ω ^).",
              "Postavke za SEO od prvog dana.",
              "Jasna komunikacija i složeni rokovi.",
            ].map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Try3D",
              desc: "Online web shop za prodaju 3D Modela.",
              tags: ["Next.js", "Tailwind", "Vercel"],
              href: "https://try3d-eight.vercel.app/",
              image: "/images/try3d.png",
            },
            {
              title: "HOPE",
              desc: "Jednostavna aplikacija za pozadinsku ambijentu.",
              tags: ["Next.js", "Tailwind", "Vercel"],
              href: "https://hope-lovat.vercel.app/",
              image: "/images/hope.svg",
            },
            {
              title: "HopelandOS",
              desc: "Retro operativni sustav u vašem pregkedniku.",
              tags: ["Next.js", "Tailwind", "Vercel"],
              href: "https://hopelandos.vercel.app/",
              image: "/images/windows98.svg",
            },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
            >
              {/* simple visual placeholder instead of images */}
              <div className="aspect-[16/9] bg-gradient-to-br from-slate-800 to-slate-700 grid place-items-center">
                <Image src={p.image} alt={p.title} width={240} height={240} />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                <p className="text-slate-400 mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs border border-slate-700 rounded-full px-2 py-1 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                >
                  Pogledaj projekt
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
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

      {/* Tech Stack */}
      <section id="stack" className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Tech stack
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: "Next.js", icon: <Rocket className="w-4 h-4" /> },
              { label: "React", icon: <Layers className="w-4 h-4" /> },
              { label: "Tailwind", icon: <Gauge className="w-4 h-4" /> },
              { label: "Node.js", icon: <Server className="w-4 h-4" /> },
              { label: "Prisma", icon: <Database className="w-4 h-4" /> },
              { label: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
              { label: "Stripe", icon: <ShieldCheck className="w-4 h-4" /> },
              { label: "Auth", icon: <ShieldCheck className="w-4 h-4" /> },
              { label: "Vercel", icon: <Rocket className="w-4 h-4" /> },
              { label: "SEO alate", icon: <Gauge className="w-4 h-4" /> },
              { label: "Webhook/Integracije", icon: <Code2 className="w-4 h-4" /> },
              { label: "CMS (headless)", icon: <Layers className="w-4 h-4" /> },
            ].map((s) => (
              <motion.div
                key={s.label}
                {...fadeUp}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-3 py-2"
              >
                {s.icon}
                <span className="text-sm text-slate-300">{s.label}</span>
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
            {
              name: "Start",
              price: "od 500€",
              features: [
                "Jednostavna web stranica (do 10 stranica)",
                "Responzivan dizajn",
                "Osnovni SEO i brzina",
                "Kontakt forma",
                "Osnovna podrška nakon lansiranja",
                "Osnovni CMS za uređivanje sadržaja",
                "Hosting i domena (po dogovoru)",
                "Podrška i održavanje do 2 godine",
              ],
            },
            {
              name: "Pro",
              price: "od 1500€",
              features: [
                "Napredna stranica ili manji web shop",
                "Integracije (npr. plaćanje, newsletter)",
                "CMS za uređivanje sadržaja",
                "SEO postavke + analitika",
                "Optimizacija brzine",
                "Podrška i održavanje do 5 godina",
                "Hosting i domena (po dogovoru)",
                "Napredne funkcionalnosti po dogovoru",
                "Korisnički računi i autentikacija (po potrebi)",
              ],
            },
            {
              name: "Custom",
              price: "po ponudi",
              features: [
                "Web aplikacije, specifične funkcionalnosti",
                "Poseban dizajn i arhitektura",
                "Integracije s postojećim sustavima",
                "Prioritetna podrška",
                "Optimizacija i skalabilnost",
                "Sigurnosne mjere po mjeri",
                "Hosting i domena (po dogovoru)",
                "Sve ostalo po dogovoru",
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
            href="mailto:trycaze@proton.me?subject=Izrada%20web%20stranice&body=Pozdrav%2C%20zanima%20me%20izrada%20web%20stranice%20%5Bukratko%20opi%C5%A1i%20%C5%A1to%20ti%20treba%5D."
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl"
          >
            Kontaktiraj nas
          </Link>
        </motion.div>
      </section>
    </main>
  );
}