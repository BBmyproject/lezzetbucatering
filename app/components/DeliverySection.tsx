'use client';

import { useEffect, useRef, useState } from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { RiDiscountPercentLine } from 'react-icons/ri';

export default function DeliverySection() {
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
    <section ref={sectionRef} className="bg-[#f9f9f7] py-20">
      <div className="container mx-auto max-w-[1320px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Sol Taraf - Görseller (60%) */}
          <div className="grid grid-cols-[0.6fr_0.4fr] gap-4 lg:col-span-3">
            {/* Büyük Görsel - Sol */}
            <div className="row-span-2">
              <div
                className={`fade-left-image ${
                  isVisible ? 'fade-left-visible' : ''
                }`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/images/delivery-main.jpg"
                    alt="Delivery Main"
                    className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                    width={600}
                    height={800}
                  />
                </div>
              </div>
            </div>

            {/* Küçük Görsel 1 - Sağ Üst */}
            <div
              className={`fade-up-image fade-up-image-0 flex items-end ${
                isVisible ? 'fade-up-visible' : ''
              }`}
            >
              <div className="relative w-full h-auto md:h-[300px] rounded-2xl overflow-hidden">
                <img
                  src="/images/delivery-1.jpeg"
                  alt="Delivery 1"
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={300}
                />
              </div>
            </div>

            {/* Küçük Görsel 2 - Sağ Alt */}
            <div
              className={`fade-up-image fade-up-image-1 ${
                isVisible ? 'fade-up-visible' : ''
              }`}
            >
              <div className="relative w-full h-auto md:h-[300px] rounded-2xl overflow-hidden">
                <img
                  src="/images/delivery-2.jpg"
                  alt="Delivery 2"
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>

          {/* Sağ Taraf - İçerik (40%) */}
          <div className="space-y-8 lg:col-span-2">
            {/* Başlık */}
            <div
              className={`fade-up-title ${
                isVisible ? 'fade-up-visible' : ''
              }`} 
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-secondary font-medium text-dark leading-tight">
                Şehrin En Hızlı<br/>Yemek Teslimatı
              </h2>
            </div>

            {/* Alt Başlık */}
            <div
              className={`fade-up-description ${
                isVisible ? 'fade-up-visible' : ''
              }`}
            >
              <p className="text-lg text-gray-700 font-sans leading-relaxed">
                Taze hazırlanan lezzetleri hızlı, güvenilir ve sıcak şekilde
                kapınıza ulaştırıyoruz.
              </p>
            </div>

            {/* Özellikler */}
            <div className="space-y-6">
              {/* Özellik 1 */}
              <div
                className={`fade-up-feature fade-up-feature-0 ${
                  isVisible ? 'fade-up-visible' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f58220] flex items-center justify-center">
                  <IoTimeOutline className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-xl font-medium text-dark">
                      Gün içi içinde teslimat
                    </h3>
                  </div>
                </div>
              </div>

              {/* Özellik 2 */}
              <div
                className={`fade-up-feature fade-up-feature-1 ${
                  isVisible ? 'fade-up-visible' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f58220] flex items-center justify-center">
                    <RiDiscountPercentLine className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-xl font-medium text-dark">
                      En İyi Teklif ve Fiyatlar
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
