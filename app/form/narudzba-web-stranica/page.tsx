"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  Phone,
  Building,
  Globe,
  Clock,
  DollarSign,
  MessageSquare,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import emailjs from "emailjs-com";
import { useEffect } from "react";

export default function WebDevContactForm() {

    useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
    }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    requirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const adminPayload = {
    service_type: "WEB_DEV",
    service_name: "Web Development",

    ime: formData.name,
    email: formData.email,
    phone: formData.phone || "—",

    order_summary: `
  Tip projekta: ${formData.projectType}
  Budžet: ${formData.budget}
  Rok: ${formData.timeline}

  Opis:
  ${formData.description}

  Zahtjevi:
  ${formData.requirements || "—"}
  `,
  };


  const projectTypes = [
    "Web stranica",
    "Web shop (e-commerce)",
    "Web aplikacija",
    "Redizajn postojeće stranice",
    "CMS integracija",
    "SEO optimizacija",
    "Održavanje web stranice",
    "Custom rješenje",
  ];

  const budgets = [
    "500 - 1000€",
    "1000 - 2500€",
    "2500 - 5000€",
    "5000€+",
    "Nisam siguran/na",
  ];

  const timelines = [
    "Hitno (2-4 tjedna)",
    "Normalno (4-8 tjedana)",
    "Fleksibilno (2-3 mjeseca)",
    "Dugoročno (3+ mjeseci)",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Send admin notification
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE!,
      adminPayload
    );

    // Send user confirmation
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE!,
      formData
    );

    // Success UI
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
      requirements: "",
    });

    setTimeout(() => setSubmitted(false), 5000);

  } catch (error) {
    console.error("EmailJS error:", error);
    alert("Došlo je do greške prilikom slanja upita. Pokušajte ponovno.");
  } finally {
    setIsSubmitting(false);
  }
};

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: "#dbaf53",
      transition: { duration: 0.2 },
    },
  };

  if (submitted) {
    return (
      <div className="min-h-screen py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-secondary bg-primary/50 p-8 text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-secondary/20 p-4">
                <CheckCircle className="size-16 text-secondary" />
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white">
              Hvala na upitu!
            </h2>
            <p className="mb-6 text-lg text-white">
              Vaš upit je uspješno poslan. Kontaktirat ćemo vas unutar 24 sata s detaljnijom ponudom.
            </p>
            <p className="text-sm text-white">
              U međuvremenu, možete nas kontaktirati direktno na:{" "}
              <a href="mailto:trycaze@proton.me" className="text-secondary hover:underline">
                trycaze@proton.me
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Besplatna konzultacija za{' '}
            <span className="text-secondary">web projekt</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white">
            Isapunite obrazac ispod i dobijte personaliziranu ponudu za vaš web projekt.
            Kontaktirat ćemo vas s detaljnom ponudom unutar 24 sata.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-secondary bg-primary/50 p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div whileFocus="focus" variants={inputVariants}>
                    <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <User className="size-4 text-secondary" />
                      Ime i prezime *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white transition-all duration-200 placeholder:text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Vaše ime i prezime"
                    />
                  </motion.div>

                  <motion.div whileFocus="focus" variants={inputVariants}>
                    <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <Mail className="size-4 text-secondary" />
                      Email adresa *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white transition-all duration-200 placeholder:text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="vas.email@primjer.com"
                    />
                  </motion.div>

                  <motion.div whileFocus="focus" variants={inputVariants}>
                    <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <Phone className="size-4 text-secondary" />
                      Telefon (opcionalno)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white transition-all duration-200 placeholder:text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="+385 9X XXX XXX"
                    />
                  </motion.div>

                  <motion.div whileFocus="focus" variants={inputVariants}>
                    <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <Building className="size-4 text-secondary" />
                      Tvrtka / Organizacija
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white transition-all duration-200 placeholder:text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Naziv tvrtke (ako postoji)"
                    />
                  </motion.div>
                </div>

                {/* Website & Project Type */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div whileFocus="focus" variants={inputVariants}>
                    <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <Globe className="size-4 text-secondary" />
                      Postojeća web stranica (ako postoji)
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white transition-all duration-200 placeholder:text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="https://vasastranica.com"
                    />
                  </motion.div>

                  <motion.div whileFocus="focus" variants={inputVariants}>
                    <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <CheckCircle className="size-4 text-secondary" />
                      Tip projekta *
                    </label>
                    <select
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white transition-all duration-200 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="">Odaberite tip projekta</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div whileFocus="focus" variants={inputVariants}>
                    <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <DollarSign className="size-4 text-secondary" />
                      Predviđeni budžet *
                    </label>
                    <select
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white transition-all duration-200 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="">Odaberite budžet</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div whileFocus="focus" variants={inputVariants}>
                    <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <Clock className="size-4 text-secondary" />
                      Vremenski okvir *
                    </label>
                    <select
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white transition-all duration-200 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="">Odaberite vremenski okvir</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                {/* Project Description */}
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                    <MessageSquare className="size-4 text-secondary" />
                    Opis projekta *
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-secondary bg-primary/50 p-4 text-white transition-all duration-200 placeholder:text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Opišite što želite postići s vašim web projektom. Što je glavni cilj?"
                  />
                </motion.div>

                {/* Additional Requirements */}
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <label className="mb-3 text-sm font-medium text-white">
                    Dodatni zahtjevi ili napomene
                  </label>
                  <textarea
                    name="requirements"
                    rows={3}
                    value={formData.requirements}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-secondary bg-primary/50 p-4 text-white transition-all duration-200 placeholder:text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Navedite specifične funkcionalnosti, integracije, dizajn preferencije, ili bilo što drugo što smatrate važnim..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-secondary px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-secondary-dark focus:outline-none focus:ring-4 focus:ring-secondary/50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Slanje upita...
                    </>
                  ) : (
                    <>
                      <Send className="size-5" />
                      Pošaljite upit za besplatnu ponudu
                      <ArrowRight className="size-5" />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-sm text-white">
                  Odgovorimo unutar 24 sata • Bez ikakvih obveza • Transparentna cijena
                </p>
              </form>
            </div>
          </motion.div>

          {/* Sidebar - Info & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Process Info */}
            <div className="rounded-2xl border border-secondary bg-primary/50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Što slijedi nakon upita?
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Analiza upita",
                    desc: "Pregledavamo vaše potrebe i ciljeve",
                  },
                  {
                    step: "2",
                    title: "Besplatna konzultacija",
                    desc: "Razgovaramo telefonom ili video pozivom",
                  },
                  {
                    step: "3",
                    title: "Detaljna ponuda",
                    desc: "Šaljemo cijenu, rokove i plan rada",
                  },
                  {
                    step: "4",
                    title: "Početak rada",
                    desc: "Započinjemo s projektom nakon vašeg odobrenja",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="flex size-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="text-sm text-white">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="rounded-2xl border border-secondary bg-primary/50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Zašto odabrati nas?
              </h3>
              <div className="space-y-3">
                {[
                  "✓ Transparentne cijene bez skrivenih troškova",
                  "✓ Moderne tehnologije (Next.js, React, Tailwind)",
                  "✓ Responzivni dizajn za sve uređaje",
                  "✓ SEO optimizacija od prvog dana",
                  "✓ Podrška i održavanje do 5 godina",
                  "✓ Personalizirani pristup svakom projektu",
                ].map((benefit, index) => (
                  <p key={index} className="text-sm text-white">
                    {benefit}
                  </p>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="rounded-2xl border border-secondary bg-secondary/10 p-6">
              <h3 className="mb-4 text-xl font-semibold text-secondary">
                Kontaktirajte nas direktno
              </h3>
              <p className="mb-4 text-white">
                Preferirate direktnu komunikaciju? Kontaktirajte nas putem emaila.
              </p>
              <div className="space-y-3 text-sm text-white">
                <a
                  href="mailto:trycaze@proton.me?subject=Upit%20za%20web%20razvoj&body=Pozdrav%2C%0A%0AZanima me usluga web razvoja.%20Molim%20vas%20da%20me%20kontaktirate%20kako%20bismo%20dogovorili%20detalje.%0A%0AHvala!"
                  className="block rounded-lg bg-secondary px-4 py-3 text-center font-medium text-white hover:bg-secondary-dark transition-colors"
                >
                  trycaze@proton.me
                </a>
                <p className="text-center">Odgovor unutar 24 sata</p>
              </div>
            </div>

            {/* Popular Services */}
            <div className="rounded-2xl border border-secondary bg-primary/50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Najtraženije usluge
              </h3>
              <div className="space-y-2">
                {[
                  { name: "Web stranice", from: "500€" },
                  { name: "Web shopovi", from: "1500€" },
                  { name: "Web aplikacije", from: "2500€" },
                  { name: "Redizajn", from: "200€" },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-secondary/30 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-white">{service.name}</span>
                    <span className="text-secondary font-medium">
                      od {service.from}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}