import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';
import { SERVICE_AREAS } from '@/lib/service-areas';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    ...SERVICE_AREAS.map((s) => ({
      path: `/services/${s.slug}` as const,
      priority: 0.85 as const,
      changeFrequency: 'monthly' as const,
    })),
    { path: '/menu', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/hygiene', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.85, changeFrequency: 'monthly' as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path === '' ? base : `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
