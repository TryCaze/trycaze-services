'use client';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Image from 'next/image';

export default function CaseStudy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900"
    >
      <h1 className="text-4xl font-bold mb-2 text-gray-100">404</h1>
      <p className="text-lg text-gray-400 mb-4">Stranica je pod izgradnjom.</p>
      <a
        href="/"
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        <Download size={18} />
        Nazad na početnu
      </a>
    </motion.div>
  );
}