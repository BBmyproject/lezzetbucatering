'use client';

import { useEffect, useRef, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

const MAP_SLIDE = {
  src: '/images/istanbul-map.svg',
  alt: 'İstanbul ilçe haritası — büyütmek için tıklayın',
} as const;

export default function IstanbulMapSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24"
    >
      <div className="container mx-auto max-w-[1320px] px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="max-w-3xl mx-auto text-left mb-10 md:mb-14">
            <h2
              className={`fade-up-about-title text-3xl md:text-5xl font-secondary font-medium text-dark mb-4 ${
                isVisible ? 'fade-up-visible' : ''
              }`}
            >
              İstanbul&apos;da Hizmet Ağımız
            </h2>
            <p
              className={`fade-up-about-p1 text-gray-600 ${
                isVisible ? 'fade-up-visible' : ''
              }`}
            >
              Harita üzerinde turuncu ile işaretlenmiş bölgeler öne çıkan
              hizmet alanlarımızdan büyük bir kısmını temsil eder.
            </p>
          </div>

          <div
            className={`fade-up-card fade-up-card-0 relative mx-auto w-full rounded-2xl bg-white p-3 md:p-5 shadow-sm border border-gray-100 overflow-hidden ${
              isVisible ? 'fade-up-visible' : ''
            }`}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="group relative block w-full cursor-zoom-in rounded-lg border-0 bg-transparent p-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f58220] focus-visible:ring-offset-2"
              aria-label="Haritayı büyüt ve yakınlaştır"
            >
              <img
                src={MAP_SLIDE.src}
                alt="İstanbul ilçe haritası"
                className="block w-full h-auto max-w-full transition-opacity group-hover:opacity-95"
              />
              <span className="pointer-events-none absolute bottom-2 right-2 rounded-md bg-black/70 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 md:opacity-90">
                Büyütmek için tıklayın
              </span>
            </button>
          </div>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[MAP_SLIDE]}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 4,
          scrollToZoom: true,
        }}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </section>
  );
}
