'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Cta() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-md py-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Spremni započeti sa radom?
          </span>
        </h2>
        <p className="text-slate-400 mb-8 text-lg">
          Riješimo vaše tehničke probleme. Brzo, čisto i profesionalno. Rezervirajte besplatni poziv odmah.
        </p>
        <a
          href="mailto:trycaze@proton.me"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition"
        >
          Javite nam se <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  );
}
