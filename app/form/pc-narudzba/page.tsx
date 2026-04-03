'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  User,
  Mail,
  Phone,
  Cpu,
  ArrowRight,
  CheckCircle,
  Laptop,
  Shield,
  Wifi,
  LifeBuoy,
  Settings,
  Zap,
  FileText,
  Home,
  Clock,
  Briefcase,
  Gamepad2,
  Palette,
  Video,
  Cloud,
} from 'lucide-react';
import { INVENTORY, PartCategory } from '@/data/inventory';
import { PartSelect } from './components/PartSelect';
import emailjs from "emailjs-com";

// Type definitions
type FormValues = {
  ime: string;
  email: string;
  telefon: string;
  napomena: string;
  selectedServices: string[];
  pcBuild: {
    include: boolean;
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
    case: string;
    psu: string;
  };
  osType: string;
  computerType: string;
  usageType: string;
  serviceLocation: string;
  urgency: string;
};

// Service categories matching your list
const SERVICE_CATEGORIES = [
  {
    id: 'os_software',
    name: 'Instalacija OS i softvera',
    description: 'Kompletna instalacija operativnih sustava i potrebnih programa',
    icon: <Settings className="size-5" />,
  },
  {
    id: 'hardware',
    name: 'Montaža hardvera',
    description: 'Instalacija fizičkih komponenti i priprema uređaja za rad',
    icon: <Cpu className="size-5" />,
  },
  {
    id: 'optimization',
    name: 'Optimizacija sustava',
    description: 'Postavljanje softvera i optimizacija prema vrsti korištenja',
    icon: <Zap className="size-5" />,
  },
  {
    id: 'security',
    name: 'Sigurnosne postavke',
    description: 'Konfiguracija operativnih sustava i sigurnosnih postavki',
    icon: <Shield className="size-5" />,
  },
  {
    id: 'network',
    name: 'Mrežne usluge',
    description: 'Povezivanje s mrežnim servisima i konfiguracija',
    icon: <Wifi className="size-5" />,
  },
  {
    id: 'support',
    name: 'Korisnička podrška',
    description: 'Edukacija i podrška za krajnje korisnike',
    icon: <LifeBuoy className="size-5" />,
  }
];

// Usage types for optimization
const USAGE_TYPES = [
  { value: 'gaming', label: 'Gaming', icon: <Gamepad2 className="size-4" /> },
  { value: 'office', label: 'Uredski rad', icon: <Briefcase className="size-4" /> },
  { value: 'creative', label: 'Kreativni rad', icon: <Palette className="size-4" /> },
  { value: 'streaming', label: 'Streaming/Video', icon: <Video className="size-4" /> },
  { value: 'general', label: 'Opća upotreba', icon: <Laptop className="size-4" /> },
  { value: 'other', label: 'Ostalo', icon: <Cloud className="size-4" /> },
];

const OS_TYPES = ['Windows', 'Linux', 'macOS', 'Nije potrebno', 'Nisam siguran'];
const COMPUTER_TYPES = ['Desktop', 'Prijenosno računalo', 'iMac/MacBook', 'Nisam siguran'];
const LOCATIONS = ['U vašem domu/ured-u', 'U našoj radionici', 'Udaljeno (TeamViewer/AnyDesk)'];
const URGENCY_LEVELS = [
  { value: 'low', label: 'Nije hitno (1-2 tjedna)' },
  { value: 'medium', label: 'Uskoro (3-7 dana)' },
  { value: 'high', label: 'Hitno (24-48 sati)' },
  { value: 'urgent', label: 'Vrlo hitno (do 24 sata)' },
];

export default function ServiceRequestForm() {
  const [formData, setFormData] = useState<FormValues>({
    ime: '',
    email: '',
    telefon: '',
    napomena: '',
    selectedServices: [],
    pcBuild: {
      include: false,
      cpu: '',
      gpu: '',
      ram: '',
      storage: '',
      case: '',
      psu: '',
    },
    osType: '',
    computerType: '',
    usageType: '',
    serviceLocation: '',
    urgency: 'medium',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => {
      const isSelected = prev.selectedServices.includes(serviceId);
      const updatedServices = isSelected
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId];
      
      const updatedPcBuild = serviceId === 'hardware'
        ? { ...prev.pcBuild, include: !isSelected }
        : prev.pcBuild;

      return {
        ...prev,
        selectedServices: updatedServices,
        pcBuild: updatedPcBuild
      };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    
    if (name.startsWith('pcBuild.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        pcBuild: {
          ...prev.pcBuild,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
      alert('EmailJS nije konfiguriran. Molimo kontaktirajte administratora.');
      return;
    }
    
    setIsSubmitting(true);

    const selectedServiceNames = SERVICE_CATEGORIES
      .filter(cat => formData.selectedServices.includes(cat.id))
      .map(cat => cat.name);

    const adminPayload = {
      service_type: "SERVICE_REQUEST",
      service_name: "Zahtjev za uslugom postavljanja",
      name: formData.ime,
      email: formData.email,
      phone: formData.telefon || "—",
      
      order_summary: `
OSLOVNI PODACI:
• Ime: ${formData.ime}
• Email: ${formData.email}
• Telefon: ${formData.telefon}
• Hitnost: ${URGENCY_LEVELS.find(u => u.value === formData.urgency)?.label || formData.urgency}

ODABRANE USLUGE:
${selectedServiceNames.map(name => `• ${name}`).join('\n')}

DETALJI ZAHTJEVA:
• OS: ${formData.osType || 'Nije navedeno'}
• Vrsta uređaja: ${formData.computerType || 'Nije navedeno'}
• Namjena: ${USAGE_TYPES.find(u => u.value === formData.usageType)?.label || formData.usageType || 'Nije navedeno'}
• Lokacija: ${formData.serviceLocation || 'Nije navedeno'}

${formData.pcBuild.include ? `PC KONFIGURACIJA:
• CPU: ${formData.pcBuild.cpu || 'Nije odabrano'}
• GPU: ${formData.pcBuild.gpu || 'Nije odabrano'}
• RAM: ${formData.pcBuild.ram || 'Nije odabrano'}
• Storage: ${formData.pcBuild.storage || 'Nije odabrano'}
• Kućište: ${formData.pcBuild.case || 'Nije odabrano'}
• Napajanje: ${formData.pcBuild.psu || 'Nije odabrano'}` : ''}

NAPOMENE:
${formData.napomena || 'Nema napomena'}

Zahtjev primljen: ${new Date().toLocaleString('hr-HR')}`
    };

    try {
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
        throw new Error('EmailJS nije konfiguriran.');
      }

      // Send admin notification
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE!,
        adminPayload
      );

      // Send user confirmation
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE!,
        {
          name: formData.ime,
          email: formData.email,
          selectedServices: selectedServiceNames.join(', ')
        }
      );

      setSubmitted(true);
      setFormData({
        ime: '',
        email: '',
        telefon: '',
        napomena: '',
        selectedServices: [],
        pcBuild: {
          include: false,
          cpu: '',
          gpu: '',
          ram: '',
          storage: '',
          case: '',
          psu: '',
        },
        osType: '',
        computerType: '',
        usageType: '',
        serviceLocation: '',
        urgency: 'medium',
      });

      setTimeout(() => setSubmitted(false), 5000);

    } catch (err: any) {
      console.error('EmailJS error details:', err);
      alert(`Došlo je do greške pri slanju zahtjeva: ${err.text || err.message || 'Nepoznata greška'}`);
    } finally {
      setIsSubmitting(false);
    }
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
              Vaš zahtjev je uspješno poslan. Kontaktirat ćemo vas unutar 24 sata s detaljnijom ponudom.
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

  const getParts = (cat: PartCategory) => INVENTORY[cat];

  return (
    <div className="mt-10 min-h-screen py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Zahtjev za <span className="text-secondary">uslugom postavljanja</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white">
            Odaberite usluge koje su vam potrebne, unesite svoje podatke i mi ćemo vam poslati ponudu.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="rounded-2xl border border-secondary bg-primary/30 p-6">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
              <User className="size-6 text-secondary" />
              Vaši podaci
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <motion.div whileFocus="focus" variants={{ focus: { scale: 1.02 } }}>
                <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                  Ime i prezime *
                </label>
                <input
                  type="text"
                  name="ime"
                  required
                  value={formData.ime}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white placeholder:text-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Vaše puno ime"
                />
              </motion.div>

              <motion.div whileFocus="focus" variants={{ focus: { scale: 1.02 } }}>
                <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                  <Mail className="size-4" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white placeholder:text-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="vas@email.com"
                />
              </motion.div>

              <motion.div whileFocus="focus" variants={{ focus: { scale: 1.02 } }}>
                <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                  <Phone className="size-4" />
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="telefon"
                  required
                  value={formData.telefon}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white placeholder:text-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="+385 9x xxx xxx"
                />
              </motion.div>

              <motion.div whileFocus="focus" variants={{ focus: { scale: 1.02 } }}>
                <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                  <Clock className="size-4" />
                  Hitnost
                </label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  {URGENCY_LEVELS.map(level => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>
          </div>

          {/* Service Selection */}
          <div className="rounded-2xl border border-secondary bg-primary/30 p-6">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
              <Settings className="size-6 text-secondary" />
              Odaberite usluge koje su vam potrebne
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {SERVICE_CATEGORIES.map(service => (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${formData.selectedServices.includes(service.id)
                    ? 'border-secondary bg-secondary/10'
                    : 'border-secondary/30 hover:border-secondary/50'
                    }`}
                  onClick={() => handleServiceToggle(service.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`rounded-lg p-2 ${formData.selectedServices.includes(service.id) ? 'bg-secondary' : 'bg-secondary/20'}`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-white">{service.name}</h3>
                        <div className={`size-5 rounded-full border-2 ${formData.selectedServices.includes(service.id)
                          ? 'border-secondary bg-secondary'
                          : 'border-secondary/50'
                          }`}>
                          {formData.selectedServices.includes(service.id) && (
                            <div className="flex h-full items-center justify-center">
                              <div className="size-2 rounded-full bg-white" />
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-white/70">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="rounded-2xl border border-secondary bg-primary/30 p-6">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
              <FileText className="size-6 text-secondary" />
              Dodatne informacije
            </h2>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* OS Type */}
              <div>
                <label className="mb-3 block text-sm font-medium text-white">
                  Operativni sustav
                </label>
                <select
                  name="osType"
                  value={formData.osType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option value="">Odaberite OS</option>
                  {OS_TYPES.map(os => (
                    <option key={os} value={os}>{os}</option>
                  ))}
                </select>
              </div>

              {/* Computer Type */}
              <div>
                <label className="mb-3 block text-sm font-medium text-white">
                  Vrsta računala
                </label>
                <select
                  name="computerType"
                  value={formData.computerType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option value="">Odaberite vrstu</option>
                  {COMPUTER_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Usage Type */}
              <div>
                <label className="mb-3 block text-sm font-medium text-white">
                  Primarna namjena
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {USAGE_TYPES.map(usage => (
                    <button
                      key={usage.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, usageType: usage.value }))}
                      className={`flex items-center justify-center gap-2 rounded-lg py-3 ${formData.usageType === usage.value
                        ? 'bg-secondary text-white'
                        : 'bg-primary/50 text-white/70 hover:bg-primary/70'
                        }`}
                    >
                      {usage.icon}
                      <span className="text-sm">{usage.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Location */}
              <div>
                <label className="mb-3 block text-sm font-medium text-white">
                  <Home className="inline size-4" /> Lokacija servisa
                </label>
                <select
                  name="serviceLocation"
                  value={formData.serviceLocation}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option value="">Odaberite gdje želite servis</option>
                  {LOCATIONS.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Notes */}
            <div className="mt-6">
              <label className="mb-3 block text-sm font-medium text-white">
                Dodatne napomene
              </label>
              <textarea
                name="napomena"
                value={formData.napomena}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white placeholder:text-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Opišite vaše specifične zahtjeve, probleme koje imate ili bilo što drugo što bi nam moglo pomoći..."
              />
            </div>
          </div>

          {/* PC Build Section (only shows if hardware service is selected) */}
          {formData.pcBuild.include && (
            <div className="rounded-2xl border border-secondary bg-primary/30 p-6">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                <Cpu className="size-6 text-secondary" />
                Konfiguracija PC komponenti
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <PartSelect
                  label="CPU"
                  name="pcBuild.cpu"
                  items={getParts('cpu')}
                  value={formData.pcBuild.cpu}
                  onChange={handleChange}
                />
                <PartSelect
                  label="GPU"
                  name="pcBuild.gpu"
                  items={getParts('gpu')}
                  value={formData.pcBuild.gpu}
                  onChange={handleChange}
                />
                <PartSelect
                  label="RAM"
                  name="pcBuild.ram"
                  items={getParts('ram')}
                  value={formData.pcBuild.ram}
                  onChange={handleChange}
                />
                <PartSelect
                  label="Storage"
                  name="pcBuild.storage"
                  items={getParts('storage')}
                  value={formData.pcBuild.storage}
                  onChange={handleChange}
                />
                <PartSelect
                  label="Kućište"
                  name="pcBuild.case"
                  items={getParts('case')}
                  value={formData.pcBuild.case}
                  onChange={handleChange}
                />
                <PartSelect
                  label="Napajanje"
                  name="pcBuild.psu"
                  items={getParts('psu')}
                  value={formData.pcBuild.psu}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting || formData.selectedServices.length === 0}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-secondary px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-secondary-dark focus:outline-none focus:ring-4 focus:ring-secondary/50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Slanje zahtjeva…
              </>
            ) : (
              <>
                <Send className="size-5" />
                Pošalji zahtjev za ponudu
                <ArrowRight className="size-5" />
              </>
            )}
          </motion.button>
          
          <p className="text-center text-sm text-white/60">
            Kontaktirat ćemo vas unutar 24 sata s detaljnom ponudom i terminom.
          </p>
        </form>
      </div>
    </div>
  );
}