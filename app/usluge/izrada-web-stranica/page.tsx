import Webdev from "./web";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Izrada web stranica Požega",
  description:
    "Profesionalna izrada web stranica i web aplikacija po mjeri. TryCaze Services nudi moderni web razvoj, optimiziran dizajn i brzo učitavanje za maksimalne rezultate online.",
  keywords: [
    "izrada web stranica",
    "web razvoj",
    "web dizajn",
    "izrada web aplikacija",
    "moderni web",
    "Next.js",
    "React razvoj",
    "SEO optimizacija",
    "responzivne web stranice",
    "TryCaze Services",
    "Izrada web stranica Požega"
  ],
  openGraph: {
    title: "Izrada web stranica",
    description:
      "Izrada modernih, responzivnih i SEO optimiziranih web stranica. Od dizajna do implementacije sve što vaš brend treba online.",
    url: "https://trycaze-services.vercel.app/usluge/izrada-web-stranica",
    siteName: "TryCaze Services",
    type: "website",
    locale: "hr_HR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Izrada web stranica",
    description:
      "Profesionalni web razvoj s naglaskom na dizajn, brzinu i sigurnost. Povećajte online prisutnost uz TryCaze Services.",
    images: ["https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg"],
  },
  alternates: {
    canonical: "https://trycaze-services.vercel.app/usluge/izrada-web-stranica",
  },
};


export default function Webrazvoj() {
  return (
    <Webdev />
  );
}