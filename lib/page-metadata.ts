import type { Metadata } from 'next';

/** Sosyal paylaşım / OG — beyaz arka planlı marka görseli */
const OG_IMAGE = '/oglogo.png';
const SITE_NAME = 'Lezzet Bu Catering';

const ogShareDescription =
  'Lezzet Bu Catering - Şantiye Catering & Organizasyon Catering Hizmetimiz İle Tanışmadıysanız Bizi Arayın Teklif Verelim!';

const ogImageBlock = {
  url: OG_IMAGE,
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — logo`,
} as const;

export function homeMetadata(opts: {
  title: string;
  description: string;
}): Metadata {
  return {
    title: { absolute: opts.title },
    description: opts.description,
    alternates: { canonical: '/' },
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url: '/',
      siteName: SITE_NAME,
      title: opts.title,
      description: ogShareDescription,
      images: [ogImageBlock],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: ogShareDescription,
      images: [OG_IMAGE],
    },
  };
}

export function subpageMetadata(opts: {
  title: string;
  description: string;
  path: `/${string}`;
  /** Boş bırakılırsa paylaşım metni (og:description) ana sitedeki teklif cümlesi olur */
  ogDescription?: string;
}): Metadata {
  const path = opts.path;
  const fullTitle = `${opts.title} | ${SITE_NAME}`;
  const ogDesc = opts.ogDescription ?? ogShareDescription;

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url: path,
      siteName: SITE_NAME,
      title: fullTitle,
      description: ogDesc,
      images: [ogImageBlock],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: ogDesc,
      images: [OG_IMAGE],
    },
  };
}
