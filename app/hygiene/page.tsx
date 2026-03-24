'use client';

import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { MdOutlineCleaningServices, MdOutlineFoodBank, MdOutlineShield, MdOutlineSchool, MdOutlineEmergency } from 'react-icons/md';

export default function HijyenPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      setIsHeroLoaded(true);
    });
  }, []);

  useEffect(() => {
    const introObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntroVisible(true);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 80px 0px',
      }
    );

    // Grid bölümü mobilde çok uzun; threshold 0.2 = tüm section'un %20'si görünmeli → mobilde tetiklenmeyebilir
    const sectionsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 120px 0px',
      }
    );

    if (introRef.current) {
      introObserver.observe(introRef.current);
    }

    if (sectionRef.current) {
      sectionsObserver.observe(sectionRef.current);
    }

    return () => {
      introObserver.disconnect();
      sectionsObserver.disconnect();
    };
  }, []);

  const sections = [
    {
      id: 0,
      icon: <MdOutlineCleaningServices className="w-8 h-8 text-[#f58220]" />,
      title: 'Hijyen Standartları ve Sanitasyon Prosedürleri',
      content:
        'Catering hizmetlerinde hijyen, gıda güvenliğinin en temel gerekliliklerindendir. Mutfak ortamının ve kullanılan ekipmanların düzenli olarak temizlenmesi, gıdaların kontaminasyonunu önler. Çalışanların hijyen kurallarına uyması, eldiven ve maske gibi kişisel koruyucu ekipman kullanması sağlanmalıdır. Hijyen prosedürlerine uygun bir ortam yaratılarak, gıdaların güvenli şekilde hazırlanması ve sunulması garanti altına alınabilir.',
    },
    {
      id: 1,
      icon: <MdOutlineFoodBank className="w-8 h-8 text-[#f58220]" />,
      title: 'Gıda Saklama ve Isı Kontrolü',
      content:
        'Catering hizmetlerinde gıdaların doğru koşullarda saklanması ve uygun sıcaklıklarda sunulması, besin güvenliği için büyük önem taşır. Soğuk zincirin korunması, bozulabilir ürünlerin doğru sıcaklıklarda saklanması ve sıcak yemeklerin gerekli ısılarda servis edilmesi, bakteri üremesini önler. Özellikle çiğ et ve süt ürünlerinin uygun şartlarda saklanması, gıda kaynaklı hastalıkları önlemek için kritik bir adımdır.',
    },
    {
      id: 2,
      icon: <MdOutlineShield className="w-8 h-8 text-[#f58220]" />,
      title: 'Çapraz Bulaşmayı Önleme',
      content:
        'Çapraz bulaşma, farklı gıdaların birbirine teması ile oluşan bir kontaminasyon türüdür ve catering hizmetlerinde sıkça karşılaşılan bir risktir. Bu durumu önlemek için çiğ ve pişmiş gıdaların ayrı tutulması, farklı kesim tahtaları ve bıçaklar kullanılması önemlidir. Ayrıca, alerjen içeren gıdaların ayrı yerlerde hazırlanması, çapraz bulaşmanın önlenmesinde etkili bir uygulamadır. Bu şekilde, müşterilere güvenli ve sağlıklı bir yemek deneyimi sunulabilir.',
    },
    {
      id: 3,
      icon: <MdOutlineSchool className="w-8 h-8 text-[#f58220]" />,
      title: 'Çalışan Eğitimi ve Denetimler',
      content:
        'Catering hizmetlerinde görev yapan personelin sağlık ve güvenlik konularında bilinçlendirilmesi, hizmetin kalitesini doğrudan etkiler. Gıda güvenliği, hijyen standartları ve acil durum prosedürleri gibi konularda eğitimler verilmeli ve düzenli olarak denetimler yapılmalıdır. Eğitimli çalışanlar, hijyen kurallarına uyma konusunda daha dikkatli davranır ve hizmet kalitesinin devamlılığını sağlar. Ayrıca, düzenli denetimler ile hijyen ve güvenlik standartlarının sürdürülebilirliği sağlanabilir.',
    },
    {
      id: 4,
      icon: <MdOutlineEmergency className="w-8 h-8 text-[#f58220]" />,
      title: 'Acil Durum Planları ve İlk Yardım Hazırlıkları',
      content:
        'Gıda güvenliğini sağlamak kadar, olası acil durumlar için hazırlıklı olmak da önemlidir. Catering firmaları, yangın, elektrik kesintisi, ekipman arızası gibi durumlar için acil durum planlarına sahip olmalıdır. Ayrıca, çalışanların ilk yardım eğitimi alması ve mutfakta temel ilk yardım malzemelerinin bulundurulması, çalışan ve müşteri güvenliği açısından gereklidir. Acil durumlara hazırlıklı olmak, catering hizmetlerinin güvenilirliğini artırır ve müşteri memnuniyetini sağlar.',
    },
    {
      id: 5,
      icon: <MdOutlineShield className="w-8 h-8 text-[#f58220]" />,
      title: 'Belgelerimiz ve Standartlarımız',
      content:
        'LezzetBU Catering, ulusal ve uluslararası gıda güvenliği standartlarına uyum sağlamak için düzenli olarak belgelendirme ve denetim süreçlerinden geçer. Mevcut ve hedeflenen belgelerimizi şeffaf bir şekilde paylaşarak, iş ortaklarımıza güven vermeyi amaçlıyoruz. ISO 22000 Gıda Güvenliği Yönetim Sistemi (mevcut veya hedef durum bilgisi). ISO 9001 Kalite Yönetim Sistemi ve ilgili iç denetim süreçleri. Yerel belediye ve ilgili resmi kurumların periyodik hijyen denetimleri. Personel hijyen eğitim sertifikaları ve zorunlu sağlık kontrolleri kayıtları. Talep eden kurumsal müşterilerimizle; güncel analiz raporları, denetim sonuçları ve sertifikalarımızı paylaşarak karar süreçlerini destekliyoruz.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-[#f58220]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/hero-banner.jpg"
            alt="Hijyen"
            className="w-full h-full object-cover"
            width={1920}
            height={400}
          />
        </div>
        <div className="container mx-auto max-w-[1320px] px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className={`fade-up-hygiene-hero-title ${
                isHeroLoaded ? 'fade-up-visible' : ''
              } text-4xl md:text-5xl lg:text-6xl font-secondary font-medium text-white mb-4 leading-tight`}
            >
              Catering Hizmetlerinde Sağlık ve Güvenlik
            </h1>
            <p
              className={`fade-up-hygiene-hero-subtitle ${
                isHeroLoaded ? 'fade-up-visible' : ''
              } text-lg md:text-xl text-white/90 font-sans`}
            >
              Gıda güvenliği ve hijyen standartlarımız
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={introRef} className="bg-white py-16">
        <div className="container mx-auto max-w-[1320px] px-4">
          <div className="max-w-4xl mx-auto">
            <p
              className={`fade-up-hygiene-intro ${
                isIntroVisible ? 'fade-up-visible' : ''
              } text-lg text-gray-700 font-sans leading-relaxed text-center`}
            >
              Catering hizmetleri, geniş kitlelere yemek sunarken sağlık ve güvenlik standartlarına uyulması gereken bir sektördür. Gıda güvenliği ve hijyen, catering hizmetlerinde en temel önceliklerden biridir. Güvenli bir catering deneyimi sağlamak, hem müşterinin sağlığını korumak hem de hizmet kalitesini yükseltmek için önemlidir.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section ref={sectionRef} className="bg-[#f9f9f7] py-20">
        <div className="container mx-auto max-w-[1320px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`fade-up-hijyen fade-up-hijyen-${index} ${
                  isVisible ? 'fade-up-visible' : ''
                } bg-white rounded-2xl p-8 md:p-12 shadow-sm`}
              >
                <div className="flex flex-col items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#f5822012] flex items-center justify-center">
                    {section.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2
                      className={`fade-up-hijyen-title fade-up-hijyen-title-${index} ${
                        isVisible ? 'fade-up-visible' : ''
                      } text-2xl md:text-3xl font-secondary font-medium text-dark mb-4`}
                    >
                      {section.title}
                    </h2>
                    <p
                      className={`fade-up-hijyen-content fade-up-hijyen-content-${index} ${
                        isVisible ? 'fade-up-visible' : ''
                      } text-base md:text-lg text-gray-700 font-sans leading-relaxed`}
                    >
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
