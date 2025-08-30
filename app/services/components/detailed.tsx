'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Laptop2, Wrench, Settings, Network, Server, ChevronDown } from 'lucide-react';

const services = [
  {
    title: 'Poslovne usluge',
    icon: <Globe className="w-5 h-5 text-blue-400" />,
    description: 'Implementacija Microsoft 365 poslovnih rješenja za bolju organizaciju, automatizaciju i obradu velikih količina podataka. Idealno za mala i srednja poduzeća koja žele povećati učinkovitost i timsku suradnju putem gotovih predložaka i pametne integracije alata.',
    pointOne: 'Korištenje gotovih predložaka za ubrzanje poslovnih procesa.',
    pointTwo: 'Učinkovita obrada i organizacija velikih skupova podataka.',
    pointThree: 'Automatizacija izvještaja i procesa kroz integraciju s Excelom i Power Automateom.',
  },
  {
    title: 'IT podrška',
    icon: <Laptop2 className="w-5 h-5 text-blue-400" />,
    description: 'Pouzdana udaljena i lokalna tehnička podrška za krajnje korisnike i poslovne sustave. Naš tim osigurava neprekinut rad vaših uređaja i mreža, brzo rješavanje problema i sveobuhvatnu zaštitu vaših podataka.',
    pointOne: 'Brza udaljena pomoć putem sigurnih poveznica i pristupa.',
    pointTwo: 'Dolazak na lokaciju u slučaju ozbiljnijih problema s hardverom ili mrežom.',
    pointThree: 'Zaštita podataka i sustava putem antivirusnih rješenja i sigurnosnih politika.',
  },
  {
    title: 'Popravci',
    icon: <Wrench className="w-5 h-5 text-blue-400" />,
    description: 'Brza dijagnostika i profesionalni popravci računala, prijenosnika, printera i ostale opreme. Koristimo kvalitetne komponente i pružamo garanciju na izvršene usluge.',
    pointOne: 'Detaljna hardverska i softverska dijagnostika za precizno otkrivanje kvara.',
    pointTwo: 'Zamjena neispravnih komponenti poput RAM-a, SSD-a, napajanja i ventilatora.',
    pointThree: 'Rješavanje softverskih problema, reinstalacije sustava i čišćenje zlonamjernih programa.',
  },
  {
    title: 'Postavljanje sustava',
    icon: <Settings className="w-5 h-5 text-blue-400" />,
    description: 'Kompletno postavljanje i konfiguracija novih i postojećih računala, uključujući instalaciju operativnih sustava, osnovnih programa te povezivanje s mrežnim servisima.',
    pointOne: 'Instalacija fizičkih komponenti i priprema uređaja za rad.',
    pointTwo: 'Postavljanje softvera i optimizacija prema vrsti korištenja (poslovno, osobno, gaming).',
    pointThree: 'Konfiguracija operativnih sustava, korisničkih računa i sigurnosnih postavki.',
  },
  {
    title: 'Umrežavanje',
    icon: <Network className="w-5 h-5 text-blue-400" />,
    description: 'Planiranje, implementacija i održavanje mrežnih sustava za kućne i poslovne korisnike. Nudimo pouzdane i sigurne žične i bežične mreže, s naprednim opcijama zaštite i dijagnostike.',
    pointOne: 'Postavljanje žične infrastrukture i organizacija mrežnog kabliranja.',
    pointTwo: 'Optimizacija Wi-Fi mreže za brzi i stabilni signal u svim prostorijama.',
    pointThree: 'Otkrivanje i otklanjanje mrežnih problema te postavljanje sigurnosnih slojeva (VLAN, firewall, gosti pristup).',
  },
  {
    title: 'Web razvoj',
    icon: <Server className="w-5 h-5 text-blue-400" />,
    description: 'Izrada modernih, brzih i responzivnih web stranica i aplikacija temeljenih na Next.js tehnologiji. Savršeno za male tvrtke koje žele profesionalan online nastup, uz mogućnost daljnje nadogradnje i održavanja.',
    pointOne: 'Razvoj funkcionalnih web shopova, portfolia i poslovnih stranica.',
    pointTwo: 'Estetski ugodan dizajn i intuitivno korisničko sučelje prilagođeno svim uređajima.',
    pointThree: 'Održavanje i nadogradnje web aplikacija do 2 godine nakon isporuke.',
  },
];


export function DetailedServices() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5 pointer-events-none" />

      <div className="relative max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Detaljne usluge
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Istražite šta sve usluge rade za Vas. Jednostavno, čisto i razumljivo na jednom mjestu.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-md transition"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  {service.icon}
                  <span className="text-white font-medium">{service.title}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: 'auto', opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden px-6 pb-4 text-slate-300 text-sm"
                  >
                    {service.description}
                    <li>
                    {service.pointOne}
                    </li>
                    <li>
                    {service.pointTwo}
                    </li>
                    <li>
                    {service.pointThree}
                    </li>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
