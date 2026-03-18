import type { Metadata } from 'next';
import { homeMetadata } from '@/lib/page-metadata';
import HeroBanner from './components/HeroBanner';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import DeliverySection from './components/DeliverySection';
import ServicesSection from './components/ServicesSection';

const defaultTitle =
  'Lezzet Bu Catering - Şantiye Catering & Toplu Yemek Hizmeti,İstanbul Catering';
const metaDescription =
  'İstanbul’da şantiye, fabrika, okul, hastane ve organizasyonlara günlük sıcak yemek ve toplu catering. Hijyenik üretim, zengin menü ve hızlı teklif için arayın.';

export const metadata: Metadata = homeMetadata({
  title: defaultTitle,
  description: metaDescription,
});

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <MenuSection />
      <AboutSection />
      <ServicesSection />
      <EventsSection />
      <DeliverySection />
    </main>
  );
}
