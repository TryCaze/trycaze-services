import type { Metadata } from "next";
import Setupspage from "./Setup";

export const metadata: Metadata = {
  title: "Postavljanje računala - Brzo i profesionalno",
  description:
    "Profesionalno postavljanje i konfiguracija računala za dom i poslovanje. TryCaze Services nudi instalaciju operativnog sustava, drajvera, programa i sigurnosnih postavki. Spremno za rad bez brige.",
  keywords: [
    "postavljanje računala",
    "instalacija računala",
    "instalacija operativnog sustava",
    "instalacija programa",
    "konfiguracija računala",
    "IT podrška",
    "TryCaze Services",
    "podešavanje sustava",
    "računalo spremno za rad",
    "Windows instalacija"
  ],
  openGraph: {
    title: "Postavljanje računala | TryCaze Services",
    description:
      "Brza i sigurna instalacija računala — operativni sustavi, programi, sigurnosne postavke i mrežna konfiguracija. Sve pripremamo za rad odmah po isporuci.",
    url: "https://trycaze-services.vercel.app/setup",
    siteName: "TryCaze Services",
    type: "website",
    locale: "hr_HR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Postavljanje računala | TryCaze Services",
    description:
      "Profesionalna instalacija i konfiguracija računala za dom i poslovanje. Brzo, sigurno i pouzdano.",
    images: ["https://trycaze-services.vercel.app/images/setup-cover.jpg"],
  },
  alternates: {
    canonical: "https://trycaze-services.vercel.app/setup",
  },
};


export default function SetupPage() {
  return (
    <Setupspage />
  );
}
