export type ServiceAreaKey =
  | 'corporate'
  | 'construction'
  | 'events'
  | 'education'
  | 'religious_bulk'
  | 'healthcare';

export type ServiceArea = {
  key: ServiceAreaKey;
  /** English URL segment, e.g. /services/corporate-factories */
  slug: string;
  title: string;
  description: string;
  detailMetaDescription: string;
  detailIntro: string;
  detailParagraphs: string[];
  detailHighlights: string[];
};

/** Yalnızca tarayıcı / Open Graph meta başlığı; ön yüzde `ServiceArea.title` kullanılır. */
export const SERVICE_META_TITLE_SUFFIX = ' Toplu Yemek Hizmeti';

export function withServiceMetaTitle(displayTitle: string): string {
  return `${displayTitle}${SERVICE_META_TITLE_SUFFIX}`;
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    key: 'corporate',
    slug: 'corporate-factories',
    title: 'Şirketler & Fabrikalar',
    description:
      'Fabrika ve ofisleriniz için kurumsal toplu yemek servisi hizmeti: günlük personel yemekleri, vardiyaya uygun tabldot ve taşıma paketleriyle kesintisiz, doyurucu servis sunuyoruz.',
    detailMetaDescription:
      'İstanbul’da fabrika ve ofis toplu yemek hizmeti, toplu yemek servisi ve tabldot. Vardiyaya uygun menü, düzenli teslimat ve doyurucu kurumsal catering.',
    detailIntro:
      'Kurumsal toplu yemek hizmeti ile çalışan memnuniyetini ve verimliliğini destekliyoruz; günlük sıcak yemeğin aksamadan sürmesi için menü ve toplu yemek servisi modelini birlikte planlıyoruz.',
    detailParagraphs: [
      'Toplu yemek servisi hizmeti kapsamında kahvaltı, öğle ve gece vardiyası gibi tüm dilimlere uygun öğün paketleri sunuyoruz. Yerinde üretim veya merkez mutaktan hazırlanan yemeklerin şubenize güvenli taşınmasıyla fabrika ve şirket mutfağı ihtiyaçlarınızı karşılıyoruz.',
      'Kurumsal kimliğinize uygun menü çeşitliliği ve doyurucu porsiyonlarla toplu yemek hizmetini sürdürülebilir kılınır; alerjen bilgilendirmesi ve raporlama taleplerinize uyum sağlarız.',
    ],
    detailHighlights: [
      'Kurumsal toplu yemek servisi ve tabldot',
      'Vardiya ve mesaiye uygun teslimat',
      'Ofis ve fabrika için ölçeklenebilir üretim',
      'Doyurucu menü ve özel diyet seçenekleri',
    ],
  },
  {
    key: 'construction',
    slug: 'construction-sites',
    title: 'Şantiye & İnşaat',
    description:
      'Şantiyeler için toplu yemek hizmeti: saha koşullarına uygun, hijyenik üretim ve zamanında teslimatla ekiplerinize doyurucu servis; inşaat sahalarında güvenilir toplu yemek servisi hizmeti sunuyoruz.',
    detailMetaDescription:
      'Şantiyeler için toplu yemek hizmeti ve inşaat sahası toplu yemek servisi. İstanbul’da doyurucu öğün, hijyenik paketleme ve planlı teslimat.',
    detailIntro:
      'Şantiyeler için toplu yemek hizmeti, sahada çalışan ekiplerin düzenli ve doyurucu beslenmesini sağlar; zorlu hava ve ulaşımda bile toplu yemek servisi hizmetini aksatmadan sürdürürüz.',
    detailParagraphs: [
      'İnşaat ve şantiye toplu yemek ihtiyaçlarında konteyner mutfağı, geçici yemek alanı veya toplu dağıtım noktasına uygun modellerle doyurucu servis sunuyoruz. Öğünleri sıcaklık ve hijyen standartlarında paketleyerek sahaya ulaştırıyoruz.',
      'Kalabalık şantiye ekipleri için toplu yemek servisi kapasitesini esnek planlar; proje boyunca kesintisiz toplu yemek hizmeti için günlük operasyon hattı sağlarız.',
    ],
    detailHighlights: [
      'Şantiyeler için toplu yemek ve doyurucu porsiyon',
      'Sahaya uygun paketleme ve dağıtım',
      'Ölçeklenebilir toplu yemek servisi',
      'Proje bazlı toplu yemek hizmeti sözleşmesi',
    ],
  },
  {
    key: 'events',
    slug: 'events',
    title: 'Organizasyon & Etkinlikler',
    description:
      'Davet, açılış ve seminerlerinizde etkinlik toplu yemek hizmeti ve toplu yemek servisi hizmeti: menüden servise konsept catering ile kalabalık misafir gruplarına profesyonel ve doyurucu servis.',
    detailMetaDescription:
      'Organizasyon ve etkinlik toplu yemek hizmeti, toplu yemek servisi. İstanbul’da kurumsal davetler için büfe, kokteyl ve oturmalı yemek çözümleri.',
    detailIntro:
      'Etkinlik toplu yemek hizmeti ile markanızın misafirperverliğini güçlendiriyoruz; küçük toplantılardan yüz kişilik organizasyonlara kadar toplu yemek servisi hizmetini tek elden yönetiyoruz.',
    detailParagraphs: [
      'Kokteyl, finger food, açık büfe ve oturmalı yemek formatlarında toplu yemek servisi sunuyor; kişi sayısına göre ölçeklenen doyurucu menüler ve servis ekibi koordinasyonu sağlıyoruz.',
      'Mekân, zaman çizelgesi ve özel diyet talepleriyle toplu yemek hizmetini önceden netleştirir; etkinlik günü sorunsuz toplu yemek servisi hizmeti hedefleriz.',
    ],
    detailHighlights: [
      'Etkinlik toplu yemek servisi ve büfe',
      'Kalabalık gruplar için ölçeklenebilir menü',
      'Doyurucu ve çeşitli öğün seçenekleri',
      'Servis personeli ve operasyon desteği',
    ],
  },
  {
    key: 'education',
    slug: 'schools-daycare',
    title: 'Okullar & Kreşler',
    description:
      'Okul ve kreş toplu yemek hizmeti: yaş gruplarına uygun, dengeli menülerle öğrencilere toplu yemek servisi hizmeti; güvenilir tedarik ve doyurucu, besleyici öğünler.',
    detailMetaDescription:
      'Okul ve kreş toplu yemek hizmeti, eğitim kurumları için toplu yemek servisi. Yaşa uygun menü, dengeli beslenme ve İstanbul’da güvenilir catering.',
    detailIntro:
      'Okul toplu yemek hizmeti ile çocukların sağlıklı beslenmesine katkı sağlıyoruz; toplu yemek servisi hizmetinde porsiyon, tuz-şeker dengesi ve çeşitliliği veli ve kurum beklentilerine göre planlıyoruz.',
    detailParagraphs: [
      'Kreş ve okullarda günlük toplu yemek servisi ile alerjen ve diyet alternatifleri sunar; mevsimsel ürünlerle doyurucu menüler hazırlarız.',
      'Kurum denetimlerine uyum için toplu yemek hizmeti süreçlerinde izlenebilirlik ve dokümantasyon taleplerinize yanıt verebiliriz.',
    ],
    detailHighlights: [
      'Okul ve kreş toplu yemek servisi',
      'Yaşa uygun doyurucu porsiyonlar',
      'Haftalık / aylık toplu yemek menü planı',
      'Alerjen bilgilendirmesi ve kurumsal sözleşme',
    ],
  },
  {
    key: 'religious_bulk',
    slug: 'iftar-mevlit-bulk',
    title: 'İftar, Mevlit ve Toplu Yemek Organizasyonları',
    description:
      'İftar, mevlit ve hayır sofralarında dini ve toplu organizasyon toplu yemek hizmeti; kalabalık gruplara toplu yemek servisi hizmeti, hijyenik üretim ve zamanında doyurucu servis.',
    detailMetaDescription:
      'İftar ve mevlit toplu yemek hizmeti, hayır yemeği toplu yemek servisi. Cami ve dernek organizasyonları için İstanbul’da güvenilir toplu ikram.',
    detailIntro:
      'Ramazan iftarları, mevlid ve hayır yemeklerinde yüzlerce kişiye aynı anda toplu yemek servisi hizmeti sunmak planlı operasyon ister; bu özel günlere saygılı toplu yemek hizmeti yürütüyoruz.',
    detailParagraphs: [
      'İftar ve sahur toplu yemek hizmetinde menü, dağıtım noktası ve zamanlamayı önceden netleştirir; kalabalık gruplar için paketli toplu yemek servisi ile sırayı kısaltırız.',
      'Mevlit ve hayır sofralarında ana yemek, çorba ve tatlı ikramlarında toplu yemek servisi hizmeti ile bütçenize uygun, doyurucu paketler hazırlarız.',
    ],
    detailHighlights: [
      'İftar ve hayır yemeği toplu yemek hizmeti',
      'Mevlit ve toplu ikram toplu yemek servisi',
      'Cami ve dernek için ölçeklenebilir servis',
      'Kalabalık gruplara doyurucu menü',
    ],
  },
  {
    key: 'healthcare',
    slug: 'healthcare',
    title: 'Sağlık Kuruluşları',
    description:
      'Hastane ve polikliniklerde sağlık kurumu toplu yemek hizmeti; personel ve hasta öğünleri için toplu yemek servisi hizmeti, diyet uyumu ve düzenli doyurucu servis.',
    detailMetaDescription:
      'Hastane toplu yemek hizmeti ve sağlık tesisi toplu yemek servisi. Hasta ve personel öğünleri, diyet menüleri ve İstanbul’da mevzuata uygun catering.',
    detailIntro:
      'Sağlık kurumları toplu yemek hizmetinde öğünlerin zamanında ve doğru sıcaklıkta sunulması kritiktir; hasta ve personel için ayrı toplu yemek servisi hizmeti süreçleri yürütebiliriz.',
    detailParagraphs: [
      'Hastane mutfağı veya dış kaynak toplu yemek hizmeti modelinde diyet kodları, doktor onaylı menüler ve özel diyetler için toplu yemek servisi planı kurarız.',
      'Vardiya bazlı personel toplu yemek hizmeti ve yoğun saatlerde kesintisiz toplu yemek servisi için operasyon ekibimizle koordineli çalışırız.',
    ],
    detailHighlights: [
      'Hasta ve personel toplu yemek servisi',
      'Diyet ve kısıtlı menülü toplu yemek hizmeti',
      'Düzenli teslimat ve sıcaklık kontrolü',
      'Kurum prosedürlerine uygun toplu yemek süreci',
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICE_AREAS.map((s) => s.slug);
}
