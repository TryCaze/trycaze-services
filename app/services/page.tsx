"use client";

import { CaseStudies } from "./components/case-studies";
import { Cta } from "./components/cta";
import { DetailedServices } from "./components/detailed";
import { Faq } from "./components/faq";
import { Hero } from "./components/hero-services";
import { Process } from "./components/process";
import { ServicesSummary } from "./components/sumarry";

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