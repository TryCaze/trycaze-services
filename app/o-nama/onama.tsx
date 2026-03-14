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
  Server,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-5" />
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-light-blue/10"
      />
      
      <div className="relative px-4 py-28 sm:py-36 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            <span className="bg-clip-text text-white">
              O NAMA
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl mx-auto mt-6 text-lg text-white"
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
              className="mx-auto rounded-xl shadow-2xl border border-secondary bg-gray-300"
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
    <section className="py-16 sm:py-24 bg-light-blue/50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white sm:text-4xl">
          Naša razvijanja
        </h2>
        
        <div className="relative mt-16">
          <div className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-secondary to-secondary-dark transform -translate-x-1/2" />
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-bold text-lg z-10">
                  {milestone.year}
                </div>
                
                <div className={`flex-1 ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                  <div className="p-6 bg-primary/50 backdrop-blur-sm border border-light-brown rounded-xl shadow-lg">
                    <div className="flex items-center mb-3">
                      <milestone.icon className="w-5 h-5 text-secondary mr-2" />
                      <h3 className="text-xl font-semibold text-white">
                        {milestone.titleKey}
                      </h3>
                    </div>
                    <p className="text-white">
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
              className="bg-primary/50 backdrop-blur-sm border border-light-brown rounded-xl p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-lg bg-secondary/10">
                <value.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {value.titleKey}
              </h3>
              <p className="mt-3 text-white">
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
        <section className="relative py-24">
      <div className="absolute inset-0 opacity-5 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8 bg-primary/50 border border-secondary rounded-2xl backdrop-blur-md py-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          <span className="bg-clip-text text-white">
            Što čekate?
          </span>
        </h2>
        <p className="text-white mb-8 text-lg">
          Javite nam se danas da pronađete najbolja rješenja za Vas!
        </p>
        <Link
          href="mailto:trycaze@proton.me"
          className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition mx-4"
        >
          Javite nam se <ArrowRight size={18} />
        </Link>
                <Link
          href="mailto:trycaze@proton.me"
          className="inline-flex items-center gap-2 bg-light-blue text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition"
        >
          Usluge <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
}