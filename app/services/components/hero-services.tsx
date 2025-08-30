'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-center mx-auto"
        >
          {/* Promo banner */}
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-400 text-sm font-medium backdrop-blur-md">
          ⚡ Sigurno ažurirajte sa Windowsa 10 na Windows 11 uz našu pomoč! 
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Potpuna tehnička podrška
            </span>{' '}
            na koju se možete osloniti
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            Od popravka hardvera do razvoja web stranica po narudžbi, donosimo stručna rješenja u vaš digitalni svijet - brza, pouzdana i uvijek personalizirana.
          </p>

          {/* Services pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              'Poslovne usluge',
              'IT podrška',
              'Popravci',
              'Postavljanje',
              'Umrežavanje',
              'Web razvoj',
            ].map((service, i) => (
              <span
                key={i}
                className="text-sm text-slate-300 bg-slate-800/60 border border-slate-700 rounded-full px-4 py-1 backdrop-blur-sm hover:bg-slate-700/60 transition"
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-base font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-blue-600/30 transition"
            >
              Započnite danas! <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
