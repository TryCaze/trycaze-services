"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const backgroundImages = [
  "https://images.pexels.com/photos/20877039/pexels-photo-20877039.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/20341733/pexels-photo-20341733.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/22491106/pexels-photo-22491106.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/31357903/pexels-photo-31357903.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

export default function CommissionsHero() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Automatic slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt=""
          fill
          priority={index === 0}
          className={`
            absolute inset-0 object-cover transition-opacity duration-1000
            ${index === currentBgIndex ? "opacity-20" : "opacity-0"}
          `}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Naručite
            <span className="text-blue-500"> Personalizirane </span>
            Proizvode
          </motion.h1>

          <motion.p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Pretvorite svoje ideje u stvarnost. Kreiramo jedinstvene,
            personalizirane proizvode koji će oduševiti vas i vaše voljene.
          </motion.p>

          <motion.div className="mt-10 flex items-center justify-center gap-6">
            <Link
              href="/form"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Naručite Sada
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="#primjeri"
              className="rounded-lg border border-gray-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Pogledajte Primjere
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBgIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              size-3 rounded-full transition-all duration-300
              ${index === currentBgIndex ? "scale-125 bg-blue-500" : "bg-gray-400 hover:bg-gray-300"}
            `}
          />
        ))}
      </div>
    </section>
  );
}