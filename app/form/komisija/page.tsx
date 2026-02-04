"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  FileText,
  Package,
  Palette,
  Upload,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import emailjs from "emailjs-com";
import { useEffect } from "react";

export default function KomisijaForm() {

   useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
    }, []);

  const [formData, setFormData] = useState({
    ime: "",
    email: "",
    opis: "",
    materijal: "",
    boja: "",
    datoteka: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const adminPayload = {
    service_type: "3D_PRINTING",
    service_name: "Personalizirani 3D proizvod",

    ime: formData.ime,
    email: formData.email,
    opis: formData.opis,
    materijal: formData.materijal || "—",
    boja: formData.boja || "—",
    datoteka: formData.datoteka || "—",

    order_summary: `
  Opis: ${formData.opis}
  Materijal: ${formData.materijal || "Nije odabrano"}
  Boja: ${formData.boja || "Nije navedeno"}
  Datoteka: ${formData.datoteka || "Nema linka"}
  `,
};


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

      setSubmitted(true);
      setFormData({
        ime: "",
        email: "",
        opis: "",
        materijal: "",
        boja: "",
        datoteka: "",
      });

      setTimeout(() => setSubmitted(false), 5000);

    } catch (err) {
      console.error(err);
      alert("Došlo je do greške prilikom slanja narudžbe. Pokušajte ponovno.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: "#dbaf53", // secondary color
      transition: { duration: 0.2 },
    },
  };

  if(submitted) {
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
    )
  }

  return (
    <div className="mt-10 min-h-screen py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Naručite <span className="text-secondary">Personalizirani</span>{" "}
            Proizvod
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white">
            Isapunite obrazac ispod i pretvorite svoju ideju u stvarnost.
            Kontaktirat ćemo vas s ponudom unutar 24 sata.
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
                {/* Personal Information */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div whileFocus="focus" variants={inputVariants}>
                    <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <User className="size-4 text-secondary" />
                      Ime i prezime *
                    </label>
                    <input
                      type="text"
                      name="ime"
                      required
                      value={formData.ime}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white transition-all duration-200 placeholder:text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Vaše puno ime"
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
                      placeholder="primjer@gmail.com"
                    />
                  </motion.div>
                </div>

                {/* Project Description */}
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                    <FileText className="size-4 text-secondary" />
                    Opis projekta *
                  </label>
                  <textarea
                    name="opis"
                    required
                    rows={5}
                    value={formData.opis}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-secondary bg-primary/50 p-4 text-white transition-all duration-200 placeholder:text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Detaljno opišite što želite napraviti. Navedite dimenzije, namjenu, i sve posebne zahtjeve..."
                  />
                </motion.div>

                {/* Material & Color */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div whileFocus="focus" variants={inputVariants}>
                    <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <Package className="size-4 text-secondary" />
                      Materijal
                    </label>
                    <select
                      name="materijal"
                      value={formData.materijal}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white transition-all duration-200 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="">Odaberite materijal</option>
                      <option value="PLA">PLA (Standardni)</option>
                      <option disabled value="PETG">PETG (Nedostupno)</option>
                      <option disabled value="ABS">ABS (Nedostupno)</option>
                      <option value="TPU">TPU (Fleksibilni)</option>
                    </select>
                  </motion.div>

                  <motion.div whileFocus="focus" variants={inputVariants}>
                    <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <Palette className="size-4 text-secondary" />
                      Boja
                    </label>
                    <input
                      type="text"
                      name="boja"
                      value={formData.boja}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white transition-all duration-200 placeholder:text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="npr. crvena, prozirna, bijela..."
                    />
                  </motion.div>
                </div>

                {/* File Upload */}
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                    <Upload className="size-4 text-secondary" />
                    Link do datoteke (opcionalno)
                  </label>
                  <input
                    type="url"
                    name="datoteka"
                    value={formData.datoteka}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white transition-all duration-200 placeholder:text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="https://drive.google.com/... ili https://dropbox.com/..."
                  />
                  <p className="mt-2 text-xs text-white">
                    Podržani formati: STL, OBJ, 3MF. Maksimalna veličina: 100MB
                  </p>
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
                      Slanje...
                    </>
                  ) : (
                    <>
                      <Send className="size-5" />
                      Pošalji narudžbu
                      <ArrowRight className="size-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar - Help & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Process Info */}
            <div className="rounded-2xl border border-secondary bg-primary/50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Kako funkcionira?
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Pošaljite upit",
                    desc: "Ispunite obrazac s detaljima vašeg projekta",
                  },
                  {
                    step: "2",
                    title: "Dobijte ponudu",
                    desc: "Kontaktirat ćemo vas s cijenom i rokom izrade",
                  },
                  {
                    step: "3",
                    title: "Odobrite dizajn",
                    desc: "Pregledate i potvrdite konačni dizajn",
                  },
                  {
                    step: "4",
                    title: "Dobijte proizvod",
                    desc: "Šaljemo gotov proizvod na vašu adresu",
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

            {/* Contact Info */}
            <div className="rounded-2xl border border-secondary bg-primary/50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Trebate pomoć?
              </h3>
              <p className="mb-4 text-white">
                Imate pitanja prije slanja narudžbe? Rado ćemo vam pomoći!
              </p>
              <div className="space-y-2 text-sm text-white">
                <p>trycaze@proton.me</p>
                <p>Odgovor unutar 24 sata</p>
              </div>
            </div>

            {/* Tips */}
            <div className="rounded-2xl border border-secondary bg-secondary/10 p-6">
              <h3 className="mb-3 text-lg font-semibold text-secondary">
                Savjeti za bolju ponudu
              </h3>
              <ul className="space-y-2 text-sm text-white">
                <li>• Što detaljniji opis bolje</li>
                <li>• Navedite željene dimenzije</li>
                <li>• Dodajte reference slika ako ih imate</li>
                <li>• Označite prioritetne dijelove</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}