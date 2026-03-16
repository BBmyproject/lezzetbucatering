import AboutSection from '../components/AboutSection';
import AboutFeatures from '../components/AboutFeatures';

export default function AboutPage() {
  return (
    <main>
      <AboutSection showButton={false} />
      <AboutFeatures />
    </main>
  );
}
