import Webdev from "./web";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Izrada web stranica - Moderni web razvoj",
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
    "TryCaze Services"
  ],
  openGraph: {
    title: "Izrada web stranica - Moderni web razvoj",
    description:
      "Izrada modernih, responzivnih i SEO optimiziranih web stranica. Od dizajna do implementacije — sve što vaš brend treba online.",
    url: "https://trycaze-services.vercel.app/web",
    siteName: "TryCaze Services",
    type: "website",
    locale: "hr_HR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Izrada web stranica | TryCaze Services",
    description:
      "Profesionalni web razvoj s naglaskom na dizajn, brzinu i sigurnost. Povećajte online prisutnost uz TryCaze Services.",
    images: ["https://trycaze-services.vercel.app/images/web-cover.jpg"],
  },
  alternates: {
    canonical: "https://trycaze-services.vercel.app/web",
  },
};


export default function Webrazvoj() {
  return (
    <Webdev />
  );
}