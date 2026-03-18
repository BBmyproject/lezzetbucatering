import type { Metadata } from 'next';
import { subpageMetadata } from '@/lib/page-metadata';

export const metadata: Metadata = subpageMetadata({
  title: 'Menü',
  description:
    '4’lü, 5’li ve 6’lı menü paketleri; çorba, ana yemek, pilav ve tamamlayıcılar. Haftalık örnek menülerimizi inceleyin.',
  path: '/menu',
});

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
