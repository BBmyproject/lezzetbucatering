'use client';

import Link from 'next/link';
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { SERVICE_AREAS } from '@/lib/service-areas';
import ServiceAreaIcon from './ServiceAreaIcon';

export default function ServicesPageContent() {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const introRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    requestAnimationFrame(() => setIsHeroLoaded(true));
  }, []);

  useEffect(() => {
    const opts = {
      threshold: 0,
      rootMargin: '0px 0px 80px 0px',
    } as const;

    const introObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsIntroVisible(true);
      });
    }, opts);

    const gridObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsGridVisible(true);
      });
    }, { ...opts, rootMargin: '0px 0px 120px 0px' });

    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsCtaVisible(true);
      });
    }, opts);

    if (introRef.current) introObserver.observe(introRef.current);
    if (gridRef.current) gridObserver.observe(gridRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);

    return () => {
      introObserver.disconnect();
      gridObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  return (
    <>
      <section className="relative flex h-[min(420px,55vw)] min-h-[280px] w-full items-center justify-center overflow-hidden bg-[#4d592b]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/hero-banner.jpg"
            alt=""
            className="h-full w-full object-cover"
            width={1920}
            height={420}
          />
        </div>
        <div className="container relative z-10 mx-auto max-w-[1320px] px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className={`fade-up-hygiene-hero-title mb-4 font-secondary text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl ${
                isHeroLoaded ? 'fade-up-visible' : ''
              }`}
            >
              Hizmetlerimiz
            </h1>
            <p
              className={`fade-up-hygiene-hero-subtitle font-sans text-lg text-white/90 md:text-xl ${
                isHeroLoaded ? 'fade-up-visible' : ''
              }`}
            >
              İstanbul’da kurumsal catering, şantiye yemekleri, etkinlik ve
              toplu organizasyonlarda uçtan uca çözüm ortağınızız.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-[1320px] px-4">
          <div
            ref={introRef}
            className={`fade-up-hygiene-intro mx-auto mb-14 max-w-3xl text-center font-sans text-base leading-relaxed text-gray-600 md:text-lg ${
              isIntroVisible ? 'fade-up-visible' : ''
            }`}
          >
            <p className="mb-4 text-dark">
              Günlük personel yemeklerinden iftar ve mevlit gibi özel günlere,
              fabrika ve okul mutfağından sağlık tesislerine kadar geniş bir
              yelpazede hizmet veriyoruz. İhtiyacınıza uygun menü, hijyen ve
              teslimat planını birlikte oluşturuyoruz.
            </p>
            <p>
              Aşağıda sunduğumuz hizmet alanlarına göre teklif almak için{' '}
              <Link
                href="/contact"
                className="font-medium text-[#4d592b] underline decoration-[#4d592b]/30 underline-offset-2 transition hover:text-[#f58220] hover:decoration-[#f58220]/40"
              >
                iletişim
              </Link>{' '}
              sayfamızdan bize yazabilir veya arayabilirsiniz.
            </p>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICE_AREAS.map((service, index) => (
              <div
                key={service.key}
                className={`fade-up-card fade-up-card-${index} ${
                  isGridVisible ? 'fade-up-visible' : ''
                }`}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="mb-6 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#4d592b12] transition group-hover:bg-[#4d592b20]">
                    <ServiceAreaIcon areaKey={service.key} />
                  </div>
                  <h2 className="mb-4 text-xl font-bold leading-snug text-dark transition group-hover:text-[#4d592b]">
                    {service.title}
                  </h2>
                  <p className="mb-5 flex-grow font-sans text-base text-gray-600">
                    {service.description}
                  </p>
                  <span className="font-sans text-sm font-semibold text-[#f58220]">
                    Detaylı incele →
                  </span>
                </Link>
              </div>
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
              Projenize özel teklif
            </h2>
            <p className="mb-8 font-sans text-gray-600">
              Kişi sayısı, lokasyon ve menü tercihlerinize göre hızlı fiyat
              bilgisi için bizimle iletişime geçin.
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
