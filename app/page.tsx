import HeroBanner from './components/HeroBanner';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import DeliverySection from './components/DeliverySection';

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <ServicesSection />
      <AboutSection />
      <EventsSection />
      <DeliverySection />
    </main>
  );
}
