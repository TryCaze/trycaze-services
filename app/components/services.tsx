'use client';
import { 
  Laptop2, 
  Briefcase, 
  LifeBuoy, 
  Settings, 
  Network, 
  Code,
  ArrowRight,
  PrinterCheck
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" ref={ref} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] bg-center" />
      </div>
      
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-10" />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              Usluge
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-xl text-slate-300"
          >
            Opis usluga
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div 
          className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={inView ? "visible" : {}}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {/* Business Service */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-0.5 shadow-lg"
          >
            <div className="relative h-full bg-slate-900 rounded-[11px] p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="pr-4">
                  <h3 className="text-xl font-bold text-white">Poslovne usluge</h3>
                  <p className="mt-1 text-sm text-blue-400">Rješenja za poduzeća</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <p className="text-slate-300 flex-grow mb-4">Prilagođena rješenja za poslovne potrebe Microsoft 365 alata</p>
              <motion.div 
                className="pt-4 mt-auto border-t border-slate-800"
                whileHover={{ borderColor: "rgba(99, 102, 241, 0.5)" }}
              >
                <motion.a
                  href="/services/business"
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                  whileHover={{ x: 5 }}
                >
                  Saznajte više <ArrowRight className="ml-1 w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* IT Support Service */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-0.5 shadow-lg"
          >
            <div className="relative h-full bg-slate-900 rounded-[11px] p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="pr-4">
                  <h3 className="text-xl font-bold text-white">IT podrška</h3>
                  <p className="mt-1 text-sm text-blue-400">Tehnička podrška za IT</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <LifeBuoy className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <p className="text-slate-300 flex-grow mb-4">Tehnička podrška za IT infrastrukturu i korisnike</p>
              <motion.div 
                className="pt-4 mt-auto border-t border-slate-800"
                whileHover={{ borderColor: "rgba(99, 102, 241, 0.5)" }}
              >
                <motion.a
                  href="/services/support"
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                  whileHover={{ x: 5 }}
                >
                  Saznajte više <ArrowRight className="ml-1 w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Repair Service */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-0.5 shadow-lg"
          >
            <div className="relative h-full bg-slate-900 rounded-[11px] p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="pr-4">
                  <h3 className="text-xl font-bold text-white">Popravci</h3>
                  <p className="mt-1 text-sm text-blue-400">Popravci i održavanje</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <p className="text-slate-300 flex-grow mb-4">Popravci i održavanje računalnih sustava</p>
              <motion.div 
                className="pt-4 mt-auto border-t border-slate-800"
                whileHover={{ borderColor: "rgba(99, 102, 241, 0.5)" }}
              >
                <motion.a
                  href="/services/repairs"
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                  whileHover={{ x: 5 }}
                >
                  Saznajte više <ArrowRight className="ml-1 w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Setup Service */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-0.5 shadow-lg"
          >
            <div className="relative h-full bg-slate-900 rounded-[11px] p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="pr-4">
                  <h3 className="text-xl font-bold text-white">Postavljanje</h3>
                  <p className="mt-1 text-sm text-blue-400">Instalacija i konfiguracija</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <Laptop2 className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <p className="text-slate-300 flex-grow mb-4">Postavljanje i konfiguracija računalnih sustava</p>
              <motion.div 
                className="pt-4 mt-auto border-t border-slate-800"
                whileHover={{ borderColor: "rgba(99, 102, 241, 0.5)" }}
              >
                <motion.a
                  href="/services/setup"
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                  whileHover={{ x: 5 }}
                >
                  Saznajte više <ArrowRight className="ml-1 w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Networking Service */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-0.5 shadow-lg"
          >
            <div className="relative h-full bg-slate-900 rounded-[11px] p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="pr-4">
                  <h3 className="text-xl font-bold text-white">3D Printanje</h3>
                  <p className="mt-1 text-sm text-blue-400">Komisije za 3D printanje</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <PrinterCheck className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <p className="text-slate-300 flex-grow mb-4">Izrada 3D modela i printanje u fizičke objekte</p>
              <motion.div
                className="pt-4 mt-auto border-t border-slate-800"
                whileHover={{ borderColor: "rgba(99, 102, 241, 0.5)" }}
              >
                <motion.a
                  href="/services/3dprinting"
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                  whileHover={{ x: 5 }}
                >
                  Saznajte više <ArrowRight className="ml-1 w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Web Development Service */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-0.5 shadow-lg"
          >
            <div className="relative h-full bg-slate-900 rounded-[11px] p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="pr-4">
                  <h3 className="text-xl font-bold text-white">Razvoj web aplikacija</h3>
                  <p className="mt-1 text-sm text-blue-400">Razvoj prilagođenih web aplikacija</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <p className="text-slate-300 flex-grow mb-4">Razvoj prilagođenih web aplikacija i rješenja</p>
              <motion.div 
                className="pt-4 mt-auto border-t border-slate-800"
                whileHover={{ borderColor: "rgba(99, 102, 241, 0.5)" }}
              >
                <motion.a
                  href="/services/web"
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                  whileHover={{ x: 5 }}
                >
                  Saznajte više <ArrowRight className="ml-1 w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}