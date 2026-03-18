import type { Metadata } from 'next';
import { subpageMetadata } from '@/lib/page-metadata';
import AboutSection from '../components/AboutSection';
import AboutFeatures from '../components/AboutFeatures';
import IstanbulMapSection from '../components/IstanbulMapSection';

export const metadata: Metadata = subpageMetadata({
  title: 'Hakkımızda',
  description:
    'Lezzet Bu Catering olarak İstanbul’da şantiye, fabrika ve organizasyonlara yılların deneyimiyle toplu yemek hizmeti sunuyoruz. Ekibimiz ve değerlerimiz.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <main>
      <AboutSection showButton={false} />
      <IstanbulMapSection />
      <AboutFeatures />
    </main>
  );
}
