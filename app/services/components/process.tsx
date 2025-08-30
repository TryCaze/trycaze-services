'use client';
import { motion } from 'framer-motion';
import { CalendarClock, FileText, Wrench, ThumbsUp } from 'lucide-react';

const steps = [
  {
    title: '1. Rezervirajte besplatni poziv',
    icon: <CalendarClock className="w-5 h-5 text-blue-400" />,
    description: 'Razgovaramo o vašim potrebama, ciljevima i trenutnoj postavci. Bez ikakve obveze.',
  },
  {
    title: '2. Primite prilagođeni plan',
    icon: <FileText className="w-5 h-5 text-blue-400" />,
    description: 'Dobit ćete jasan prijedlog s vremenskim okvirom, opsegom posla i cijenom.',
  },
  {
    title: '3. Krećemo s radom',
    icon: <Wrench className="w-5 h-5 text-blue-400" />,
    description: 'Brzo i fokusirano provodimo rješenje, uz potpunu transparentnost u svakom koraku.',
  },
  {
    title: '4. Isporuka i podrška',
    icon: <ThumbsUp className="w-5 h-5 text-blue-400" />,
    description: 'Isporučujemo, testiramo i pružamo podršku za konačni rezultat. Bez nedovršenih detalja.',
  },
];

export function Process() {
  return (
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
  );
}