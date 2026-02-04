'use client';
import { 
  Laptop2, 
  Briefcase, 
  LifeBuoy, 
  Settings, 
  Network, 
  Code,
  ArrowRight,
  PrinterCheck
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    id: "business",
    title: "Poslovne usluge",
    subtitle: "Rješenja za poduzeća",
    description: "Prilagođena rješenja za poslovne potrebe Microsoft 365 alata",
    icon: Briefcase,
    link: "/usluge/poslovne",
    cta: "Saznajte više",
  },
  {
    id: "it-support",
    title: "IT podrška",
    subtitle: "Tehnička podrška za IT",
    description: "Tehnička podrška za IT infrastrukturu i korisnike",
    icon: LifeBuoy,
    link: "/usluge/it-podrska",
    cta: "Saznajte više",
  },
  {
    id: "repair",
    title: "Popravci",
    subtitle: "Popravci i održavanje",
    description: "Popravci i održavanje računalnih sustava",
    icon: Settings,
    link: "/usluge/popravci",
    cta: "Saznajte više",
  },
  {
    id: "setup",
    title: "Postavljanje",
    subtitle: "Instalacija i konfiguracija",
    description: "Postavljanje i konfiguracija računalnih sustava",
    icon: Laptop2,
    link: "/usluge/sastavljanje-racunala",
    cta: "Saznajte više",
  },
  {
    id: "3d-printing",
    title: "3D Printanje",
    subtitle: "Komisije za 3D printanje",
    description: "Izrada 3D modela i printanje u fizičke objekte",
    icon: PrinterCheck,
    link: "/usluge/3dprintanje",
    cta: "Saznajte više",
  },
  {
    id: "web-dev",
    title: "Razvoj web aplikacija",
    subtitle: "Razvoj prilagođenih web aplikacija",
    description: "Razvoj prilagođenih web aplikacija i rješenja",
    icon: Code,
    link: "/usluge/izrada-web-stranica",
    cta: "Saznajte više",
  }
] as const;

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" ref={ref} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-white" />
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            <span className="text-white">
                Usluge
            </span>
          </h2>
        </motion.div>

        {/* Services grid */}
        <motion.div 
          className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={inView ? "visible" : {}}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative h-full overflow-hidden rounded-xl p-0.5 shadow-lg"
            >
              <div className="relative h-full bg-primary rounded-[11px] p-6 flex flex-col">
                {/* Header with icon */}
                <div className="flex justify-between items-start mb-4">
                  <div className="pr-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="mt-1 text-sm text-gray-200">{service.subtitle}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-white flex-grow mb-4">{service.description}</p>
                
                {/* Learn more button */}
                <motion.div 
                  className="pt-4 mt-auto border-t border-white hover:border-gray-200"
                >
                  <motion.a
                    href={service.link}
                    className="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary-dark"
                    whileHover={{ x: 5 }}
                  >
                    {service.cta} <ArrowRight className="ml-1 w-4 h-4" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}