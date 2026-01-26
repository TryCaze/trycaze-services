import PCRepairsPage from './popravci';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PC Popravci Požega',
  description: 'Profesionalne usluge popravke računala i dijagnostike. Brzo, pouzdano i stručno.',
  keywords: ['popravka računala', 'PC popravci', 'dijagnostika', 'usluge'],
  authors: [{ name: 'Kristijan' }],
  openGraph: {
    title: 'PC Popravci Požega',
    description: 'Profesionalne usluge popravke računala i dijagnostike.',
    type: 'website',
  },
};

export default function TechRepairsPage() {
  return (
    <PCRepairsPage />
  );
}