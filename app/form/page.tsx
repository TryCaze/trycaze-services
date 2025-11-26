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
} from "lucide-react";

export default function KomisijaForm() {
  const [formData, setFormData] = useState({
    ime: "",
    email: "",
    opis: "",
    materijal: "",
    boja: "",
    datoteka: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      const res = await fetch("/api/send-commission-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send request");

      alert(
        "Narudžba je uspješno poslana! Kontaktirat ćemo vas u najkraćem roku.",
      );
      setFormData({
        ime: "",
        email: "",
        opis: "",
        materijal: "",
        boja: "",
        datoteka: "",
      });
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
      borderColor: "#3b82f6",
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="mt-10 min-h-screen bg-trybgr py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Naručite <span className="text-blue-500">Personalizirani</span>{" "}
            Proizvod
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Ispunite obrazac ispod i pretvorite svoju ideju u stvarnost.
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
            <div className="rounded-2xl border border-gray-700 bg-gray-800 p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div whileFocus="focus" variants={inputVariants}>
                    <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <User className="size-4 text-blue-400" />
                      Ime i prezime *
                    </label>
                    <input
                      type="text"
                      name="ime"
                      required
                      value={formData.ime}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-600 bg-gray-700 p-4 text-white transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Unesite vaše puno ime"
                    />
                  </motion.div>

                  <motion.div whileFocus="focus" variants={inputVariants}>
                    <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <Mail className="size-4 text-blue-400" />
                      Email adresa *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-600 bg-gray-700 p-4 text-white transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="vas.email@primjer.com"
                    />
                  </motion.div>
                </div>

                {/* Project Description */}
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                    <FileText className="size-4 text-blue-400" />
                    Opis projekta *
                  </label>
                  <textarea
                    name="opis"
                    required
                    rows={5}
                    value={formData.opis}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-gray-600 bg-gray-700 p-4 text-white transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Detaljno opišite što želite napraviti. Navedite dimenzije, namjenu, i sve posebne zahtjeve..."
                  />
                </motion.div>

                {/* Material & Color */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div whileFocus="focus" variants={inputVariants}>
                    <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <Package className="size-4 text-blue-400" />
                      Materijal
                    </label>
                    <select
                      name="materijal"
                      value={formData.materijal}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-600 bg-gray-700 p-4 text-white transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Odaberite materijal</option>
                      <option value="PLA">PLA (Standardni)</option>
                      <option value="PETG">PETG (Izdržljivi)</option>
                      <option value="ABS">ABS (Temperaturno otporni)</option>
                      <option value="TPU">TPU (Fleksibilni)</option>
                    </select>
                  </motion.div>

                  <motion.div whileFocus="focus" variants={inputVariants}>
                    <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <Palette className="size-4 text-blue-400" />
                      Boja
                    </label>
                    <input
                      type="text"
                      name="boja"
                      value={formData.boja}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-600 bg-gray-700 p-4 text-white transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="npr. crvena, prozirna, bijela..."
                    />
                  </motion.div>
                </div>

                {/* File Upload */}
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                    <Upload className="size-4 text-blue-400" />
                    Link do datoteke (opcionalno)
                  </label>
                  <input
                    type="url"
                    name="datoteka"
                    value={formData.datoteka}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-600 bg-gray-700 p-4 text-white transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://drive.google.com/... ili https://dropbox.com/..."
                  />
                  <p className="mt-2 text-xs text-gray-400">
                    Podržani formati: STL, OBJ, 3MF. Maksimalna veličina: 100MB
                  </p>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
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
            <div className="rounded-2xl border border-gray-700 bg-gray-800 p-6">
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
                    <div className="flex size-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="rounded-2xl border border-gray-700 bg-gray-800 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Trebate pomoć?
              </h3>
              <p className="mb-4 text-gray-400">
                Imate pitanja prije slanja narudžbe? Rado ćemo vam pomoći!
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>trycaze@proton.me</p>
                <p>Odgovor unutar 24 sata</p>
              </div>
            </div>

            {/* Tips */}
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">
              <h3 className="mb-3 text-lg font-semibold text-blue-400">
                Savjeti za bolju ponudu
              </h3>
              <ul className="space-y-2 text-sm text-blue-300">
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
