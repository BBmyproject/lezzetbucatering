import type { Metadata } from 'next';
import { subpageMetadata } from '@/lib/page-metadata';

export const metadata: Metadata = subpageMetadata({
  title: 'İletişim',
  description:
    'Lezzet Bu Catering iletişim: telefon, e-posta ve Sarıyer adresi. Şantiye ve toplu yemek teklifi için form doldurun veya arayın.',
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
