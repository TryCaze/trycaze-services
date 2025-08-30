'use client';
import { motion } from 'framer-motion';
import { Wrench, Globe, Server, Network, Laptop2, Settings } from 'lucide-react';

const services = [
  { name: 'Poslovne usluge', icon: <Globe className="w-6 h-6 text-blue-400" /> },
  { name: 'IT podrška', icon: <Laptop2 className="w-6 h-6 text-blue-400" /> },
  { name: 'Popravci', icon: <Wrench className="w-6 h-6 text-blue-400" /> },
  { name: 'Postavljanje', icon: <Settings className="w-6 h-6 text-blue-400" /> },
  { name: 'Umrežavanje', icon: <Network className="w-6 h-6 text-blue-400" /> },
  { name: 'Web razvoj', icon: <Server className="w-6 h-6 text-blue-400" /> },
];

export function ServicesSummary() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Naše usluge
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Sva tehnološka rješenja za Vas na jednom mjestu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="group bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-md transition flex flex-col items-center text-center"
            >
              <div className="p-3 rounded-full bg-blue-500/10 mb-4">
                {service.icon}
              </div>
              <h3 className="text-white text-lg font-semibold group-hover:text-blue-400 transition">
                {service.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}