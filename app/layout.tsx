import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import { getSiteUrl } from '@/lib/site';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import JsonLd from './components/JsonLd';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const siteUrl = getSiteUrl();

const defaultTitle =
  'Lezzet Bu Catering - Şantiye Catering & Toplu Yemek Hizmeti,İstanbul Catering';

const metaDescription =
  'İstanbul’da şantiye, fabrika, okul, hastane ve organizasyonlara günlük sıcak yemek ve toplu catering. Hijyenik üretim, zengin menü ve hızlı teklif için arayın.';

const ogDescription =
  'Lezzet Bu Catering - Şantiye Catering & Organizasyon Catering Hizmetimiz İle Tanışmadıysanız Bizi Arayın Teklif Verelim!';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | Lezzet Bu Catering',
  },
  description: metaDescription,
  keywords: [
    'İstanbul catering',
    'şantiye yemeği',
    'toplu yemek',
    'fabrika yemekhanesi',
    'organizasyon catering',
    'günlük sıcak yemek',
    'Lezzet Bu Catering',
  ],
  authors: [{ name: 'Lezzet Bu Catering' }],
  creator: 'Lezzet Bu Catering',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: '/',
    siteName: 'Lezzet Bu Catering',
    title: defaultTitle,
    description: ogDescription,
    images: [
      {
        url: '/oglogo.png',
        width: 1200,
        height: 630,
        alt: 'Lezzet Bu Catering — profesyonel catering logosu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: ogDescription,
    images: ['/oglogo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/favicon-apple-touch.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${dmSans.variable} ${playfairDisplay.variable} font-sans`}>
        <JsonLd />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
