'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';

interface AboutSectionProps {
  showButton?: boolean;
}

export default function AboutSection({ showButton = true }: AboutSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mobil için daha düşük threshold, desktop için daha yüksek
    const isMobile = window.innerWidth < 768;
    const threshold = isMobile ? 0.4 : 0.7;
    const rootMargin = isMobile ? '0px 0px -50px 0px' : '0px 0px -100px 0px';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold,
        rootMargin,
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
    <section ref={sectionRef} className="bg-[#f9f9f7] py-10 md:py-20">
      <div className="container mx-auto max-w-[1320px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Sol Taraf - Görsel ve Card */}
          <div className="relative">
            {/* Görsel */}
            <div className="relative w-full h-[600px] pr-4 md:pr-10 pb-10 rounded-lg overflow-hidden">
              <img
                src="/images/about-image.jpg"
                alt="About Us"
                className="w-full h-full object-cover rounded-2xl"
                width={800}
                height={600}
              />
            </div>

            {/* Card - Görsel Üzerinde */}
            <div
              className={`fade-up-contact-card ${
                isVisible ? 'fade-up-visible' : ''
              } absolute bottom-0 right-0 bg-[#4d592b] rounded-2xl px-8 md:px-16 py-8 md:py-16 text-white shadow-xl`}
            >
              <h3 className="text-lg md:text-2xl font-medium mb-6">
                Bizimle iletişime geç
              </h3>

              <div className="space-y-4">
                {/* Telefon */}
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-white text-base md:text-lg flex-shrink-0" />
                  <a
                    href="tel:+905434566278"
                    className="text-white text-sm md:text-base hover:opacity-80 transition-opacity font-sans"
                  >
                    +90 543 456 62 78
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <FiMail className="text-white text-base md:text-lg flex-shrink-0" />
                  <a
                    href="mailto:lezzetbucatering@gmail.com"
                    className="text-white text-sm md:text-base hover:opacity-80 transition-opacity font-sans"
                  >
                    lezzetbucatering@gmail.com
                  </a>
                </div>

                {/* Adres */}
                <div className="flex items-start gap-3">
                  <HiLocationMarker className="text-white text-base md:text-lg flex-shrink-0 mt-1" />
                  <p className="text-white text-sm md:text-base font-sans">
                    Zekeriyaköy Sarıyer/İstanbul
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - İçerik */}
          <div className="space-y-6">
            {/* Başlık */}
            <div
              className={`fade-up-about-title ${
                isVisible ? 'fade-up-visible' : ''
              }`}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-secondary font-medium text-dark leading-tight">
                Aileniz için sağlıklı gıdalar sunuyoruz.
              </h2>
            </div>

            {/* İlk Paragraf */}
            <div
              className={`fade-up-about-p1 ${
                isVisible ? 'fade-up-visible' : ''
              }`}
            >
              <p className="text-lg text-gray-700 font-sans leading-relaxed">
                Hikayemiz; seçkin lezzetleri, kusursuz hizmeti ve enerjik bir
                atmosferi bir araya getiren benzersiz bir yemek deneyimi yaratma
                vizyonuyla başladı. Şehrin zengin mutfak kültüründen beslenerek,
                yerel köklerimize sadık kalırken bu değerleri küresel bir damak
                tadıyla harmanlamayı amaçlıyoruz.
              </p>
            </div>

            {/* İkinci Paragraf */}
            <div
              className={`fade-up-about-p2 ${
                isVisible ? 'fade-up-visible' : ''
              }`}
            >
              <p className="text-lg text-gray-700 font-sans leading-relaxed">
                Lezzet Bu Catering olarak, yemek yemenin sadece karın
                doyurmaktan ibaret olmadığına, bütünsel bir deneyim olduğuna
                inanıyoruz. Güler yüzleri ve özverili çalışmalarıyla tanınan
                ekibimiz, her ziyaretinizi unutulmaz bir ana dönüştürmek için
                gayret gösteriyor.
              </p>
            </div>

            {/* Buton - Sadece showButton true ise göster */}
            {showButton && (
              <div
                className={`fade-up-about-button ${
                  isVisible ? 'fade-up-visible' : ''
                } pt-4`}
              >
                <Link
                  href="/about"
                  className="group flex relative border-[1.5px] border-dark bg-transparent text-dark py-3 px-6 rounded-[118px] hover:border-[#f58220] hover:text-white transition-colors duration-300 font-sans text-base font-medium overflow-hidden w-fit"
                >
                  <span className="relative z-10 font-bold">Hakkımızda</span>
                  <div className="price-button-hover" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
