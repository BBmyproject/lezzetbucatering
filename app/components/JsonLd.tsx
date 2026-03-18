import { getSiteUrl } from '@/lib/site';

export default function JsonLd() {
  const siteUrl = getSiteUrl();
  const ogBrandUrl = `${siteUrl}/oglogo.png`;

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness'],
        '@id': `${siteUrl}/#organization`,
        name: 'Lezzet Bu Catering',
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: ogBrandUrl,
          contentUrl: ogBrandUrl,
        },
        image: {
          '@type': 'ImageObject',
          url: ogBrandUrl,
          caption: 'Lezzet Bu Catering — profesyonel catering logosu',
        },
        email: 'lezzetbucatering@gmail.com',
        telephone: '+905434566278',
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'Zekeriyaköy Mah. 5. Cad. Eğrisel Blok No: 7 İç Kapı No: 22',
          addressLocality: 'Sarıyer',
          addressRegion: 'İstanbul',
          addressCountry: 'TR',
        },
        areaServed: { '@type': 'City', name: 'İstanbul' },
        knowsAbout: [
          'Şantiye catering',
          'Toplu yemek',
          'İstanbul catering',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Lezzet Bu Catering',
        inLanguage: 'tr-TR',
        publisher: { '@id': `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
