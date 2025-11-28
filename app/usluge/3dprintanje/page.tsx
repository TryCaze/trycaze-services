import type { Metadata } from "next";
import CommissionsPage from "./components/printanje";

export const metadata: Metadata = {
  title: "3D printanje Požega",
  description:
    "Profesionalne usluge 3D printanja: ispis modela, prototipiranje, prilagodbe i završna obrada. Podržavamo PLA, ABS i PETG te nudimo visoku preciznost i brzu isporuku.",
  keywords: [
    "3D printanje",
    "3D print",
    "prototipiranje",
    "ispis modela",
    "PLA",
    "ABS",
    "PETG",
    "resin",
    "FDM",
    "SLA",
    "završna obrada",
    "TryCaze Services",
    "3D Printanje Požega"
  ],
  openGraph: {
    title: "3D printanje",
    description:
      "Brzo i precizno 3D printanje za prototipe, dijelove i personalizirane proizvode. Stručna priprema modela, odabir materijala i kvalitetna obrada.",
    url: "https://trycaze-services.vercel.app/usluge/3dprintanje",
    siteName: "TryCaze Services",
    type: "website",
    locale: "hr_HR",
    images: [
      {
        url: "https://images.pexels.com/photos/20877039/pexels-photo-20877039.jpeg?auto=compress&cs=tinysrgb&w=1600",
        alt: "3D printanje - TryCaze Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "3D printanje",
    description:
      "Profesionalno 3D printanje: prototipi, rezervni dijelovi i personalizirani proizvodi. Brzo, precizno i pouzdano.",
    images: ["https://images.pexels.com/photos/20877039/pexels-photo-20877039.jpeg?auto=compress&cs=tinysrgb&w=1600"]
  },
  alternates: {
    canonical: "https://trycaze-services.vercel.app/usluge/3dprintanje"
  }
};


export default function SetupPage() {
  return (
    <CommissionsPage />
  );
}