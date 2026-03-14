'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ArrowRight, Briefcase, Globe, PrinterCheck, Server, Wrench } from "lucide-react";
import { FaMicrosoft, FaGoogleDrive, FaDiscord, FaCloudsmith, FaApple, FaLinux, FaBlender } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiMinutemailer, SiAnydesk, SiHostinger, SiShopify, SiReact, SiCreality } from "react-icons/si";
import { BsWordpress } from "react-icons/bs";
import Link from "next/link";

const serviceTechnologies = [
  {
    id: 'business',
    icon: Briefcase,
    name: 'Poslovna rješenja',
    tools: [
      { 
        name: 'Microsoft 365', 
        icon: FaMicrosoft,
        shortDescription: 'Uredski paket',
        longDescription: 'Microsoft 365 je paket aplikacija za produktivnost i poslovnu suradnju, uključujući Word, Excel, PowerPoint, Outlook, Access i Teams.',
        link: 'https://m365.cloud.microsoft', 
      },
      { 
        name: 'Google Workspace', 
        icon: FaGoogleDrive,
        shortDescription: 'Alati za suradnju u oblaku',
        longDescription: 'Google Workspace je skup alata u oblaku poput Gmaila, Dokumenata, Drivea i Meeta za produktivnost i suradnju.',
        link: 'https://workspace.google.com/products/drive/', 
      },
      { 
        name: 'Discord', 
        icon: FaDiscord,
        shortDescription: 'Platforma za komunikaciju',
        longDescription: 'Discord je platforma za komunikaciju idealna za timsku suradnju, nudi glasovnu, video i tekstualnu komunikaciju.',
        link: 'https://discord.com/', 
      }
    ]
  },
  {
    id: 'it-support',
    icon: FaCloudsmith,
    name: 'IT podrška',
    tools: [
      { 
        name: 'Korisnička podrška', 
        icon: RiCustomerService2Fill,
        shortDescription: 'Hitna telefonska podrška',
        longDescription: 'Hitna telefonska podrška za trenutnu pomoć kod IT problema, osigurava brzo rješavanje i minimalan zastoj.',
        link: '/usluge/it-podrska',  
      },
      { 
        name: 'AnyDesk', 
        icon: SiAnydesk,
        shortDescription: 'Alat za udaljenu radnu površinu',
        longDescription: 'Lagana aplikacija za udaljenu radnu površinu koja omogućuje brze veze s niskom latencijom za IT podršku i rad na daljinu.',
        link: 'https://anydesk.com/hr',  
      },
      { 
        name: 'Podrška putem e-pošte', 
        icon: SiMinutemailer,
        shortDescription: 'Podrška putem e-pošte',
        longDescription: 'Podrška putem e-pošte za nehitne IT upite i pomoć.',
        link: '/usluge/it-podrska',  
      }
    ]
  },
  {
    id: 'repair',
    icon: Wrench,
    name: 'Usluge popravka',
    tools: [
      { 
        name: 'Windows OS', 
        icon: FaMicrosoft,
        shortDescription: 'Dijagnostika za Windows',
        longDescription: 'Kompletan set alata za dijagnostiku i popravak Windows operativnih sustava uključujući vraćanje sustava, čišćenje diska i nadzor performansi.',
        link: '/usluge/popravci',  
      },
      { 
        name: 'Linux alati', 
        icon: FaLinux,
        shortDescription: 'Linux alati za popravak',
        longDescription: 'Snažni open-source alati za oporavak sustava, dijagnostiku hardvera i optimizaciju performansi na Linux distribucijama.',
        link: '/usluge/popravci',  
      },
      { 
        name: 'macOS Recovery', 
        icon: FaApple,
        shortDescription: 'Mac sustav za oporavak',
        longDescription: 'Appleov ugrađeni sustav za oporavak s hardverskim testovima, alatom za disk i mogućnostima ponovne instalacije macOS-a za rješavanje problema.',
        link: '/usluge/popravci',  
      }
    ]
  },
  {
    id: '3dprinting',
    icon: PrinterCheck,
    name: '3D Printanje',
    tools: [
      { 
        name: 'Cura Slicer', 
        icon: PrinterCheck,
        shortDescription: 'Cura softver za rezanje',
        longDescription: 'Cura je popularni softver za rezanje 3D modela koji omogućuje korisnicima da pripreme svoje modele za 3D ispis.',
        link: 'https://ultimaker.com/software/ultimaker-cura/',  
      },
      { 
        name: 'Blender', 
        icon: FaBlender,
        shortDescription: '3D modeliranje',
        longDescription: 'Blender je alat za precizno 3D modeliranje koji se koristi za izradu i uređivanje 3D modela prije ispisa. Nudi širok spektar značajki za dizajn.',
        link: 'https://www.blender.org/',  
      },
      { 
        name: 'Creality Printer', 
        icon: SiCreality,
        shortDescription: '3D printer',
        longDescription: 'Koristimo Creality 3D printere za visokokvalitetno 3D printanje s preciznošću i pouzdanošću, idealne za prototipove i gotove proizvode.',
        link: 'https://www.creality.com/',  
      }
    ]
  },
  {
    id: 'web',
    icon: Globe,
    name: 'Web razvoj',
    tools: [
      { 
        name: 'Hostinger', 
        icon: SiHostinger,
        shortDescription: 'Platforma za web hosting',
        longDescription: 'Povoljan web hosting s brzim performansama, jednostavnim alatom za izradu web stranica i 24/7 podrškom za male i srednje tvrtke.',
        link: 'https://www.hostinger.com/',  
      },
      { 
        name: 'WordPress', 
        icon: BsWordpress,
        shortDescription: 'E-commerce sustav',
        longDescription: 'WordPress je popularan sustav za upravljanje sadržajem (CMS) koji omogućuje jednostavno stvaranje i upravljanje e-trgovinama.',
        link: 'https://wordpress.com/',  
      },
      { 
        name: 'React', 
        icon: SiReact,
        shortDescription: 'Frontend biblioteka',
        longDescription: 'JavaScript biblioteka za izradu interaktivnih korisničkih sučelja s višekratnim komponentama.',
        link: 'https://react.dev/',  
      }
    ]
  }
];

export default function TechnologySection() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <section id="technology" ref={ref} className="relative py-16 sm:py-24 lg:py-32 overflow-visible">
      {/* Keeping your original background elements exactly as they were */}
      <div className="absolute inset-x-0 top-0 h-px bg-white" />
      <div className="absolute inset-0 opacity-5" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-10" />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-left max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Tehnologije koje koristimo
          </h2>
          <p className="mt-6 text-xl text-white">
            Tehnologije koje koristimo za pružanje vrhunskih usluga i rješenja.
          </p>
        </motion.div>

        <div className="space-y-16">
          {serviceTechnologies.map((service) => (
            <div key={service.id} className="space-y-8">
              <div className="flex items-center space-x-4">
                <service.icon className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-bold text-white">{service.name}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.tools.map((tool) => (
                  <div
                    key={`${service.id}-${tool.name}`}
                    className="relative"
                    onMouseEnter={() => setHoveredTool(`${service.id}-${tool.name}`)}
                    onMouseLeave={() => setHoveredTool(null)}
                  >
                    {/* Tool card - Main base */}
                    <div className="h-full p-6 bg-primary rounded-xl border border-transparent hover:border-secondary transition-colors duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-secondary rounded-lg">
                          <tool.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-medium text-white">{tool.name}</h4>
                      </div>
                      <p className="mt-3 text-sm text-gray-200">{tool.shortDescription}</p>
                    </div>

                    {/* Floating detail card - FIXED */}
                    <AnimatePresence>
                      {hoveredTool === `${service.id}-${tool.name}` && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: -12, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          // bottom-full ensures it sits above the base card regardless of height
                          className="absolute z-[60] bottom-full left-0 right-0 mb-2 w-full pointer-events-auto"
                        >
                          <div className="bg-primary border-2 border-secondary rounded-xl shadow-2xl overflow-hidden">
                            <div className="p-5 flex flex-col">
                              <div className="flex items-center space-x-3 mb-3">
                                <tool.icon className="w-5 h-5 text-secondary" />
                                <span className="font-bold text-white">{tool.name}</span>
                              </div>
                              
                              <div className="bg-white/5 rounded-lg p-3 mb-3">
                                <p className="text-sm text-gray-100 leading-relaxed">
                                  {tool.longDescription}
                                </p>
                              </div>

                              <Link 
                                href={tool.link}
                                target="_blank"
                                className="inline-flex items-center text-sm font-bold text-secondary hover:underline"
                              >
                                Posjeti stranicu <ArrowRight className="ml-1 w-4 h-4" /> 
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}