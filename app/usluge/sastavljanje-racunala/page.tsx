import type { Metadata } from "next";
import Setupspage from "./Setup";

export const metadata: Metadata = {
  title: "Postavljanje računala Požega",
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
    "Windows instalacija",
    "Požega Postavljanje računala",
    "računalna usluga Požega",
    "računalna podrška Požega",
  ],
  openGraph: {
    title: "Postavljanje računala",
    description:
      "Brza i sigurna instalacija računala operativni sustavi, programi, sigurnosne postavke i mrežna konfiguracija. Sve pripremamo za rad odmah po isporuci.",
    url: "https://trycaze-services.vercel.app/usluge/sastavljanje-racunala",
    siteName: "TryCaze Services",
    type: "website",
    locale: "hr_HR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Postavljanje računala",
    description:
      "Profesionalna instalacija i konfiguracija računala za dom i poslovanje. Brzo, sigurno i pouzdano.",
    images: ["https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
  },
  alternates: {
    canonical: "https://trycaze-services.vercel.app/usluge/sastavljanje-racunala",
  },
};


export default function SetupPage() {
  return (
    <Setupspage />
  );
}
