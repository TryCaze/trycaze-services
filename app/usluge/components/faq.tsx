'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Koliko Vaše usluge koštaju?',
    answer:
      'Cijene ovise o opsegu i složenosti posla. Nakon besplatne konzultacije dobit ćete jasnu i transparentnu ponudu bez skrivenih troškova.',
  },
  {
    question: 'Nudite li podršku na lokaciji?',
    answer:
      'Da, podrška na lokaciji dostupna je za određena područja. Također nudimo i udaljenu podršku koja je brza, pouzdana i vrlo učinkovita.',
  },
  {
    question: 'Možete li pomoći pri nadogradnji s Windows 10 na Windows 11?',
    answer:
      'Naravno! Trenutno imamo posebnu promociju za nadogradnju. Cijeli proces, od sigurnosne kopije podataka do završne instalacije, odrađujemo za vas.',
  },
  {
    question: 'Koje tehnologije koristite za razvoj web stranica?',
    answer:
      'Koristimo moderne tehnologije poput Next.js, TypeScript, TailwindCSS te skalabilna backend rješenja koja osiguravaju dugoročnu stabilnost.',
  },
  {
    question: 'Kako se obrađuju transakcije i plaćanja?',
    answer:
      'Prihvaćamo PayPal, bankovne transfere te gotovinska plaćanja za usluge na lokaciji. Za početak rada zahtijevamo minimalno 50% iznosa unaprijed, a ostatak po završetku projekta.',
  },
  {
    question: 'Nudite li jamstvo na obavljene usluge?',
    answer:
      'Da, sve naše usluge dolaze s jamstvom kvalitete. Ako naiđete na problem vezan uz naš rad, riješit ćemo ga bez dodatnih troškova.',
  },
  {
    question: 'Koliko brzo možete započeti s radom?',
    answer:
      'U većini slučajeva možemo započeti unutar 24 do 48 sati nakon što dogovorimo detalje i primimo početno plaćanje.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
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
                <span className="text-white font-medium">{faq.question}</span>
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
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
