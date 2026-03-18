'use client';

import { useEffect, useRef, useState } from 'react';
import {
  MdBusiness,
  MdConstruction,
  MdEvent,
  MdSchool,
  MdLocalHospital,
} from 'react-icons/md';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    icon: <MdBusiness className="text-[#4d592b] size-12" />,
    title: 'Şirketler & Fabrikalar',
    description:
      'Ofis ve üretim tesislerinizde günlük personel yemekleri, vardiya düzeninize uygun tabldot ve taşıma paket çözümleriyle kesintisiz catering hizmeti sunuyoruz.',
  },
  {
    icon: <MdConstruction className="text-[#4d592b] size-12" />,
    title: 'Şantiye & İnşaat',
    description:
      'Saha koşullarına uygun, hijyen ve gıda güvenliği standartlarında üretilen öğünleri zamanında teslim ederek şantiye ekiplerinize doyurucu hizmet sağlıyoruz.',
  },
  {
    icon: <MdEvent className="text-[#4d592b] size-12" />,
    title: 'Organizasyon & Etkinlikler',
    description:
      'Açılış, davet, seminer ve kurumsal etkinlikleriniz için menüden servise kadar özel konsept catering ile misafirlerinize profesyonel bir deneyim sunuyoruz.',
  },
  {
    icon: <MdSchool className="text-[#4d592b] size-12" />,
    title: 'Okullar & Kreşler',
    description:
      'Yaş gruplarına uygun, dengeli ve besleyici menülerle öğrenci ve çocukların sağlıklı beslenmesine katkı sağlayan güvenilir yemek hizmeti veriyoruz.',
  },
  {
    icon: <MdLocalHospital className="text-[#4d592b] size-12" />,
    title: 'Sağlık Kuruluşları',
    description:
      'Hastane, poliklinik ve sağlık merkezlerinde personel ile hasta öğünleri için düzenli, kontrollü ve mevzuata uygun yemek çözümleri sunuyoruz.',
  },
];

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
          } mb-16`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-secondary font-medium text-dark text-center">
            Hizmet Alanlarımız
          </h2>
        </div>

        {/* lg+: üst satır 3 kart, alt satır 2 kart ortada | md: 2 sütun | mobil: 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {services.map((service, index) => {
            const row2Left = index === 3;
            const row2Right = index === 4;
            return (
            <div
              key={index}
              className={`fade-up-card fade-up-card-${index} ${
                isVisible ? 'fade-up-visible' : ''
              } lg:col-span-2 ${row2Left ? 'lg:col-start-2' : ''} ${
                row2Right ? 'lg:col-start-4' : ''
              }`}
            >
              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col items-center text-center">
                <div className="mb-6 flex justify-center w-[100px] h-[100px] rounded-full bg-[#4d592b12] items-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-4 leading-snug">
                  {service.title}
                </h3>
                <p className="text-base text-gray-600 font-sans flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
