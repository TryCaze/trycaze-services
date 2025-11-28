'use client';
import { motion } from 'framer-motion';
import { 
  Calendar,
  Shield,
  Lightbulb,
  Users,
  Rocket,
  Monitor,
  Smartphone,
  Server
} from 'lucide-react';
import Image from 'next/image';

export default function ONama() {

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <AboutHero/>

      {/* Story Timeline */}
      <OurStory/>

      {/* Core Values */}
      <CoreValues/>

      {/* CTA Section */}
      <AboutCTA/>
    </div>
  );
}

// Component: AboutHero
function AboutHero() {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5" />
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/10"
      />
      
      <div className="relative px-4 py-28 sm:py-36 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              O NAMA
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl mx-auto mt-6 text-lg text-slate-300"
          >
            Jedino sigurno mjesto za Vaša tehnološka rješenja
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <Image 
              src="/images/logo.svg" 
              alt="logo" 
              width={800} 
              height={450}
              className="mx-auto rounded-xl shadow-2xl border border-slate-800"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Component: OurStory
function OurStory() {
  const milestones: Array<{
    year: string;
    titleKey: string;
    descriptionKey: string;
    icon: React.ComponentType<{className?: string}>;
  }> = [
    { 
      year: '2023', 
      titleKey: 'Uspostavljanje TryCaze',
      descriptionKey: 'Početak naše avanture!',
      icon: Calendar 
    },
    { 
      year: '2024', 
      titleKey: 'Proširenja operacija na 3D printanje',
      descriptionKey: 'Otvaranje nove grane koja se bavi tehnologijom 3D printanja.',
      icon: Monitor 
    },
    { 
      year: '2025', 
      titleKey: 'Prvo veliko istraživanje',
      descriptionKey: 'Naše prvo veliko istraživanje u vezi pitanja da li je Linux dobra alternativa za svakodnevni operativni sustav.',
      icon: Server 
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-950/50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white sm:text-4xl">
          Naša razvijanja
        </h2>
        
        <div className="relative mt-16">
          <div className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-indigo-600 transform -translate-x-1/2" />
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-lg z-10">
                  {milestone.year}
                </div>
                
                <div className={`flex-1 ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                  <div className="p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl shadow-lg">
                    <div className="flex items-center mb-3">
                      <milestone.icon className="w-5 h-5 text-blue-400 mr-2" />
                      <h3 className="text-xl font-semibold text-white">
                        {milestone.titleKey}
                      </h3>
                    </div>
                    <p className="text-slate-400">
                      {milestone.descriptionKey}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Component: CoreValues
function CoreValues() {
  const values: Array<{
    icon: React.ComponentType<{className?: string}>;
    titleKey: string;
    descriptionKey: string;
  }> = [
    { 
      icon: Shield,
      titleKey: 'Sigurnost',
      descriptionKey: 'Naš najveći prioritet je sigurnost naših klijenata.'
    },
    { 
      icon: Lightbulb,
      titleKey: 'Inovacije',
      descriptionKey: 'Proširiti naše inovativne mogučnosti.'
    },
    { 
      icon: Users,
      titleKey: 'Timski rad',
      descriptionKey: 'Želimo timski raditi sa svim našim klijentima kako bi smo dali najbolje mogučnosti koje možemo pružiti.'
    },
    { 
      icon: Rocket,
      titleKey: 'Mogučnosti',
      descriptionKey: 'Želimo se i dalje proširiti u svijet tehnologija.'
    }
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white sm:text-4xl">
          Temeljne vrijednosti
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {values.map((value, index) => (
            <motion.div
              key={value.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-lg bg-blue-500/10">
                <value.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {value.titleKey}
              </h3>
              <p className="mt-3 text-slate-400">
                {value.descriptionKey}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Component: AboutCTA
function AboutCTA() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-br from-blue-900/20 to-indigo-900/10">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10" />
      
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Što čekate?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-300">
            Javite nam se danas da pronađete najbolja rješenja za Vas!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:trycaze@proton.me"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
            >
              Javite nam se
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/services"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700"
            >
              Usluge
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}