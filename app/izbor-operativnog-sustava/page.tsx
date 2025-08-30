'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ImWindows } from 'react-icons/im';

export default function HeroSection() {

  return (
    <section className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] bg-center opacity-10" />
        
        {/* Floating tech elements */}
        <motion.div
          initial={{ x: -100, y: -100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-30"
        />
        <motion.div
          initial={{ x: 100, y: 100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-500 rounded-full filter blur-3xl opacity-30"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-slate-800 rounded-full border border-slate-700"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium text-blue-400">
                Windows 10 podrška uskoro završava!
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                Windows 10 podrška uskoro završava!
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                Što učiniti?
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-slate-300 max-w-lg leading-relaxed"
            >
              Windows 10 je bio jedan od najpopularnijih operativnih sustava, ali Microsoft je najavio da će podrška za Windows 10 završiti ove godine. To znači da neće biti više sigurnosnih ažuriranja, tehničke podrške ili softverskih poboljšanja.
              <br /><br />
              Što to znači za vas? Ako još uvijek koristite Windows 10, vrijeme je da razmislite o nadogradnji na Windows 11 ili neki drugi operativni sustav. Nadogradnja će vam omogućiti pristup najnovijim sigurnosnim značajkama, poboljšanjima performansi i novim funkcionalnostima.
              <br /><br />
              <span className="text-blue-400 font-medium">Saznajte najbolju opciju za Vas!</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <ArrowRight className="w-5 h-5" />
                Pročitajte više
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white font-medium rounded-lg border border-slate-700 hover:bg-slate-700 transition-all"
              >
                <ImWindows className="w-5 h-5 text-blue-400" />
                Izbor operativnog sustava
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl">
              <Image
                src="/images/windows10.png"
                alt="Operating Systems"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-slate-900/30" />
              
              {/* Floating tech elements on image */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full filter blur-xl"
              />
              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-indigo-500/20 rounded-full filter blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}