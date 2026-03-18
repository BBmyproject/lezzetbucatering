import type { Metadata } from 'next';
import { subpageMetadata } from '@/lib/page-metadata';

export const metadata: Metadata = subpageMetadata({
  title: 'Hijyen ve Kalite',
  description:
    'Mutfak hijyeni, soğuk zincir, personel eğitimi ve belgelerimiz. Lezzet Bu Catering’de gıda güvenliği ve ISO standartları.',
  path: '/hygiene',
});

export default function HygieneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
