'use client';

import { useEffect, useRef, useState } from 'react';

const MENU_PACKAGES = [
  {
    id: 0,
    title: "4'lü Menü",
    items: [
      'Çorba',
      'Yardımcı Yemekler (Pirinç Pilavı vb.)',
      'Ana Yemek',
      'İçecek – Tatlı – Salata',
    ],
  },
  {
    id: 1,
    title: "5'li Menü",
    items: [
      'Çorba',
      'Yardımcı Yemekler (Pirinç Pilavı vb.)',
      'Ana Yemek',
      'İçecek – Tatlı – Salata',
      'Zeytinyağlılar',
    ],
  },
  {
    id: 2,
    title: "6'lı Menü",
    items: [
      'Çorba',
      'Yardımcı Yemekler (Pirinç Pilavı vb.)',
      'Ana Yemek',
      'İçecek – Tatlı – Salata',
      'Zeytinyağlılar',
      'Tamamlayıcılar (Meyve – Ezme vb.)',
    ],
  },
];

const WEEKLY_EXAMPLES: string[][] = [
  ['Mercimek Çorbası', 'Pirinç Pilavı', 'Fırın Tavuk', 'Salata'],
  ['Ezogelin Çorbası', 'Pirinç Pilavı', 'Tas Kebabı', 'Cacık'],
  ['Tarhana Çorbası', 'Makarna', 'Tavuk Sote', 'İçecek'],
  ['Mercimek Çorbası', 'Bulgur Pilavı', 'Kadınbudu Köfte', 'Tatlı'],
  ['Tavuk Suyu Çorbası', 'Pirinç Pilavı', 'Dana Haşlama', 'Salata'],
  ['Domates Çorbası', 'Bulgur Pilavı', 'Karnıyarık', 'Cacık'],
  ['Yayla Çorbası', 'Pirinç Pilavı', 'Taze Fasulye', 'Tatlı'],
];

const CATEGORY_LABELS = ['Çorba', 'Yardımcı', 'Ana Yemek', 'Tamamlayıcı'];

/** 10 marka — public/images/brand-1.webp … brand-10.webp */
const BRANDS: { name: string; logo: string }[] = Array.from(
  { length: 10 },
  (_, i) => ({
    name: `Marka ${i + 1}`,
    logo: `/images/brand-${i + 1}.webp`,
  })
);

const BRAND_ROWS = [
  BRANDS.slice(0, 3),
  BRANDS.slice(3, 7),
  BRANDS.slice(7, 10),
] as const;

export default function MenuPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeadVisible, setIsHeadVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const exampleRef = useRef<HTMLDivElement>(null);
  const [isExampleVisible, setIsExampleVisible] = useState(false);
  const brandsRef = useRef<HTMLElement>(null);
  const [isBrandsVisible, setIsBrandsVisible] = useState(false);

  useEffect(() => {
    const headObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setIsHeadVisible(true));
      },
      { threshold: 0.2 }
    );
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setIsVisible(true));
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );
    const exampleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setIsExampleVisible(true));
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );
    const brandsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setIsBrandsVisible(true));
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    if (headRef.current) headObserver.observe(headRef.current);
    if (sectionRef.current) sectionObserver.observe(sectionRef.current);
    if (exampleRef.current) exampleObserver.observe(exampleRef.current);
    if (brandsRef.current) brandsObserver.observe(brandsRef.current);

    return () => {
      headObserver.disconnect();
      sectionObserver.disconnect();
      exampleObserver.disconnect();
      brandsObserver.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto max-w-[1320px] px-4 py-16 md:py-24">
        {/* Başlık */}
        <div ref={headRef} className="text-center mb-14 md:mb-20">
          <h1
            className={`fade-up-menu-title text-6xl md:text-7xl lg:text-8xl font-secondary font-medium text-dark mb-4 ${
              isHeadVisible ? 'fade-up-visible' : ''
            }`}
          >
            Menümüz
          </h1>
          <p
            className={`fade-up-menu-subtitle text-lg md:text-xl text-[#495460] font-sans max-w-2xl mx-auto ${
              isHeadVisible ? 'fade-up-visible' : ''
            }`}
          >
            İhtiyacınıza uygun menü paketleri ile taze ve lezzetli öğünler
            sunuyoruz. Aşağıdaki seçeneklerden birini seçebilir veya özel
            menü talebinde bulunabilirsiniz.
          </p>
        </div>

        {/* 3 Menü Paketi Kartları */}
        <section ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {MENU_PACKAGES.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`fade-up-menu-card fade-up-menu-card-${index} ${
                isVisible ? 'fade-up-visible' : ''
              } bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-[#dbdfd0]`}
            >
              <h2 className="text-xl md:text-2xl font-secondary font-medium text-dark mb-5">
                {pkg.title}
              </h2>
              <ul className="space-y-3 font-sans text-dark">
                {pkg.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#f58220] shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Örnek Menü */}
        <section ref={exampleRef} className="pb-16">
          <h2
            className={`fade-up-menu-example-title text-3xl md:text-4xl font-secondary font-medium text-dark text-center mb-3 ${
              isExampleVisible ? 'fade-up-visible' : ''
            }`}
          >
            Menü Örnekleri
          </h2>
          <p
            className={`fade-up-menu-example-subtitle text-center text-dark font-sans mb-10 ${
              isExampleVisible ? 'fade-up-visible' : ''
            }`}
          >
            Haftalık 4 Çeşit Menü Kategorisi
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {WEEKLY_EXAMPLES.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`fade-up-menu-example-card fade-up-menu-example-${rowIndex} ${
                  isExampleVisible ? 'fade-up-visible' : ''
                } bg-white rounded-xl p-5 shadow-sm border border-[#dbdfd0]`}
              >
                <div className="space-y-2">
                  {row.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-2 text-sm md:text-base font-sans text-dark"
                    >
                      <span className="text-[#f58220] font-medium shrink-0">
                        {CATEGORY_LABELS[i]}:
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
        {/* Markalar — %35 başlık / %65 logo alanı (3-4-3) */}
        <section
          ref={brandsRef}
          className="pt-20 pb-20 bg-[#f9f9f7]"
        >
          <div className="container mx-auto max-w-[1320px] px-4 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-12">
            <div className="w-full lg:w-[35%] lg:max-w-[35%] lg:shrink-0">
              <h2
                className={`fade-up-menu-brands-title text-4xl md:text-6xl font-secondary font-medium text-dark mb-3 ${
                  isBrandsVisible ? 'fade-up-visible' : ''
                }`}
              >
                Kullandığımız Markalar
              </h2>
              <p
                className={`fade-up-menu-brands-subtitle text-sm md:text-base text-dark font-sans leading-relaxed ${
                  isBrandsVisible ? 'fade-up-visible' : ''
                }`}
              >
                Güvenilir tedarikçilerimiz ve iş ortaklarımızla kaliteli
                ürünler sunuyoruz.
              </p>
            </div>

            <div className="flex w-full flex-col gap-6 md:gap-8 lg:w-[65%] lg:min-w-0">
              {BRAND_ROWS.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  className={
                    rowIdx === 1
                      ? 'grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6'
                      : 'grid grid-cols-3 gap-4 md:gap-6 md:px-10'
                  }
                >
                  {row.map((brand, colIdx) => {
                    const globalIndex =
                      rowIdx === 0
                        ? colIdx
                        : rowIdx === 1
                          ? 3 + colIdx
                          : 7 + colIdx;
                    return (
                      <div
                        key={globalIndex}
                        className={`fade-up-menu-brand-slot fade-up-menu-brand-${globalIndex} ${
                          isBrandsVisible ? 'fade-up-visible' : ''
                        } flex h-24 items-center justify-center rounded-xl border border-[#dbdfd0] bg-white px-4 py-3 shadow-sm md:h-28`}
                      >
                        {brand.logo ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={brand.logo}
                            alt={brand.name}
                            className="max-h-14 w-auto max-w-full object-contain md:max-h-16"
                          />
                        ) : (
                          <span className="text-center text-xs font-sans text-[#8a9399] md:text-sm">
                            {brand.name}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>
    </main>
  );
}
