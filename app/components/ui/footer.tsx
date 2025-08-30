'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, Github, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-slate-900 border-t border-slate-800"
    >
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
              <span className="text-xl font-bold text-white">TryCaze</span>
            </div>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/TryCaze"
                whileHover={{ y: -3, scale: 1.1 }}
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/trycaze/"
                whileHover={{ y: -3, scale: 1.1 }}
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">
              Brzi linkovi
            </h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/services" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Usluge
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/#technology" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Tehnologija
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/about" className="text-slate-400 hover:text-blue-400 transition-colors">
                  O nama
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="mailto:trycaze@proton.me" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Kontakt
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">
              Naše usluge
            </h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/services/business" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Poslovne usluge
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/services/support" className="text-slate-400 hover:text-blue-400 transition-colors">
                  IT podrška
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/services/repairs" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Popravci
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/services/setup" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Postavljanje
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/services/networking" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Umrežavanje
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/services/web" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Web razvoj
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">
              Kontaktirajte nas
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                <a href="mailto:trycaze@proton.me" className="text-slate-400">
                  trycaze@proton.me
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-slate-400">7:00 - 19:00</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-slate-800 my-12"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm"
        >
          <div className="mb-4 md:mb-0">
            TryCaze © {new Date().getFullYear()}. Sva prava pridržana.
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Privatnost
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Uvjeti korištenja
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Kolačići
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}