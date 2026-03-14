import ONama from "./onama";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nama | TryCaze",
  description: "Saznajte više o nama. Naša misija je pružiti najbolje usluge.",
  keywords: "o nama, TryCaze, o kompaniji",
};

export default function ONamaStranica() {
  return (
    <ONama />
  )
}