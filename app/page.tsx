import Image from "next/image";
import { HeroSection } from "./components/hero";
import { ServicesSection } from "./components/importance";
import { Services } from "./components/services";
import { Testimonials } from "./components/testemonials";
import { CaseStudies } from "./components/case-studies";
import { TechnologyShowcase } from "./components/technology";

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
