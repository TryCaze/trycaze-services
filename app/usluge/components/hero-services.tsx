'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-center mx-auto"
        >

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span className="bg-clip-text text-white">
              Potpuna tehnička podrška
            </span>{' '}
            na koju se možete osloniti
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg text-white max-w-2xl mx-auto">
            Od popravka hardvera do razvoja web stranica po narudžbi, donosimo stručna rješenja u vaš digitalni svijet, brza, pouzdana i uvijek personalizirana.
          </p>

          {/* Services pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              'Poslovne usluge',
              'IT podrška',
              'Popravci',
              'Postavljanje',
              '3D Printanje',
              'Web razvoj',
            ].map((service, i) => (
              <span
                key={i}
                className="text-sm text-white bg-secondary border border-secondary-dark rounded-full px-4 py-1 backdrop-blur-sm hover:bg-secondary-dark transition"
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}