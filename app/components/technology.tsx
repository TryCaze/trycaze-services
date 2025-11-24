'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ArrowRight, Briefcase, Globe, PrinterCheck, Server, Wrench } from "lucide-react";
import { FaMicrosoft, FaGoogleDrive, FaDiscord, FaCloudsmith, FaApple, FaLinux, FaBlender } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiMinutemailer, SiAnydesk, SiHostinger, SiShopify, SiReact, SiCreality } from "react-icons/si";
import { BsWordpress } from "react-icons/bs";

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
        longDescription: 'Microsoft 365 je paket aplikacija za produktivnost i poslovnu suradnju, uključujući Word, Excel, PowerPoint, Outlook, Access i Teams.' 
      },
      { 
        name: 'Google Workspace', 
        icon: FaGoogleDrive,
        shortDescription: 'Alati za suradnju u oblaku',
        longDescription: 'Google Workspace je skup alata u oblaku poput Gmaila, Dokumenata, Drivea i Meeta za produktivnost i suradnju.' 
      },
      { 
        name: 'Discord', 
        icon: FaDiscord,
        shortDescription: 'Platforma za komunikaciju',
        longDescription: 'Discord je platforma za komunikaciju idealna za timsku suradnju, nudi glasovnu, video i tekstualnu komunikaciju.' 
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
        longDescription: 'Hitna telefonska podrška za trenutnu pomoć kod IT problema, osigurava brzo rješavanje i minimalan zastoj.' 
      },
      { 
        name: 'AnyDesk', 
        icon: SiAnydesk,
        shortDescription: 'Alat za udaljenu radnu površinu',
        longDescription: 'Lagana aplikacija za udaljenu radnu površinu koja omogućuje brze veze s niskom latencijom za IT podršku i rad na daljinu.' 
      },
      { 
        name: 'Podrška putem e-pošte', 
        icon: SiMinutemailer,
        shortDescription: 'Podrška putem e-pošte',
        longDescription: 'Podrška putem e-pošte za nehitne IT upite i pomoć.' 
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
        longDescription: 'Kompletan set alata za dijagnostiku i popravak Windows operativnih sustava uključujući vraćanje sustava, čišćenje diska i nadzor performansi.' 
      },
      { 
        name: 'Linux alati', 
        icon: FaLinux,
        shortDescription: 'Linux alati za popravak',
        longDescription: 'Snažni open-source alati za oporavak sustava, dijagnostiku hardvera i optimizaciju performansi na Linux distribucijama.' 
      },
      { 
        name: 'macOS Recovery', 
        icon: FaApple,
        shortDescription: 'Mac sustav za oporavak',
        longDescription: 'Appleov ugrađeni sustav za oporavak s hardverskim testovima, alatom za disk i mogućnostima ponovne instalacije macOS-a za rješavanje problema.' 
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
        longDescription: 'Cura je popularni softver za rezanje 3D modela koji omogućuje korisnicima da pripreme svoje modele za 3D ispis s različitim postavkama i opcijama prilagodbe.' 
      },
      { 
        name: 'Blender', 
        icon: FaBlender,
        shortDescription: '3D modeliranje',
        longDescription: 'Blender je alat za precizno 3D modeliranje koji se koristi za izradu i uređivanje 3D modela prije ispisa. Nudi širok spektar značajki za dizajn.' 
      },
      { 
        name: 'Creality Printer', 
        icon: SiCreality,
        shortDescription: '3D printer',
        longDescription: 'Koristimo Creality 3D printere za visokokvalitetno 3D printanje s preciznošću i pouzdanošću, idealne za prototipove i gotove proizvode.' 
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
        longDescription: 'Povoljan web hosting s brzim performansama, jednostavnim alatom za izradu web stranica i 24/7 podrškom za male i srednje tvrtke.' 
      },
      { 
        name: 'WordPress', 
        icon: BsWordpress,
        shortDescription: 'E-commerce sustav',
        longDescription: 'WordPress je popularan sustav za upravljanje sadržajem (CMS) koji omogućuje jednostavno stvaranje i upravljanje web stranicama i e-trgovinama.' 
      },
      { 
        name: 'React', 
        icon: SiReact,
        shortDescription: 'Frontend biblioteka',
        longDescription: 'JavaScript biblioteka za izradu interaktivnih korisničkih sučelja s višekratnim komponentama, koju održava Facebook i velika zajednica programera.' 
      }
    ]
  }
];


export function TechnologyShowcase() {

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <section 
      id="technology" 
      ref={ref}
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-5" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br" />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              Tehnologije koje koristimo
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-slate-300"
          >
            Tehnologije koje koristimo za pružanje vrhunskih usluga i rješenja.
          </motion.p>
        </motion.div>

        {/* Technology showcase */}
        <div className="space-y-16">
          {serviceTechnologies.map((service) => (
            <div key={service.id} className="space-y-8">
              {/* Service category header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <service.icon className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">{service.name}</h3>
              </motion.div>

              {/* Tools grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.tools.map((tool) => (
                  <motion.div
                    key={`${service.id}-${tool.name}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="relative"
                    onMouseEnter={() => setHoveredTool(`${service.id}-${tool.name}`)}
                    onMouseLeave={() => setHoveredTool(null)}
                  >
                    {/* Tool card */}
                    <div className="h-full p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-500/10 rounded-lg">
                          <tool.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <h4 className="text-lg font-medium text-white">{tool.name}</h4>
                      </div>
                      <p className="mt-3 text-sm text-slate-400">{tool.shortDescription}</p>
                    </div>

                    {/* Floating detail card - positioned above */}
                    <AnimatePresence>
                      {hoveredTool === `${service.id}-${tool.name}` && (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: -10 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ type: "spring", damping: 25, stiffness: 300 }}
                          className="absolute z-10 left-0 right-0 mx-auto -top-44 w-full max-w-md h-64 shadow-2xl"
                        >
                          <div className="relative h-full w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                            {/* Glass overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-blue-900/20 backdrop-blur-sm p-6 flex flex-col">
                              <div className="flex items-center space-x-4 mb-4">
                                <div className="p-3 bg-blue-500/10 rounded-lg">
                                  <tool.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                              </div>
                              <div className="bg-slate-800/50 rounded-lg p-4 backdrop-blur-sm flex-grow">
                                <p className="text-slate-300">
                                  {tool.longDescription}
                                </p>
                              </div>
                              <a 
                                href="#" 
                                className="mt-4 inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                              >
                                Web stranica <ArrowRight className="ml-1 w-4 h-4" /> 
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}