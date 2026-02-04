'use client';
import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';
import React from 'react';
import { useInView } from 'react-intersection-observer';

// Simple ReadMore component
function ReadMore({ text, maxLength }: { text: string; maxLength: number }) {
  const [expanded, setExpanded] = React.useState(false);
  if (text.length <= maxLength) return <p className="mb-4 text-white">{text}</p>;
  return (
    <p className="mb-4 text-white">
      {expanded ? text : text.slice(0, maxLength) + '...'}
      <button
        className="ml-2 text-secondary underline hover:text-secondary-dark transition-colors"
        onClick={() => setExpanded(!expanded)}
        aria-label={expanded ? 'Show less' : 'Read more'}
      >
        {expanded ? 'Prikaži manje' : 'Pročitaj više'}
      </button>
    </p>
  );
}

// Testimonials data
const testimonials = [
  {
    id: 1,
    quote: 'Kristijan je nudio pomoć čim je čuo za moj projekt kupovanja novog pc-a, pomogao mi je u kupovanju komponenti, tj. u tome da odaberem one koje pašu u build te su istovremeno dobre. Preko poruka odgovarao mi je na mnoga moja pitanja, a kada je došlo da fizički trebam njegovu pomoć pri instaliranju Windows 11 sustava, nakon 5 minuta razgovora je krenio i bio ovdje za manje od pola sata. Uz to sve pomogao mi je urediti moj radni stol, postaviti monitor, prebaciti kablove iz starog pc u novi i instalirati Windows. Stvarno nemam prigovora uz sve je još bio i opušten i marljiv. Hvala mu na svemu!',
    author: 'Karlo Arčić',
    role: 'Instalacija Windows 11 sustava i postavljanje uređaja',
    rating: 5
  },
] as const;

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
    <div className="absolute inset-x-0 top-0 h-px bg-white" />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            <span className="text-white">
              Iskustva korisnika
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-xl text-white"
          >
            Šta naši korisnici kažu o nama
          </motion.p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl bg-primary p-8 shadow-2xl"
            >
              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} 
                  />
                ))}
              </div>
              
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-white mb-4" />
              
              {/* Testimonial text with ReadMore */}
              <ReadMore text={testimonial.quote} maxLength={100} />
              
              {/* Author info */}
              <div className="flex items-center pt-4 mt-auto border-t border-white">
                <div className="bg-secondary p-2 rounded-full">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-200">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}