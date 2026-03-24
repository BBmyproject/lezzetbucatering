'use client';

import Link from 'next/link';
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import type { ServiceArea } from '@/lib/service-areas';
import ServiceAreaIcon from './ServiceAreaIcon';

type Props = {
  service: ServiceArea;
  otherServices: ServiceArea[];
};

export default function ServiceDetailContent({
  service,
  otherServices,
}: Props) {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);
  const [isMainVisible, setIsMainVisible] = useState(false);
  const [isOthersVisible, setIsOthersVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const othersRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    requestAnimationFrame(() => setIsHeroLoaded(true));
  }, []);

  useEffect(() => {
    const opts = {
      threshold: 0,
      rootMargin: '0px 0px 80px 0px',
    } as const;

    const mainObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsMainVisible(true);
      });
    }, opts);

    const othersObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsOthersVisible(true);
      });
    }, { ...opts, rootMargin: '0px 0px 100px 0px' });

    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsCtaVisible(true);
      });
    }, opts);

    if (mainRef.current) mainObserver.observe(mainRef.current);
    if (othersRef.current) othersObserver.observe(othersRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);

    return () => {
      mainObserver.disconnect();
      othersObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  return (
    <>
      <section className="relative flex h-[min(380px,50vw)] min-h-[240px] w-full items-center justify-center overflow-hidden bg-[#f58220]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/hero-banner.jpg"
            alt=""
            className="h-full w-full object-cover"
            width={1920}
            height={380}
          />
        </div>
        <div className="container relative z-10 mx-auto max-w-[1320px] px-4">
          <nav
            className={`fade-up-hygiene-hero-title mb-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-sans text-sm text-white/85 ${
              isHeroLoaded ? 'fade-up-visible' : ''
            }`}
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition hover:text-white">
              Ana Sayfa
            </Link>
            <span className="text-white/50" aria-hidden>
              /
            </span>
            <Link href="/services" className="transition hover:text-white">
              Hizmetlerimiz
            </Link>
            <span className="text-white/50" aria-hidden>
              /
            </span>
            <span className="text-white">{service.title}</span>
          </nav>
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className={`fade-up-hygiene-hero-subtitle font-secondary text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl ${
                isHeroLoaded ? 'fade-up-visible' : ''
              }`}
            >
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto max-w-[1320px] px-4">
          <div ref={mainRef} className="mx-auto max-w-3xl">
            <div
              className={`fade-up-hygiene-intro mb-10 flex flex-col items-center text-center ${
                isMainVisible ? 'fade-up-visible' : ''
              }`}
            >
              <div className="mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#f5822012]">
                <ServiceAreaIcon areaKey={service.key} />
              </div>
              <p className="font-sans text-lg leading-relaxed text-dark md:text-xl">
                {service.detailIntro}
              </p>
            </div>

            <div className="space-y-6">
              {service.detailParagraphs.map((p, i) => (
                <p
                  key={i}
                  className={`fade-up-card fade-up-card-${Math.min(i, 5)} font-sans text-base leading-relaxed text-gray-600 ${
                    isMainVisible ? 'fade-up-visible' : ''
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            <div
              className={`fade-up-contact-card mt-12 rounded-xl border border-gray-200 bg-[#f9f9f7] p-8 md:p-10 ${
                isMainVisible ? 'fade-up-visible' : ''
              }`}
            >
              <h2 className="mb-5 font-secondary text-xl font-medium text-dark md:text-2xl">
                Öne çıkanlar
              </h2>
              <ul className="space-y-3 font-sans text-gray-700">
                {service.detailHighlights.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#f58220]"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-14">
        <div className="container mx-auto max-w-[1320px] px-4">
          <h2
            className={`fade-up-title mb-10 text-center font-secondary text-2xl font-medium text-dark md:text-3xl ${
              isOthersVisible ? 'fade-up-visible' : ''
            }`}
          >
            Diğer hizmetler
          </h2>
          <div
            ref={othersRef}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {otherServices.map((s, index) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`fade-up-card fade-up-card-${index} group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
                  isOthersVisible ? 'fade-up-visible' : ''
                }`}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f5822012] transition group-hover:bg-[#f5822020]">
                  <ServiceAreaIcon
                    areaKey={s.key}
                    className="text-[#f58220] size-7"
                  />
                </div>
                <h3 className="mb-2 font-bold text-dark transition group-hover:text-[#f58220]">
                  {s.title}
                </h3>
                <p className="line-clamp-3 font-sans text-sm text-gray-600">
                  {s.description}
                </p>
                <span className="mt-4 inline-block font-sans text-sm font-medium text-[#f58220]">
                  İncele →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-[#f9f9f7] py-16">
        <div className="container mx-auto max-w-[1320px] px-4">
          <div
            ref={ctaRef}
            className={`fade-up-contact-card mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm md:p-10 ${
              isCtaVisible ? 'fade-up-visible' : ''
            }`}
          >
            <h2 className="mb-3 font-secondary text-2xl font-medium text-dark md:text-3xl">
              Bu hizmet için teklif alın
            </h2>
            <p className="mb-8 font-sans text-gray-600">
              Kişi sayısı, tarih ve lokasyon bilgilerinizle en kısa sürede size
              dönüş yapalım.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex overflow-hidden rounded-[118px] border-[1.5px] border-dark bg-transparent px-8 py-3 font-sans text-base font-bold text-dark transition-colors duration-300 hover:border-[#f58220] hover:text-white"
            >
              <span className="relative z-10">Fiyat Al</span>
              <div className="price-button-hover" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
