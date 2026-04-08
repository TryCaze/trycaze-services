'use client';
import { ArrowRight, Calendar, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GiOpenBook } from 'react-icons/gi';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="https://gkpz.hr/wp-content/uploads/2026/04/3-scaled.jpg"
            alt="3D Print Radionica"
            fill
            className="object-cover blur-none opacity-10 scale-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          className="w-full text-deep-purple-800"
          viewBox="0 0 1200 180"
          preserveAspectRatio="none"
          style={{ height: "180px", width: "100%" }}
        >
          <path
            fill="currentColor"
            d="M0,160L80,138.7C160,117,320,75,480,74.7C640,75,800,117,960,138.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center px-4 py-2 bg-secondary rounded-full border-0 shadow-lg"
              >
                <span className="text-sm font-semibold text-white">Osvrt na radionicu</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="block mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  3D Print & Modeliranje
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                  Prva uspješna radionica u Požegi
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="space-y-4"
              >
                <p className="text-lg md:text-xl text-white max-w-lg leading-relaxed">
                  Uspješno smo održali prvu radionicu 3D modeliranja i printanja u Gradskoj knjižnici Požega. Polaznici su kroz četiri dana intenzivnog rada savladali osnove 3D dizajna, pripremu modela za print i praktičan rad na 3D printerima.
                </p>
                <div className="flex flex-col space-y-2 text-white/90">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-teal-accent-400" />
                    <span>30. ožujka — 2. travnja</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-teal-accent-400" />
                    <span>Gradska knjižnica Požega</span>
                  </div>
                </div>
              </motion.div>

              <motion.ul className="text-white space-y-3 max-w-md">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-teal-accent-400 rounded-full" />
                  <span> - Osnove 3D dizajna i Tinkercad-a</span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.65 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-teal-accent-400 rounded-full" />
                  <span> - Priprema modela za print (Slicing)</span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.75 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-teal-accent-400 rounded-full" />
                  <span> - Praktičan rad na 3D printerima</span>
                </motion.li>
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
                  href="/galerija"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span className="text-lg">Pročitaj članak</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="mailto:trycaze@proton.me"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-dark transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-lg">Kontaktiraj nas</span>
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-primary backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-10 border border-secondary">
                <h3 className="mb-6 text-2xl font-bold text-center text-white sm:text-3xl uppercase tracking-wide">
                  Rezultati radionice
                </h3>
                
                <div className="space-y-6">
                  <div className="block group">
                    <div className="p-6 bg-secondary-dark transition-all duration-300 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="px-3 py-1 bg-teal-accent-400/10 rounded-full">
                          <span className="text-sm font-semibold text-white">Požega 2024</span>
                        </div>
                        <span className="text-sm text-white">Edukacija</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        Od ideje do stvarnosti
                      </h4>
                      <p className="text-white/80 mb-4">
                        Kroz četiri dana intenzivnog učenja, polaznici su savladali proces kreiranja digitalnih objekata i njihovo pretvaranje u fizičke predmete.
                      </p>
                      <div className="flex items-center text-white font-medium">
                        <span>Hvala svim polaznicima!</span>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.a
                  href="/blog/radionica-3d-printanje-i-3d-modeliranje"
                  whileHover={{ scale: 1.02 }}
                  className="block w-full mt-8 px-6 py-3 text-center font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300 border border-gray-300"
                >
                  <GiOpenBook className="inline w-5 h-5 mr-2 text-gray-600" />
                  Pročitaj cijeli članak
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -right-8 w-64 h-64 z-0"
              >
                <Image
                  src="/images/3dprint-icon.svg"
                  alt="3D Print Pattern"
                  fill
                  className="object-contain opacity-30"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}