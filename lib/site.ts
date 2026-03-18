/** Canlı domain — .env: NEXT_PUBLIC_SITE_URL=https://siteniz.com */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://lezzetbucatering.com'
  ).replace(/\/$/, '');
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}
