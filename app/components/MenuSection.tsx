'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { LuCookingPot } from 'react-icons/lu';
import { PiBowlFood } from 'react-icons/pi';
import { MdLocalDrink } from 'react-icons/md';
import { LuSalad } from 'react-icons/lu';
import { LuDessert } from 'react-icons/lu';
import { RiBowlLine } from 'react-icons/ri';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    icon: <RiBowlLine className="text-[#f58220] size-12" />,
    title: 'Çorba',
    description:
      'Günün menüsüne sıcak bir başlangıç sunan, mevsimine uygun malzemelerle hazırlanan çorba seçenekleri.',
  },
  {
    icon: <PiBowlFood className="text-[#f58220] size-12" />,
    title: 'Yardımcı Yemekler',
    description:
      'Ana yemeği destekleyen pilav, makarna ve benzeri yardımcı yemeklerle dengeli ve doyurucu tabaklar.',
  },
  {
    icon: <LuCookingPot className="text-[#f58220] size-12" />,
    title: 'Ana Yemek',
    description:
      'Özenle pişirilen etli, tavuklu veya sebzeli ana yemek seçenekleriyle her öğünde güçlü lezzet sunuyoruz.',
  },
  {
    icon: <MdLocalDrink className="text-[#f58220] size-12" />,
    title: 'İçecek',
    description:
      'Menüye eşlik eden sıcak ve soğuk içecek alternatifleriyle servis deneyimini tamamlıyoruz.',
  },
  {
    icon: <LuSalad className="text-[#f58220] size-12" />,
    title: 'Salata',
    description:
      'Taze sebzelerle hazırlanan ferah salata çeşitleriyle menüye hafiflik ve denge katıyoruz.',
  },
  {
    icon: <LuDessert className="text-[#f58220] size-12" />,
    title: 'Tatlı',
    description:
      'Yemek sonrası keyfi artıran geleneksel ve modern tatlı alternatifleriyle menüyü tatlı bir finalle bitiriyoruz.',
  },
];

export default function MenuSection() {
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
    <section
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto max-w-[1320px] px-4">
        {/* Başlık */}
        <div
          className={`fade-up-title ${
            isVisible ? 'fade-up-visible' : ''
          } mb-16`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-secondary font-medium text-dark text-center">
            Menü İçerikleri
          </h2>
        </div>

        {/* Card'lar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`fade-up-card fade-up-card-${index} ${
                isVisible ? 'fade-up-visible' : ''
              }`}
            >
              <div className="bg-white border border-gray-200 rounded-lg py-8 px-4 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-6 flex justify-center w-[100px] h-[100px] rounded-full bg-[#f5822012] items-center">
                  {service.icon}
                </div>

                {/* İçerik */}
                <h3 className="lg:text-2xl text-xl font-bold text-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 font-sans">
                  {service.description}
                </p>
                <Link
                  href="/menu"
                  className="mt-4 inline-block text-[#f58220] font-bold text-sm transition-colors"
                >
                  İncele
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
