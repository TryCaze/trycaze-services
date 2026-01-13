'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] bg-center opacity-8" />

        <motion.div
          initial={{ x: -80, y: -80, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.25 }}
          transition={{ duration: 1 }}
          className="absolute top-24 left-16 w-28 h-28 bg-green-500 rounded-full filter blur-3xl opacity-30"
        />
        <motion.div
          initial={{ x: 80, y: 80, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.25 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-24 right-16 w-36 h-36 bg-emerald-600 rounded-full filter blur-3xl opacity-30"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center px-4 py-2 bg-slate-800 rounded-full border border-slate-700"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium text-emerald-300">Besplatan • Open Source • Lokalno</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                Acctos
              </span>
              <br />
              <span className="text-slate-300 font-semibold text-2xl">Lokalno računovodstvo za male tvrtke</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="text-lg text-slate-300 max-w-lg leading-relaxed"
            >
              Acctos je besplatan open-source alat napisan u Pythonu za vođenje računovodstva malih tvrtki.
              Radi isključivo lokalno bez povezivanja na cloud što znači da su vaši podaci uvijek pod vašom kontrolom.
              Jednostavan za korištenje, sa ključnim funkcijama: vođenje transakcija, praćenje stanja računa i upravljanje inventurom.
            </motion.p>

            <motion.ul className="text-slate-300 list-disc list-inside space-y-1 max-w-md">
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>Vođenje transakcija i evidencija</motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>Praćenje stanja računa i izvještaji</motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}>Jednostavno upravljanje inventurom</motion.li>
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="/blog/acctos"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <ArrowRight className="w-5 h-5" />
                Pročitajte blog o projektu
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://github.com/TryCaze/acctos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white font-medium rounded-lg border border-slate-700 hover:bg-slate-700 transition-all"
              >
                <FiGithub className="w-5 h-5" />
                GitHub
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl">
              <Image
                src="/images/acctosicon.svg"
                alt="Acctos Logo"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-slate-900/30" />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/3 left-1/4 w-14 h-14 bg-emerald-500/20 rounded-full filter blur-xl"
              />
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-18 h-18 bg-green-600/20 rounded-full filter blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}