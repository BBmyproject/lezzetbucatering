import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { subpageMetadata } from '@/lib/page-metadata';
import {
  SERVICE_AREAS,
  getServiceBySlug,
  getAllServiceSlugs,
  withServiceMetaTitle,
} from '@/lib/service-areas';
import ServiceDetailContent from '../../components/ServiceDetailContent';

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return {};
  }
  return subpageMetadata({
    title: withServiceMetaTitle(service.title),
    description: service.detailMetaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }
  const otherServices = SERVICE_AREAS.filter((s) => s.slug !== slug);

  return (
    <main>
      <ServiceDetailContent
        service={service}
        otherServices={otherServices}
      />
    </main>
  );
}
