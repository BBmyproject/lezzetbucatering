'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutFeatures() {
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
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px',
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

  const features = [
    {
      id: 0,
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" id="svg-1954564102_753">
            <path d="M38 46L6 43V5L38 2V46Z" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M44 6V42" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M13 29H29" stroke="#ED5700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M13 36L29 37" stroke="#ED5700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M21 22C24.3137 22 27 19.3137 27 16C27 12.6863 24.3137 10 21 10C17.6863 10 15 12.6863 15 16C15 19.3137 17.6863 22 21 22Z" stroke="#ED5700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      title: 'Çoklu Mutfak',
      text: 'Çoklu mutfaklarla çeşitli yemek seçenekleri',
    },
    {
      id: 1,
      svg: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" id="svg1081368206_1036">
                <path d="M38 22H10V38H38V22Z" stroke="#ED5700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M31 28H17" stroke="#ED5700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M29 12C30.1046 12 31 11.1046 31 10C31 8.89543 30.1046 8 29 8C27.8954 8 27 8.89543 27 10C27 11.1046 27.8954 12 29 12Z" fill="#f58220"></path>
                <path d="M37 12C38.1046 12 39 11.1046 39 10C39 8.89543 38.1046 8 37 8C35.8954 8 35 8.89543 35 10C35 11.1046 35.8954 12 37 12Z" fill="#f58220"></path>
                <path d="M40 4H8C5.79086 4 4 5.79086 4 8V40C4 42.2091 5.79086 44 8 44H40C42.2091 44 44 42.2091 44 40V8C44 5.79086 42.2091 4 40 4Z" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M10 10H16" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M4 16H44" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
      ),
      title: 'Kolay Sipariş',
      text: 'Kolay sipariş verme ve hızlı teslimat',
    },
    {
      id: 2,
      svg: (
            <svg width="36" height="44" viewBox="0 0 36 44" fill="none" id="svg1454246236_1543">
                <path d="M36 26V44H0V26" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M11 0H25" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M18 26L26.5 17.5" stroke="#ED5700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M18 0V3" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M18 44C27.9411 44 36 35.9411 36 26C36 16.0589 27.9411 8 18 8C8.05887 8 0 16.0589 0 26C0 35.9411 8.05887 44 18 44Z" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M18 14V16" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M30 26H28" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M26.4843 34.4848L25.0703 33.0708" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M18 38V36" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M9.51562 34.4848L10.9296 33.0708" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M6 26H8" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M9.51562 17.5151L10.9296 18.9291" stroke="#f58220" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
      ),
      title: 'Hızlı Teslimat',
      text: 'Hızlı ve güvenilir teslimat hizmeti',
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[#f9f9f7] py-20">
      <div className="container mx-auto max-w-[1320px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`fade-up-feature fade-up-feature-${index} ${
                isVisible ? 'fade-up-visible' : ''
              } flex items-center gap-4`}
            >
              {/* Sol Taraf - SVG */}
              <div className="flex-shrink-0">{feature.svg}</div>

              {/* Sağ Taraf - Metin */}
              <div className="flex-1">
                <h3 className="text-xl text-dark font-bold mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-[#414536] font-sans leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
