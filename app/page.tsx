import Image from "next/image";
import { HeroSection } from "./components/hero";
import { ServicesSection } from "./components/importance";
import { Services } from "./components/services";
import { Testimonials } from "./components/testemonials";
import { CaseStudies } from "./components/case-studies";
import { TechnologyShowcase } from "./components/technology";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TryCaze - Vaša digitalna agencija za vrhunska rešenja",
  description: "TryCaze je Vaša digitalna agencija za razvoj web aplikacija, e-trgovine, pomoć u rješavanju IT problema i pružanje IT podrške."
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <Services />
      <Testimonials />
      <CaseStudies />
      <TechnologyShowcase />
    </div>
  );
}
