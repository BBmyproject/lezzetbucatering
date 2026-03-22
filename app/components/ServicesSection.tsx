'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { SERVICE_AREAS } from '@/lib/service-areas';
import ServiceAreaIcon from './ServiceAreaIcon';

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto max-w-[1320px] px-4">
        <div
          className={`fade-up-title ${
            isVisible ? 'fade-up-visible' : ''
          } mb-6`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-secondary font-medium text-dark text-center">
            Hizmet Alanlarımız
          </h2>
        </div>
        <p
          className={`fade-up-description mx-auto mb-16 max-w-2xl text-center font-sans text-base text-gray-600 ${
            isVisible ? 'fade-up-visible' : ''
          }`}
        >
          Tüm hizmet detaylarımız için{' '}
          <Link
            href="/services"
            className="font-medium text-[#4d592b] underline decoration-[#4d592b]/30 underline-offset-2 transition hover:text-[#f58220] hover:decoration-[#f58220]/40"
          >
            Hizmetlerimiz
          </Link>{' '}
          sayfasını ziyaret edebilirsiniz.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((service, index) => (
            <div
              key={service.key}
              className={`fade-up-card fade-up-card-${index} ${
                isVisible ? 'fade-up-visible' : ''
              }`}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="mb-6 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#4d592b12] transition group-hover:bg-[#4d592b20]">
                  <ServiceAreaIcon areaKey={service.key} />
                </div>
                <h3 className="mb-4 text-xl font-bold leading-snug text-dark transition group-hover:text-[#4d592b]">
                  {service.title}
                </h3>
                <p className="mb-4 flex-grow font-sans text-base text-gray-600">
                  {service.description}
                </p>
                <span className="font-sans text-sm font-semibold text-[#f58220]">
                  Detay →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
