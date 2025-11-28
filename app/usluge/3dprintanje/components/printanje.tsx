"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Star,
  Shield,
  Clock,
  MessageCircle,
  Palette,
  Truck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Heart,
} from "lucide-react";
import CommissionsHero from "./hero";
import Link from "next/link";
import Image from "next/image";

export default function CommissionsPage() {
  const [activeStep, setActiveStep] = useState(0);

  const qualities = [
    {
      icon: Star,
      title: "Vrhunska Kvaliteta",
      description:
        "Svaki proizvod je pažljivo dizajniran i izrađen s posebnom pažnjom na detalje.",
    },
    {
      icon: Shield,
      title: "Garancija Zadovoljstva",
      description:
        "100% garancija povrata novca ako niste zadovoljni gotovim proizvodom.",
    },
    {
      icon: Clock,
      title: "Brza Izrada",
      description: "Većina narudžbi je završena unutar 3-5 radnih dana.",
    },
    {
      icon: MessageCircle,
      title: "Osobna Podrška",
      description:
        "Komuniciramo s vama kroz cijeli proces izrade vaše narudžbe.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Kontaktirajte Nas",
      description:
        "Pošaljite nam svoju ideju putem obrasca ili emaila s detaljima vaše narudžbe.",
      icon: MessageCircle,
    },
    {
      number: "02",
      title: "Dizajn i Ponuda",
      description:
        "Kreiramo koncept i šaljemo vam detaljnu ponudu s cijenom i rokom izrade.",
      icon: Palette,
    },
    {
      number: "03",
      title: "Odobrenje i Plaćanje",
      description:
        "Nakon vašeg odobrenja, šaljemo račun i započinjemo s izradom.",
      icon: CheckCircle2,
    },
    {
      number: "04",
      title: "Dostava",
      description: "Gotov proizvod pažljivo pakiramo i šaljemo na vašu adresu.",
      icon: Truck,
    },
  ];

  const examples = [
    {
      image: "/images/examples/korpa.jpg",
      title: "Korpa",
      description: "Mala, savršena i slatka korpa za Vaš dnevni boravak",
    },
    {
      image: "/images/examples/kucnibroj.jpg",
      title: "Kućni Broj",
      description:
        "Personalizirani font, velićina i boja, odlična vidljivost u daljini!",
    },
    {
      image: "/images/examples/nadimak.jpg",
      title: "Personalizirani Nameplate",
      description:
        "Vaše ime u personaliziranoj boji, fontu i velićini, za radni stol ili postaviti na zidu!",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-trybgr">
      {/* Hero Section */}
      <section className="relative">
        <CommissionsHero />
      </section>

      {/* Qualities Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-16 text-center"
          >
            <motion.h2
              className="text-3xl font-bold text-white sm:text-4xl"
            >
              Zašto Odabrati Nas?
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-400"
            >
              Posvećeni smo izradi vrhunskih personaliziranih proizvoda koji
              premašuju očekivanja.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {qualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg border border-gray-700 bg-gray-800 p-6 text-center"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-lg bg-blue-600">
                  <quality.icon className="size-6 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {quality.title}
                </h3>
                <p className="mt-2 text-gray-400">{quality.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-trybgr py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-16 text-center"
          >
            <motion.h2
              className="text-3xl font-bold text-white sm:text-4xl"
            >
              Kako Funkcionira?
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-400"
            >
              Jednostavan proces od ideje do gotovog proizvoda
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-start gap-6 md:flex-row"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-16 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                      {step.number}
                    </div>
                    <div className="md:hidden">
                      <step.icon className="size-8 text-blue-400" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="hidden md:block">
                        <step.icon className="size-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="primjeri" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-16 text-center"
          >
            <motion.h2
              className="text-3xl font-bold text-white sm:text-4xl"
            >
              Naši Radovi
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-400"
            >
              Pogledajte neke od naših nedavno izrađenih personaliziranih
              proizvoda
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {examples.map((example, index) => (
              <motion.div
                key={example.title}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg border border-gray-700 bg-gray-800">
                  <div className="flex aspect-[4/3] items-center justify-center bg-gray-700">
                    <Image
                      src={example.image}
                      alt={example.title}
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
                      {example.title}
                    </h3>
                    <p className="mt-2 text-gray-400">{example.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-trybgr py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl font-bold text-white sm:text-4xl"
            >
              Spremni za Početak?
            </motion.h2>
            <motion.p
              className="mx-auto mt-4 max-w-2xl text-lg text-gray-400"
            >
              Kontaktirajte nas danas i pretvorite svoju ideju u jedinstveni
              personalizirani proizvod koji će trajno oduševiti.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row"
            >
              <Link
                href="/form"
                className="flex items-center gap-3 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
              >
                <Zap className="size-5" />
                Pošaljite Svoju Ideju
                <ArrowRight className="size-5" />
              </Link>

              <div className="flex items-center gap-2 text-gray-400">
                <Heart className="size-5 text-red-400" />
                <span>100% zadovoljnih kupaca</span>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green-400" />
                Besplatna konsultacija
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green-400" />
                Brzi odgovori
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-green-400" />
                Konkurentne cijene
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}