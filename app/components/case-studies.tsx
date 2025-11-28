'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Monitor } from 'lucide-react';
import { DiLinux } from 'react-icons/di';

export function CaseStudies() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const studies = [
    {
      id: 1,
      title: 'Projekat MINT',
      description: 'Vračanje funkcionalnosti starog računala sa Linuxom.',
      icon: DiLinux,
      category: 'Postavljanje'
    },
  ];

  return (
    <section id="case-studies" ref={ref} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] bg-center" />
      </div>
      
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-10" />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              Studiji Slučajeva
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-xl text-slate-300"
          >
            Naši studiji slučajeva
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
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
          {studies.map((study, index) => (
            <motion.div
              key={study.id}
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-0.5 shadow-lg"
            >
              <div className="relative h-full bg-slate-900 rounded-[11px] p-8 flex flex-col">
                <div className="absolute top-8 right-8 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
                  <study.icon className="w-6 h-6 text-blue-400" />
                </div>
                
                <div className="pr-16 flex-grow">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full mb-4">
                    {study.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-slate-400 mb-6">{study.description}</p>
                </div>

                <motion.div 
                  className="pt-4 border-t border-slate-800"
                  whileHover={{ 
                    borderColor: "rgba(99, 102, 241, 0.5)"
                  }}
                >
                  <motion.a
                    href="/studiji-slucaja/projekat-mint"
                    className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                    whileHover={{ x: 5 }}
                  >
                    {'Pročitajte studiju slučaja'} <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}