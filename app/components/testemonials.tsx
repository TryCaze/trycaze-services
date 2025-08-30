'use client';
import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';

// Keys for translations
export function Testimonials() {

  const testimonials = [
    {
      id: 1,
      quoteKey: 'Odlična usluga i podrška!',
      authorKey: 'Karlo Arčić',
      roleKey: 'Instalacija Windows 11 sustava i postavljanje uređaja',
      rating: 5
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-center opacity-5" />
      
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              {'Iskustva korisnika'}
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-300">{'Šta naši korisnici kažu o nama'}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} 
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-400/30 mb-4" />
              <p className="text-lg text-slate-300 mb-6">
                {testimonial.quoteKey}
              </p>
              <div className="flex items-center">
                <div className="bg-blue-500/10 p-2 rounded-full">
                  <User className="w-6 h-6 text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-white">{testimonial.authorKey}</h4>
                  <p className="text-sm text-slate-400">{testimonial.roleKey}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}