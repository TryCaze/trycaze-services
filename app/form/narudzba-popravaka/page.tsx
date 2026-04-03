'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  User,
  Mail,
  Phone,
  Wrench,
  AlertTriangle,
  Cpu,
  HardDrive,
  Printer,
  Wind,
  Clock,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Laptop,
  Monitor,
  Building,
  Home,
  MapPin,
  MessageSquare,
} from 'lucide-react';
import emailjs from "emailjs-com";

// Type definitions
type FormValues = {
  ime: string;
  email: string;
  telefon: string;
  napomena: string;
  selectedServices: string[];
  deviceType: string;
  deviceBrand: string;
  deviceModel: string;
  problemDescription: string;
  purchaseDate: string;
  warranty: string;
  serviceLocation: string;
  urgency: string;
  dataBackup: string;
  deviceAccessibility: string;
};

// Service categories
const SERVICE_CATEGORIES = [
  {
    id: 'diagnostics',
    name: 'Dijagnostika',
    description: 'Detaljna hardverska i softverska dijagnostika za precizno otkrivanje kvara',
    icon: <AlertTriangle className="size-5" />,
    estimatedTime: '1-3 sata',
    basePrice: 'od 30€'
  },
  {
    id: 'hardware_repairs',
    name: 'Hardverski popravci',
    description: 'Zamjena neispravnih komponenti poput RAM-a, SSD-a, napajanja i ventilatora',
    icon: <Cpu className="size-5" />,
    estimatedTime: '1-2 dana',
    basePrice: 'od 50€'
  },
  {
    id: 'software_service',
    name: 'Softverski servis',
    description: 'Rješavanje softverskih problema, reinstalacije sustava i čišćenje zlonamjernih programa',
    icon: <HardDrive className="size-5" />,
    estimatedTime: '2-5 sati',
    basePrice: 'od 40€'
  },
  {
    id: 'printer_service',
    name: 'Servis printera',
    description: 'Popravak i održavanje printera i ostale opreme',
    icon: <Printer className="size-5" />,
    estimatedTime: '1-3 dana',
    basePrice: 'od 40€'
  },
  {
    id: 'cleaning_maintenance',
    name: 'Čišćenje i održavanje',
    description: 'Redovno čišćenje i održavanje za optimalne performanse',
    icon: <Wind className="size-5" />,
    estimatedTime: '1-2 sata',
    basePrice: 'od 30€'
  },
  {
    id: 'express_service',
    name: 'Ekspres servis',
    description: 'Hitni popravci s prioritetnim rješavanjem',
    icon: <Clock className="size-5" />,
    estimatedTime: '24-48 sati',
    basePrice: 'od 80€'
  }
];

// Device types
const DEVICE_TYPES = [
  { value: 'desktop', label: 'Desktop računalo', icon: <Monitor className="size-4" /> },
  { value: 'laptop', label: 'Prijenosno računalo', icon: <Laptop className="size-4" /> },
  { value: 'printer', label: 'Printer', icon: <Printer className="size-4" /> },
  { value: 'monitor', label: 'Monitor', icon: <Monitor className="size-4" /> },
  { value: 'all_in_one', label: 'All-in-One PC', icon: <Monitor className="size-4" /> },
  { value: 'other', label: 'Ostalo', icon: <Wrench className="size-4" /> },
];

// Common brands
const DEVICE_BRANDS = [
  'Acer', 'Apple', 'Asus', 'Brother', 'Canon', 'Dell', 'Epson', 'HP', 'Lenovo', 'Logitech', 'Microsoft', 'MSI', 'Razer', 'Samsung', 'Toshiba', 'Xerox', 'Ostalo'
];

// Warranty status
const WARRANTY_STATUS = [
  'U garanciji (s računom)',
  'U garanciji (bez računa)',
  'Van garancije',
  'Nisam siguran/na'
];

// Service locations
const SERVICE_LOCATIONS = [
  'U našoj radionici',
  'Na vašoj adresi (kućni posjet)',
  'U vašem poslovnom prostoru',
  'Udaljeno (TeamViewer/AnyDesk)'
];

// Urgency levels
const URGENCY_LEVELS = [
  { value: 'low', label: 'Nije hitno (1-2 tjedna)' },
  { value: 'medium', label: 'Normalno (3-7 dana)' },
  { value: 'high', label: 'Hitno (24-48 sati)' },
  { value: 'express', label: 'Ekspres servis (do 24 sata)' }
];

// Data backup options
const DATA_BACKUP_OPTIONS = [
  'Da, potrebna je sigurnosna kopija podataka',
  'Ne, podaci nisu bitni ili već imam backup',
  'Samo važni podaci (dokumenti, fotografije)',
  'Potrebna konsultacija o backupu'
];

// Device accessibility
const DEVICE_ACCESSIBILITY = [
  'Računalo/printer je dostupan odmah',
  'Računalo/printer je u upotrebi, treba dogovoriti termin',
  'Računalo/printer nije dostupan trenutno',
  'Ostalo'
];

export default function RepairServiceForm() {
  const [formData, setFormData] = useState<FormValues>({
    ime: '',
    email: '',
    telefon: '',
    napomena: '',
    selectedServices: [],
    deviceType: '',
    deviceBrand: '',
    deviceModel: '',
    problemDescription: '',
    purchaseDate: '',
    warranty: '',
    serviceLocation: '',
    urgency: 'medium',
    dataBackup: '',
    deviceAccessibility: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => {
      const isSelected = prev.selectedServices.includes(serviceId);
      const updatedServices = isSelected
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId];

      return {
        ...prev,
        selectedServices: updatedServices
      };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate EmailJS credentials
    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
      alert('EmailJS nije konfiguriran. Molimo kontaktirajte administratora.');
      return;
    }
    
    setIsSubmitting(true);

    const selectedServiceNames = SERVICE_CATEGORIES
      .filter(cat => formData.selectedServices.includes(cat.id))
      .map(cat => cat.name);

    const selectedServiceDetails = SERVICE_CATEGORIES
      .filter(cat => formData.selectedServices.includes(cat.id))
      .map(cat => `${cat.name} (${cat.estimatedTime}, ${cat.basePrice})`);

    // Prepare admin payload
    const adminPayload = {
      service_type: "REPAIR_SERVICE",
      service_name: "Zahtjev za servisiranjem",
      name: formData.ime,
      email: formData.email,
      phone: formData.telefon || "—",
      
      order_summary: `
OSLOVNI PODACI:
• Ime: ${formData.ime}
• Email: ${formData.email}
• Telefon: ${formData.telefon}
• Hitnost: ${URGENCY_LEVELS.find(u => u.value === formData.urgency)?.label || formData.urgency}

INFORMACIJE O UREĐAJU:
• Vrsta uređaja: ${DEVICE_TYPES.find(d => d.value === formData.deviceType)?.label || formData.deviceType || 'Nije navedeno'}
• Proizvođač: ${formData.deviceBrand || 'Nije navedeno'}
• Model: ${formData.deviceModel || 'Nije navedeno'}
• Datum kupnje: ${formData.purchaseDate || 'Nije navedeno'}
• Garancija: ${formData.warranty || 'Nije navedeno'}

ODABRANE USLUGE:
${selectedServiceDetails.map(service => `• ${service}`).join('\n')}

DETALJI PROBLEMA:
${formData.problemDescription || 'Nije opisan problem'}

DODATNE INFORMACIJE:
• Lokacija servisa: ${formData.serviceLocation || 'Nije odabrano'}
• Sigurnosna kopija: ${formData.dataBackup || 'Nije navedeno'}
• Dostupnost uređaja: ${formData.deviceAccessibility || 'Nije navedeno'}

NAPOMENE:
${formData.napomena || 'Nema napomena'}

Zahtjev primljen: ${new Date().toLocaleString('hr-HR')}`
    };

    try {
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
          selectedServices: selectedServiceNames.join(', '),
          serviceType: 'servisiranje'
        }
      );

      setSubmitted(true);
      // Reset form
      setFormData({
        ime: '',
        email: '',
        telefon: '',
        napomena: '',
        selectedServices: [],
        deviceType: '',
        deviceBrand: '',
        deviceModel: '',
        problemDescription: '',
        purchaseDate: '',
        warranty: '',
        serviceLocation: '',
        urgency: 'medium',
        dataBackup: '',
        deviceAccessibility: ''
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
              Vaš zahtjev za servis je uspješno poslan. Kontaktirat ćemo vas unutar 24 sata s detaljnom dijagnozom i ponudom.
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
            Zahtjev za <span className="text-secondary">servisiranjem</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white">
            Opišite problem s vašim uređajem, odaberite potrebne usluge i dobijte besplatnu procjenu popravka.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-secondary bg-primary/50 p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                    <User className="size-6 text-secondary" />
                    Vaši kontakt podaci
                  </h2>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
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
                        className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white placeholder:text-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Vaše puno ime"
                      />
                    </div>

                    <div>
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
                        className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white placeholder:text-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="vas.email@primjer.com"
                      />
                    </div>

                    <div>
                      <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                        <Phone className="size-4 text-secondary" />
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        name="telefon"
                        required
                        value={formData.telefon}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white placeholder:text-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="+385 9X XXX XXX"
                      />
                    </div>

                    <div>
                      <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                        <Clock className="size-4 text-secondary" />
                        Hitnost servisa
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
                    </div>
                  </div>
                </div>

                {/* Device Information */}
                <div>
                  <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                    <Laptop className="size-6 text-secondary" />
                    Informacije o uređaju
                  </h2>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                        Vrsta uređaja *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {DEVICE_TYPES.map(device => (
                          <button
                            key={device.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, deviceType: device.value }))}
                            className={`flex items-center justify-center gap-2 rounded-lg py-3 ${formData.deviceType === device.value
                              ? 'bg-secondary text-white'
                              : 'bg-primary/50 text-white/70 hover:bg-primary/70'
                              }`}
                          >
                            {device.icon}
                            <span className="text-sm">{device.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                        <Building className="size-4" />
                        Proizvođač
                      </label>
                      <select
                        name="deviceBrand"
                        value={formData.deviceBrand}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        <option value="">Odaberite proizvođača</option>
                        {DEVICE_BRANDS.map(brand => (
                          <option key={brand} value={brand}>{brand}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-medium text-white">
                        Model uređaja
                      </label>
                      <input
                        type="text"
                        name="deviceModel"
                        value={formData.deviceModel}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white placeholder:text-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="npr. HP Pavilion 15, Dell XPS 13, iPhone 12..."
                      />
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-medium text-white">
                        Datum kupnje (približno)
                      </label>
                      <input
                        type="text"
                        name="purchaseDate"
                        value={formData.purchaseDate}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white placeholder:text-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="npr. 2022, 6 mjeseci, 2 godine..."
                      />
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-medium text-white">
                        Status garancije(s nama)
                      </label>
                      <select
                        name="warranty"
                        value={formData.warranty}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        <option value="">Odaberite status garancije</option>
                        {WARRANTY_STATUS.map(status => (
                          <option key={status} value={status}>{status}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                        <MapPin className="size-4" />
                        Lokacija servisa *
                      </label>
                      <select
                        name="serviceLocation"
                        required
                        value={formData.serviceLocation}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        <option value="">Odaberite lokaciju servisa</option>
                        {SERVICE_LOCATIONS.map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Problem Description */}
                <div>
                  <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                    <AlertTriangle className="size-6 text-secondary" />
                    Opis problema
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                        <MessageSquare className="size-4 text-secondary" />
                        Detaljan opis problema *
                      </label>
                      <textarea
                        name="problemDescription"
                        required
                        rows={4}
                        value={formData.problemDescription}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white placeholder:text-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Opišite što se točno događa s vašim uređajem. Kada se problem pojavio? Koje su simptome primijetili?"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-3 block text-sm font-medium text-white">
                          Sigurnosna kopija podataka
                        </label>
                        <select
                          name="dataBackup"
                          value={formData.dataBackup}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                        >
                          <option value="">Odaberite opciju backupa</option>
                          {DATA_BACKUP_OPTIONS.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="mb-3 block text-sm font-medium text-white">
                          Dostupnost uređaja
                        </label>
                        <select
                          name="deviceAccessibility"
                          value={formData.deviceAccessibility}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                        >
                          <option value="">Kada je uređaj dostupan?</option>
                          {DEVICE_ACCESSIBILITY.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                    <Wrench className="size-6 text-secondary" />
                    Odaberite potrebne usluge
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
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold text-white">{service.name}</h3>
                                <p className="mt-1 text-sm text-white/70">{service.description}</p>
                              </div>
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
                            <div className="mt-3 flex justify-between text-xs text-white/50">
                              <span>{service.estimatedTime}</span>
                              <span>{service.basePrice}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="mb-3 block text-sm font-medium text-white">
                    Dodatne napomene ili posebni zahtjevi
                  </label>
                  <textarea
                    name="napomena"
                    value={formData.napomena}
                    onChange={handleChange}
                    rows={3}
                    className="w-full rounded-xl border border-secondary bg-primary/50 p-4 text-white placeholder:text-white/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Ako imate posebne zahtjeve, napomene ili dodatne informacije, napišite ih ovdje..."
                  />
                </div>

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
                      Slanje zahtjeva...
                    </>
                  ) : (
                    <>
                      <Send className="size-5" />
                      Pošaljite zahtjev za servis
                      <ArrowRight className="size-5" />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-sm text-white">
                  Odgovorimo unutar 24 sata • Besplatna dijagnostika • Transparentna cijena
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
                Proces servisiranja
              </h3>
              <div className="space-y-4">
                {[
                    {
                        step: '1',
                        title: 'Kontakt i dijagnostika',
                        desc: 'Opišite problem ili donesite uređaj na besplatnu dijagnostiku.',
                    },
                    {
                        step: '2',
                        title: 'Ponuda i odobrenje',
                        desc: 'Šaljemo vam detaljnu ponudu s cijenom i rokom izrade za odobrenje.',
                    },
                    {
                        step: '3',
                        title: 'Popravak',
                        desc: 'Izvodimo profesionalne popravke koristeći kvalitetne komponente.',
                    },
                    {
                        step: '4',
                        title: 'Testiranje i garancija',
                        desc: 'Testiramo popravak i izdajemo garanciju na izvršene usluge.',
                    },
                    {
                        step: '5',
                        title: 'Predaja uređaja',
                        desc: 'Predajemo uređaj s dokumentacijom i garancijom.',
                    }
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
                Zašto odabrati naš servis?
              </h3>
              <div className="space-y-3">
                {[
                  "✓ Besplatna dijagnostika",
                  "✓ Od 3 do 12 mjeseci garancije na popravak",
                  "✓ Originalni i kvalitetni dijelovi",
                  "✓ Brzi rokovi (od 24 sata)",
                  "✓ Sigurnosna kopija podataka",
                  "✓ Transparentne cijene",
                  "✓ Servis na licu mjesta",
                  "✓ Poslovni popusti"
                ].map((benefit, index) => (
                  <p key={index} className="text-sm text-white">
                    {benefit}
                  </p>
                ))}
              </div>
            </div>

            {/* Price Ranges */}
            <div className="rounded-2xl border border-secondary bg-primary/50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Okvirne cijene
              </h3>
              <div className="space-y-3">
                {[
                  { service: "Dijagnostika", price: "30€" },
                  { service: "Čišćenje + termalna pasta", price: "40€" },
                  { service: "Reinstalacija OS-a", price: "40€" },
                  { service: "Uklanjanje virusa", price: "60€" },
                  { service: "Zamjena RAM-a", price: "60€ + dijelovi" },
                  { service: "Popravak napajanja", price: "60€ + dijelovi" },
                  { service: "Ekspres servis", price: "+50% na cijenu" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-secondary/30 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-white">{item.service}</span>
                    <span className="text-sm font-medium text-secondary">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-white/60">
                * Cijene su okvirne, točna cijena ovisi o kompleksnosti popravka
              </p>
            </div>

            {/* Contact Info */}
            <div className="rounded-2xl border border-secondary bg-secondary/10 p-6">
              <h3 className="mb-4 text-xl font-semibold text-secondary">
                Hitni popravci?
              </h3>
              <p className="mb-4 text-white">
                Za hitne popravke kontaktirajte nas direktno putem emaila.
              </p>
              <div className="space-y-3 text-sm text-white">
                <a
                  href="mailto:trycaze@proton.me?subject=Hitni%20servis&body=Pozdrav%2C%0A%0APotreban mi je hitni servis uređaja.%20Molim%20vas%20da%20me%20kontaktirate%20što%20prije.%0A%0AHvala!"
                  className="block rounded-lg bg-secondary px-4 py-3 text-center font-medium text-white hover:bg-secondary-dark transition-colors"
                >
                  trycaze@proton.me
                </a>
                <p className="text-center text-white/80">
                  <Clock className="inline size-3" /> Odgovor unutar 2 sata za hitne slučajeve
                </p>
              </div>
            </div>

            {/* Common Problems */}
            <div className="rounded-2xl border border-secondary bg-primary/50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Najčešći problemi
              </h3>
              <div className="space-y-2">
                {[
                  "Računalo se ne pali",
                  "Spore performanse",
                  "Plavi ekran (Blue Screen)",
                  "Pregrijavanje",
                  "Virusi i malware",
                  "Problemi s internetom",
                  "Ne radi printer",
                  "Zaslon pucao/ogreban"
                ].map((problem, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <AlertTriangle className="size-3 text-secondary" />
                    <span className="text-sm text-white">{problem}</span>
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