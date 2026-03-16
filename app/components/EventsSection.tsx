'use client';

import { useEffect, useRef, useState } from 'react';

interface EventCard {
  image: string;
  title: string;
  description: string;
}

const events: EventCard[] = [
  {
    image: '/images/event-1.jpeg',
    title: 'Tabldot Yemek',
    description:
      'Ana faaliyet alanlarımızdan biri olan Tabldot Yemek (Taşıma Yemek) hizmeti ile, işyerlerinize yemeklerinizi Lezzet Bu Catring Yemek güvencesiyle ulaştırıyoruz.',
  },
  {
    image: '/images/event-2.jpg',
    title: 'Taşıma Paket',
    description:
      'Taşıma paket yemek hizmetimizde yemekleriniz tek tek porsiyonlanır ve özenle paketlenir. Paket yemek servisi sayesinde hızlı ve lezzetli catering çözümleri sunarız.',
  },
  {
    image: '/images/event-3.jpg',
    title: 'Yerinde Üretim',
    description:
      'Şirket bünyesinde Yerinde Üretim talebinde bulunan müşterilerinin ihtiyaçlarına cevap vermek için, ilk olarak yemek üretimi yapılacak yeri',
  },
  {
    image: '/images/event-4.png',
    title: 'Şantiye Yemeği',
    description:
      'İstanbulun her noktasındaki şantiyeler için özel olarak tasarlanmış, besleyici ve doyurucu şantiye yemeği catering servisi sunuyoruz.',
  },
];

export default function EventsSection() {
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
        {/* Başlık */}
        <div
          className={`fade-up-title ${
            isVisible ? 'fade-up-visible' : ''
          } mb-16`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-secondary font-medium text-dark text-left">
            Etkinlikleriniz için<br></br>benzersiz hizmetler sunuyoruz
          </h2>
        </div>

        {/* Event Card'lar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className={`fade-up-card fade-up-card-${index} ${
                isVisible ? 'fade-up-visible' : ''
              }`}
            >
              <div className="bg-white overflow-hidden h-full flex flex-col">
                {/* Fotoğraf */}
                <div className="relative rounded-2xl w-full h-[350px] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={250}
                  />
                </div>

                {/* İçerik */}
                <div className="py-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-dark mb-4">
                    {event.title}
                  </h3>
                  <p className="text-base text-gray-600 font-sans flex-grow">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
