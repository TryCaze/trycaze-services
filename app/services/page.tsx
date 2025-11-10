import { CaseStudies } from "./components/case-studies";
import { Cta } from "./components/cta";
import { DetailedServices } from "./components/detailed";
import { Faq } from "./components/faq";
import { Hero } from "./components/hero-services";
import { Process } from "./components/process";
import { ServicesSummary } from "./components/sumarry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT podrška, popravci, web razvoj",
  description: "Otkrijte profesionalne IT usluge na jednom mjestu — poslovna rješenja, tehnička podrška, popravci računala, postavljanje i umrežavanje sustava te web razvoj po mjeri. TryCaze Services vam omogućuje brza, sigurna i moderna rješenja.",
   keywords: [
    "IT usluge",
    "poslovne usluge",
    "IT podrška",
    "popravci računala",
    "postavljanje računala",
    "umrežavanje",
    "web razvoj",
    "servis računala",
    "održavanje IT sustava",
    "TryCaze Services"
  ],
  openGraph: {
    title: "TryCaze IT Usluge, Poslovna rješenja, podrška, web razvoj",
    description:
      "Sveobuhvatne IT usluge — od poslovne podrške i popravaka do umrežavanja i web razvoja. Profesionalno, brzo i pouzdano.",
    url: "https://trycaze-services.vercel.app/services",
    siteName: "TryCaze Services",
    type: "website",
    locale: "hr_HR",
  },
  twitter: {
    card: "summary_large_image",
    title: "TryCaze IT Usluge, Poslovna podrška i web razvoj",
    description:
      "Sve IT usluge na jednom mjestu, poslovna rješenja, tehnička podrška, popravci, umrežavanje i web razvoj.",
    images: ["https://trycaze-services.vercel.app/images/services-cover.jpg"],
  },
  alternates: {
    canonical: "https://trycaze-services.vercel.app/services",
  },
};

export default function Services() {
    return (
        <>
        <Hero />
        <ServicesSummary />
        <DetailedServices />
        <CaseStudies />
        <Process />
        <Faq />
        <Cta />
        </>
    )
}