'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Laptop2,
  Briefcase,
  LifeBuoy,
  Network,
  Code,
  ArrowRight,
  BookOpenCheck,
  Users,
  Cpu,
  MonitorUp,
  PrinterCheck
} from 'lucide-react';

const serviceIcons = {
  'performance': BookOpenCheck,
  'support': Users,
  '3dprinting': PrinterCheck,
  'web-development': Code,
  'networking': Network,
  'repair': Cpu,
  'setup': MonitorUp,
  'it-support': LifeBuoy,
  'business-solutions': Briefcase
};

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      id: 'performance',
      title: 'Poboljšanje performansi',
      subtitle: 'Optimizacija sistema',
      description: 'Povećanje učinkovitosti rada sustava kroz analizu performansi, uklanjanje uskih grla i implementaciju najboljih praksi za stabilniji i brži rad. Cilj je postići maksimalne rezultate uz optimalno korištenje resursa.'
    },
    {
      id: 'support',
      title: 'Tehnička podrška',
      subtitle: 'Pomoć korisnicima',
      description: 'Osiguravanje svakodnevne tehničke podrške krajnjim korisnicima kroz pomoć pri rješavanju softverskih i hardverskih problema, savjetovanje i vođenje korisnika u radu s digitalnim alatima i tehnologijama.'
    },
    {
      id: '3dprinting',
      title: '3D Printanje',
      subtitle: 'Komisije za 3D printanje',
      description: 'Izrada 3D modela i njihovo pretvaranje u fizičke objekte putem 3D printanja. Usluge uključuju dizajn, pripremu modela za ispis te sam proces printanja koristeći različite materijale i tehnologije.'
    },
    {
      id: 'web-development',
      title: 'Web razvoj',
      subtitle: 'Razvoj web aplikacija',
      description: 'Izrada suvremenih, responzivnih i sigurnih web aplikacija koje su prilagođene potrebama klijenata. Uključuje frontend i backend razvoj, optimizaciju i integraciju s drugim sustavima.'
    },
    {
      id: 'networking',
      title: 'Umrežavanje',
      subtitle: 'Umrežavanje i infrastruktura',
      description: 'Dizajn, implementacija i održavanje mrežnih rješenja, uključujući lokalne mreže (LAN), bežične mreže (Wi-Fi), te sigurne VPN pristupe. Cilj je stabilna, brza i sigurna komunikacija unutar sustava.'
    },
    {
      id: 'repair',
      title: 'Popravci',
      subtitle: 'Popravci i održavanje',
      description: 'Dijagnostika i popravak računalne opreme te sustava, uz preventivno održavanje radi sprječavanja budućih kvarova. Usluge obuhvaćaju i nadogradnju hardvera te zamjenu dotrajalih komponenti.'
    },
    {
      id: 'setup',
      title: 'Postavljanje',
      subtitle: 'Instalacija i konfiguracija',
      description: 'Kompletna instalacija, konfiguracija i postavljanje IT sustava. Od operativnih sustava, aplikacija i sigurnosnih rješenja do fizičkog umrežavanja i servera. Prilagođeno specifičnim potrebama korisnika.'
    },
    {
      id: 'it-support',
      title: 'IT podrška',
      subtitle: 'Tehnička podrška za IT',
      description: 'Profesionalna podrška IT odjelima unutar organizacija. Uključuje administraciju sustava, podršku za mrežnu infrastrukturu i sigurnosne nadogradnje.'
    },
    {
      id: 'business-solutions',
      title: 'Poslovna Rješenja',
      subtitle: 'Rješenja za poduzeća',
      description: ' Implementacija poslovnih rješenja temeljenih na Microsoft 365 platformi, uključujući korištenje gotovih predložaka (templates) i Excel integracija za automatizaciju i optimizaciju poslovnih procesa. Prilagođeno malim i srednjim poduzećima u svrhu povećanja učinkovitosti i suradnje.'
    }
  ];

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
              Što možemo učinti za vas?
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-xl text-slate-300"
          >
            Sveobuhvatna IT rješenja za poslovne i privatne korisnike
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
          {services.map((service) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Laptop2;
            
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-0.5 shadow-lg"
              >
                <div className="relative h-full bg-slate-900 rounded-[11px] p-6 flex flex-col">
                  {/* Header with icon */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="pr-4">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="mt-1 text-sm text-blue-400">{service.subtitle}</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  
                  {/* Description with fixed height */}
                  <p className="text-slate-300 flex-grow mb-4">{service.description}</p>
                  
                  {/* Learn more button */}
                  <motion.div 
                    className="pt-4 mt-auto border-t border-slate-800"
                    whileHover={{ 
                      borderColor: "rgba(99, 102, 241, 0.5)"
                    }}
                  >
                    <motion.a
                      href="/usluge"
                      className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                      whileHover={{ x: 5 }}
                    >
                      {'Saznajte više'} <ArrowRight className="ml-1 w-4 h-4" />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}