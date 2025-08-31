"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  ChevronDown,
  ChevronUp,
  Search,
  Download,
  CheckSquare,
  X,
  Clipboard,
  RefreshCw,
  Mail,
  Usb
} from "lucide-react";

// ---------------- Types ----------------
interface OSEntry {
  os: string;
  flavor?: string;
  category: "Windows" | "Linux" | "macOS";
  pros: string[];
  cons: string[];
  details: string;
  requirements?: string;
  tags: string[];
}

interface QuestionOption {
  label: string;
  value: string;
}

interface Question {
  key: string;
  text: string;
  type: "single" | "multi";
  options: QuestionOption[];
}

// ---------------- Component ----------------
export default function OSRecommender() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [result, setResult] = useState<OSEntry | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [selectedCompare, setSelectedCompare] = useState<string[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  // Set last updated timestamp on mount
  useEffect(() => {
    setLastUpdated(new Date().toLocaleTimeString());
  }, []);

  // Force refresh function
  const forceRefresh = () => {
    window.location.reload();
  };

  // ----------- Questionnaire -----------
  const questions: Question[] = [
    {
      key: "cpu",
      text: "Koliko je moderan vaš CPU?",
      type: "single",
      options: [
        { label: "Noviji / moderni (8th gen Intel / Ryzen 2000+)", value: "new" },
        { label: "Stariji CPU", value: "old" },
      ],
    },
    {
      key: "ram",
      text: "Koliko RAM-a imate?",
      type: "single",
      options: [
        { label: "2-4 GB", value: "low" },
        { label: "8 GB+", value: "medium" },
        { label: "16 GB+", value: "high" },
      ],
    },
    {
      key: "tpm",
      text: "Imate li TPM 2.0 i Secure Boot?",
      type: "single",
      options: [
        { label: "Da", value: "true" },
        { label: "Ne / Ne znam", value: "false" },
      ],
    },
    {
      key: "uiPref",
      text: "Koje korisničko sučelje preferirate? (možete odabrati više)",
      type: "multi",
      options: [
        { label: "Slično Windowsu", value: "windows" },
        { label: "Slično macOS-u", value: "mac" },
        { label: "Jednostavno i lagano", value: "lightweight" },
        { label: "Fleksibilno / otvoreno za učenje", value: "flex" },
      ],
    },
    {
      key: "useCase",
      text: "Za što najviše koristite računalo? (možete odabrati više)",
      type: "multi",
      options: [
        { label: "Posao i ured", value: "work" },
        { label: "Gaming", value: "gaming" },
        { label: "Internet i osnovno korištenje", value: "basic" },
        { label: "Programiranje / razvoj", value: "dev" },
        { label: "Offline/legacy aplikacije", value: "legacy" },
        { label: "Multimedija / kreativni rad", value: "creative" },
      ],
    },
    {
      key: "hardwareSwitch",
      text: "Jeste li spremni kupiti novo računalo?",
      type: "single",
      options: [
        { label: "Da, razmatram i Mac", value: "mac_hardware" },
        { label: "Mogu kupiti novi PC", value: "new_pc" },
        { label: "Ne, ostajem na trenutnom PC-u", value: "stay_pc" },
      ],
    },
  ];

  // ----------- OS Dataset -----------
  const osOptions: OSEntry[] = [
    {
      os: "Windows 11",
      category: "Windows",
      details:
        "Najnoviji Windows s redovitim sigurnosnim ažuriranjima, najbolja kompatibilnost za Office, Adobe i većinu igara.",
      pros: [
        "Puna podrška i sigurnosne zakrpe",
        "Najbolja kompatibilnost za poslovni softver",
        "Game Pass / DirectX 12",
      ],
      cons: ["Zahtijeva TPM 2.0 i Secure Boot", "Nije idealan za vrlo stara računala"],
      requirements: "TPM 2.0, Secure Boot, 4+ GB RAM, 64+ GB prostora",
      tags: ["windows", "gaming", "office", "modern", "business"],
    },
    {
      os: "Windows 10",
      category: "Windows",
      details:
        "Preporučeno samo za offline/izolirana okruženja ili kada ovisite o starim legacy aplikacijama/hardveru.",
      pros: ["Poznato okruženje", "Široka kompatibilnost sa starim aplikacijama"],
      cons: ["Bez budućih sigurnosnih ažuriranja", "Povećani sigurnosni rizik online"],
      requirements: "Radi na širokom rasponu starijeg hardvera",
      tags: ["legacy", "offline", "compatibility"],
    },
    {
      os: "Linux Mint (Cinnamon)",
      category: "Linux",
      details:
        "Stabilna, korisniku prijateljska distribucija. Cinnamon okruženje je poznato korisnicima Windowsa.",
      pros: ["Lagan prelazak s Windowsa", "Niska potrošnja resursa"],
      cons: ["Manje AA igara radi nativno", "Povremeni driver issues na novom hardveru"],
      requirements: "2+ GB RAM (4+ preporučeno)",
      tags: ["beginner", "windows-like", "office", "old-pc"],
    },
    {
      os: "Xubuntu / Linux Mint XFCE",
      category: "Linux",
      details:
        "Lagano XFCE okruženje za vrlo stara ili slabija računala.",
      pros: ["Vrlo brzo i štedljivo", "Radi na starom hardveru"],
      cons: ["Osnovan izgled", "Manje vizualnih efekata"],
      requirements: "1+ GB RAM (2+ preporučeno)",
      tags: ["lightweight", "old-pc", "xfce"],
    },
    {
      os: "KDE Neon / Kubuntu",
      category: "Linux",
      details:
        "KDE Plasma nudi izgled i logiku sličnu Windowsu, uz ogromne mogućnosti prilagodbe.",
      pros: ["Windows-like iskustvo", "Izuzetno prilagodljivo"],
      cons: ["Može biti zahtjevnije za RAM/CPU", "Mnogo opcija može zbuniti"],
      requirements: "4+ GB RAM (8+ preporučeno)",
      tags: ["windows-like", "customize", "plasma"],
    },
    {
      os: "Ubuntu / Fedora (GNOME)",
      category: "Linux",
      details:
        "GNOME pruža čist, moderan izgled sličan macOS-u; odličan za fokusirani rad i developer alate.",
      pros: ["Moderno sučelje", "Velika zajednica"],
      cons: ["Drugačiji UX nego Windows", "Više RAM-a u odnosu na XFCE"],
      requirements: "4+ GB RAM (8+ preporučeno)",
      tags: ["mac-like", "developer", "gnome"],
    },
    {
      os: "Pop!_OS (GNOME)",
      category: "Linux",
      details:
        "Odličan za gaming i razvoj, vrlo dobra podrška za Nvidia/AMD; tiling opcije za produktivnost.",
      pros: ["Optimiziran za GPU", "Odličan za developere"],
      cons: ["Manja zajednica od Ubuntu-a"],
      requirements: "4+ GB RAM, moderniji CPU/GPU preporučen",
      tags: ["gaming", "developer", "gnome"],
    },
    {
      os: "macOS (novi hardver)",
      category: "macOS",
      details:
        "Za korisnike spremne prijeći na Apple hardver; izvrsna integracija i dug vijek podrške.",
      pros: ["Stabilnost i sigurnost", "Idealan za kreativne alate i razvoj iOS/macOS"],
      cons: ["Skup prelazak (novi uređaj)", "Ograničeno na Apple ekosustav"],
      requirements: "Kupnja Mac računala (M-serija preporučena)",
      tags: ["mac", "creative", "developer"],
    },
  ];

  // ----------- Handlers -----------
  const handleAnswer = (value: string) => {
    const q = questions[step];
    if (q.type === "multi") {
      const current: string[] = answers[q.key] || [];
      setAnswers({
        ...answers,
        [q.key]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      });
    } else {
      setAnswers({ ...answers, [q.key]: value });
    }
  };

  const nextStep = () => {
    if (step < questions.length - 1) setStep(step + 1);
    else calculateResult(answers);
  };

  const calculateResult = (a: Record<string, any>) => {
    // Legacy case first - highest priority
    if (a.useCase?.includes("legacy")) {
      const res = osOptions.find(o => o.os === "Windows 10 (ostati)")!;
      setResult(res);
      return;
    }

    // macOS case
    if (a.hardwareSwitch === "mac_hardware") {
      const res = osOptions.find(o => o.os === "macOS (novi hardver)")!;
      setResult(res);
      return;
    }

    // Windows 11 eligibility check
    const isEligibleForWindows11 = a.cpu === "new" && a.ram !== "low" && a.tpm === "true";
    
    // Windows preference check
    const prefersWindows = a.uiPref?.includes("windows") || 
                          a.useCase?.includes("work") || 
                          a.useCase?.includes("gaming");
    
    // If eligible for Windows 11 and prefers Windows
    if (isEligibleForWindows11 && prefersWindows) {
      const res = osOptions.find(o => o.os === "Windows 11")!;
      setResult(res);
      return;
    }

    // Low-end hardware
    if (a.ram === "low" || a.cpu === "old") {
      if (a.uiPref?.includes("lightweight")) {
        const res = osOptions.find(o => o.os === "Xubuntu / Linux Mint XFCE")!;
        setResult(res);
        return;
      } else {
        const res = osOptions.find(o => o.os === "Linux Mint (Cinnamon)")!;
        setResult(res);
        return;
      }
    }

    // Gaming preference
    if (a.useCase?.includes("gaming")) {
      if (isEligibleForWindows11) {
        const res = osOptions.find(o => o.os === "Windows 11")!;
        setResult(res);
        return;
      } else {
        const res = osOptions.find(o => o.os === "Pop!_OS (GNOME)")!;
        setResult(res);
        return;
      }
    }

    // Development preference
    if (a.useCase?.includes("dev")) {
      if (a.uiPref?.includes("mac")) {
        const res = osOptions.find(o => o.os === "Ubuntu / Fedora (GNOME)")!;
        setResult(res);
        return;
      } else {
        const res = osOptions.find(o => o.os === "Pop!_OS (GNOME)")!;
        setResult(res);
        return;
      }
    }

    // macOS-like UI preference
    if (a.uiPref?.includes("mac")) {
      const res = osOptions.find(o => o.os === "Ubuntu / Fedora (GNOME)")!;
      setResult(res);
      return;
    }

    // Windows-like UI preference
    if (a.uiPref?.includes("windows")) {
      const res = osOptions.find(o => o.os === "KDE Neon / Kubuntu")!;
      setResult(res);
      return;
    }

    // Default to Windows 11 if eligible, otherwise Linux Mint
    const res = isEligibleForWindows11 
      ? osOptions.find(o => o.os === "Windows 11")! 
      : osOptions.find(o => o.os === "Linux Mint (Cinnamon)")!;
    
    setResult(res);
  };

  const toggleCompare = (name: string) => {
    setSelectedCompare((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const filteredOS = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return osOptions;
    return osOptions.filter(
      (o) =>
        o.os.toLowerCase().includes(q) ||
        o.tags.some((t) => t.toLowerCase().includes(q)) ||
        o.category.toLowerCase().includes(q)
    );
  }, [search]);

  const compareData = osOptions.filter((o) => selectedCompare.includes(o.os));

  // ----------- PDF Export -----------
  const downloadPDF = async () => {
    const jsPDFModule = await import("jspdf");
    const jsPDF = jsPDFModule.default;
    const pdf = new jsPDF({ unit: "pt" });
    const marginX = 40;
    let y = 48;

    pdf.setFontSize(18);
    pdf.text("OS Preporuka", marginX, y);
    y += 22;
    pdf.setFontSize(12);
    const rec = result
      ? `${result.os} — ${result.details}`
      : "Nema odabrane preporuke";
    const recWrapped = pdf.splitTextToSize(rec, 515);
    pdf.text(recWrapped, marginX, y);
    y += recWrapped.length * 14 + 16;

    if (compareData.length >= 2) {
      pdf.setFontSize(16);
      pdf.text("Usporedba odabranih OS-ova", marginX, y);
      y += 20;
      pdf.setFontSize(11);

      compareData.forEach((o, idx) => {
        pdf.setFont("helvetica", "bold");
        pdf.text(`${idx + 1}. ${o.os}`, marginX, y);
        pdf.setFont("helvetica", "normal");
        y += 14;
        const details = `Detalji: ${o.details}`;
        pdf.text(pdf.splitTextToSize(details, 515), marginX, y);
        y += 14 * Math.ceil(details.length / 90);
        pdf.text(`Zahtjevi: ${o.requirements || "-"}`, marginX, y);
        y += 14;
        pdf.text("Prednosti:", marginX, y);
        y += 14;
        o.pros.forEach((p) => {
          pdf.text(`• ${p}`, marginX + 12, y);
          y += 14;
        });
        pdf.text("Nedostaci:", marginX, y);
        y += 14;
        o.cons.forEach((c) => {
          pdf.text(`• ${c}`, marginX + 12, y);
          y += 14;
        });
        y += 8;
        if (y > 760) {
          pdf.addPage();
          y = 48;
        }
      });
    }

    pdf.save("os-preporuka.pdf");
  };

  // Copy result to clipboard
  const copyResult = () => {
    if (!result) return;
    const text = `${result.os}: ${result.details}\nPrednosti: ${result.pros.join(", ")}\nNedostaci: ${result.cons.join(", ")}`;
    navigator.clipboard.writeText(text);
    alert("Preporuka kopirana u clipboard!");
  };

  // ---------------- UI ----------------
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center text-white px-6 mb-4 mt-4">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] bg-center opacity-10" />
        <motion.div
          initial={{ x: -100, y: -100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-30"
        />
        <motion.div
          initial={{ x: 100, y: 100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-500 rounded-full filter blur-3xl opacity-30"
        />
      </div>

      <div className="relative w-full max-w-4xl mx-auto bg-slate-900/70 border border-slate-700 rounded-2xl shadow-xl p-8 backdrop-blur-lg">
        {/* Wizard */}
        {!result ? (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-6"
            >
              {questions[step].text}
            </motion.h2>

            <div className="space-y-3">
              {questions[step].options.map((opt) => {
                const value = answers[questions[step].key];
                const active = Array.isArray(value)
                  ? value.includes(opt.value)
                  : value === opt.value;
                return (
                  <motion.button
                    key={opt.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(opt.value)}
                    className={`w-full px-6 py-3 rounded-lg transition-all text-left border ${
                      active
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 border-transparent"
                        : "bg-slate-800 hover:bg-slate-700 border-slate-700"
                    }`}
                  >
                    {opt.label}
                  </motion.button>
                );
              })}
            </div>

            <div className="flex justify-end mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextStep}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-md hover:shadow-xl"
              >
                {step < questions.length - 1 ? "Dalje" : "Završi"}
              </motion.button>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Result */}
            <div className="text-center">
              <Monitor className="w-16 h-16 mx-auto mb-4 text-blue-400" />
              <h3 className="text-3xl font-bold mb-2">{result.os}</h3>
              <p className="text-slate-300 max-w-2xl mx-auto">{result.details}</p>
              <div className="flex items-center justify-center gap-3 mt-5 flex-wrap">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setResult(null);
                    setStep(0);
                    setAnswers({});
                    setSelectedCompare([]);
                    setSearch("");
                  }}
                  className="px-5 py-3 bg-slate-800 rounded-lg border border-slate-700 hover:bg-slate-700"
                >
                  Ponovno
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyResult}
                  className="px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center gap-2 shadow-md hover:shadow-xl"
                >
                  <Clipboard className="w-4 h-4" /> Kopiraj preporuku
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={downloadPDF}
                  className="px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center gap-2 shadow-md hover:shadow-xl"
                >
                  <Download className="w-4 h-4" /> Preuzmi PDF
                </motion.button>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-700 mt-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Potrebna vam je dodatna pomoć?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:trycaze@proton.me?subject=Potrebno%20drugo%20mišljenje%20u%20izboru%20operativnog%20sustava"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
                >
                  <Mail className="w-4 h-4" /> Trebate drugo mišljenje?
                </motion.a>
                <motion.a
                  href="/services/setup"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
                >
                  <Usb className="w-4 h-4" /> Treba pomoć u instalaciji?
                </motion.a>
              </div>
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 p-2 bg-slate-800 rounded-lg border border-slate-700">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Pretraži OS po nazivu, tipu ili tagu…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none w-full text-slate-200"
              />
            </div>

            {/* List with expand + compare checkboxes */}
            <div className="bg-slate-800/60 rounded-lg border border-slate-700 overflow-hidden">
              {filteredOS.map((o) => (
                <div key={o.os} className="border-b border-slate-700">
                  <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3">
                    <button
                      onClick={() => setExpanded(expanded === o.os ? null : o.os)}
                      className="flex-1 text-left hover:opacity-90"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{o.os}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full border border-slate-600 text-slate-300">
                          {o.category}
                        </span>
                      </div>
                      <p className="text-sm text-slate-300 mt-1 max-w-3xl">{o.details}</p>
                    </button>
                    <div className="flex items-center gap-3">
                      <label className="inline-flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={selectedCompare.includes(o.os)}
                          onChange={() => toggleCompare(o.os)}
                          className="h-4 w-4 rounded border-slate-600 bg-slate-900"
                        />
                        <span>Usporedi</span>
                      </label>
                      <button
                        onClick={() => setExpanded(expanded === o.os ? null : o.os)}
                        className="p-2 rounded hover:bg-slate-700/60"
                        aria-label="Prikaži detalje"
                      >
                        {expanded === o.os ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expanded === o.os && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-5 text-sm text-slate-200"
                      >
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <p className="text-green-400 font-medium mb-1">✔ Prednosti</p>
                            <ul className="list-disc ml-5 space-y-1">
                              {o.pros.map((p) => (
                                <li key={p}>{p}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-red-400 font-medium mb-1">✘ Nedostaci</p>
                            <ul className="list-disc ml-5 space-y-1">
                              {o.cons.map((c) => (
                                <li key={c}>{c}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-blue-300 font-medium mb-1">ℹ Zahtjevi</p>
                            <p>{o.requirements || "—"}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Compare drawer/panel */}
            <AnimatePresence>
              {compareData.length >= 2 && (
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 40, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[80%] bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-2xl shadow-2xl p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <CheckSquare className="w-5 h-5 text-blue-400" />
                      <h4 className="font-semibold">Usporedba ({compareData.length})</h4>
                    </div>
                    <button
                      onClick={() => setSelectedCompare([])}
                      className="p-2 rounded hover:bg-slate-800"
                      aria-label="Očisti odabir"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <div className="grid" style={{ gridTemplateColumns: `repeat(${compareData.length}, minmax(220px,1fr))` }}>
                      {compareData.map((o) => (
                        <div key={o.os} className="border border-slate-700 rounded-xl p-4 m-1 bg-slate-950/50">
                          <div className="font-semibold mb-2">{o.os}</div>
                          <div className="text-xs text-slate-300 mb-3">{o.details}</div>
                          <div className="text-xs">
                            <p className="text-green-400 font-medium mb-1">✔ Prednosti</p>
                            <ul className="list-disc ml-5 space-y-1 mb-2">
                              {o.pros.map((p) => (
                                <li key={p}>{p}</li>
                              ))}
                            </ul>
                            <p className="text-red-400 font-medium mb-1">✘ Nedostaci</p>
                            <ul className="list-disc ml-5 space-y-1 mb-2">
                              {o.cons.map((c) => (
                                <li key={c}>{c}</li>
                              ))}
                            </ul>
                            <p className="text-blue-300 font-medium">Zahtjevi: <span className="text-slate-200">{o.requirements || "—"}</span></p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 mt-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={downloadPDF}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" /> PDF usporedbe
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}