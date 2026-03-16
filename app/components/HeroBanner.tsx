'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface HeroBannerProps {
  showButton?: boolean;
}

export default function HeroBanner({ showButton = true }: HeroBannerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // requestAnimationFrame ile bir sonraki frame'de çalıştır, hydration'dan hemen sonra
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-153px)] flex items-center justify-center overflow-hidden">
      {/* Arka Plan Görsel */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-banner.jpg"
          alt="Hero Banner"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      {/* İçerik */}
      <div className="container mx-auto max-w-[1320px] px-4 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
          {/* Başlık */}
          <div
            className={`fade-up-title ${
              isLoaded ? 'fade-up-visible' : ''
            }`}
          >
            <h1 className="text-5xl md:text-7xl text-center lg:text-8xl font-secondary font-medium text-dark mb-6 leading-tight">
              Zevkinize uygun
              <br />
              en iyi yemekler
            </h1>
          </div>

          {/* Açıklama */}
          <div
            className={`fade-up-description ${
              isLoaded ? 'fade-up-visible' : ''
            }`}
          >
            <p className="text-lg md:text-xl text-center text-dark max-w-2xl mx-auto mb-8 font-sans">
              Discover delectable cuisine and unforgettable moments in our
              welcoming, culinary haven.
            </p>
          </div>

          {/* Buton - Sadece showButton true ise göster */}
          {showButton && (
            <div
              className={`fade-up-button ${
                isLoaded ? 'fade-up-visible' : ''
              }`}
            >
              <Link
                href="/contact"
                className="group flex relative border-[1.5px] border-dark bg-transparent text-dark py-3 px-6 rounded-[118px] hover:text-white hover:border-[#eb5600] transition-colors duration-300 font-sans text-base font-medium overflow-hidden w-fit"
              >
                <span className="relative z-10 font-bold">Fiyat Al</span>
                <div className="price-button-hover" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
