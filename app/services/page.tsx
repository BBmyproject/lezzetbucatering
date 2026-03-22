import type { Metadata } from 'next';
import { subpageMetadata } from '@/lib/page-metadata';
import { withServiceMetaTitle } from '@/lib/service-areas';
import ServicesPageContent from '../components/ServicesPageContent';

export const metadata: Metadata = subpageMetadata({
  title: withServiceMetaTitle('Hizmetlerimiz'),
  description:
    'Şirket, şantiye, okul, hastane catering; organizasyon, iftar, mevlit ve toplu yemek hizmetleri. İstanbul’da menü, hijyen ve teslimatla uçtan uca çözüm.',
  path: '/services',
  ogDescription:
    'İftar, mevlit, kurumsal ve toplu yemek organizasyonlarında Lezzet Bu Catering ile profesyonel hizmet.',
});

export default function ServicesPage() {
  return (
    <main>
      <ServicesPageContent />
    </main>
  );
}
