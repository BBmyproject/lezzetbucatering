import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2c2f24] border-t border-gray-200 ">
      <div className="container mx-auto max-w-[1320px] px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sol - Logo ve kısa metin */}
          <div className="space-y-3">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Lezzet Bu Catering - Ana sayfa"
            >
              <img
                src="/footer-logo.png"
                alt="Lezzet Bu Catering"
                className="h-11 w-auto max-w-[220px] object-contain object-left opacity-95 hover:opacity-100 transition-opacity"
                width={200}
                height={48}
              />
            </Link>
            <p className="text-md text-[#adb29e] font-sans max-w-xs">
              Etkinlikleriniz için taze, lezzetli ve profesyonel catering
              çözümleri sunuyoruz.
            </p>
          </div>

          {/* Navigasyon */}
          <div>
            <nav>
              <ul className="flex flex-col gap-3 text-sm font-sans text-[#dbdfd0]">
                <h2 className="text-lg font-semibold text-white mb-4">Sayfalar</h2>
                <li>
                  <Link href="/" className="hover:text-[#f58220] transition-colors">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#f58220] transition-colors"
                  >
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-[#f58220] transition-colors"
                  >
                    Hizmetlerimiz
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="hover:text-[#f58220] transition-colors">
                    Menü
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hygiene"
                    className="hover:text-[#f58220] transition-colors"
                  >
                    Hijyen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#f58220] transition-colors"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-7">İletişim</h2>
            <div className="flex flex-col gap-3 text-sm font-sans text-[#dbdfd0]">
              <div className="group flex items-center gap-2 cursor-pointer">
                <FaPhoneAlt className="text-white text-base group-hover:text-[#f58220] transition-colors" />
                <a
                  href="tel:+905434566278"
                  className="text-[#dbdfd0] group-hover:text-[#f58220] transition-colors"
                >
                  +90 543 456 62 78
                </a>
              </div>
              <div className="group flex items-center gap-2 cursor-pointer">
                <FiMail className="text-white text-base group-hover:text-[#f58220] transition-colors" />
                <a
                  href="mailto:lezzetbucatering@gmail.com"
                  className="text-[#dbdfd0] group-hover:text-[#f58220] transition-colors"
                >
                  lezzetbucatering@gmail.com
                </a>
              </div>
              <div className="group flex items-center gap-2">
                <FaMapMarkerAlt className="text-white text-base group-hover:text-[#f58220] transition-colors" />
                <span className="text-[#dbdfd0] group-hover:text-[#f58220] transition-colors">Zekeriyaköy Mah. 5. Cad. Eğrisel Blok No: 7 İç Kapı No: 22 Sarıyer/İstanbul</span>
              </div>
            </div>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Bizi Takip Edin</h2>
            <div className="flex items-center gap-2">
              <Link
                href="https://www.instagram.com/lezzetbucatering"
                className="group text-white transition-all bg-[#737865] p-2 rounded-full hover:bg-white"
                aria-label="Instagram"
                target="_blank"
              >
                <FaInstagram className="text-white text-xs group-hover:text-[#737865] transition" />
              </Link>
              <Link
                href="#"
                className="group text-white transition-all bg-[#737865] p-2 rounded-full hover:bg-white"
                aria-label="LinkedIn"
                target="_blank"
              >
                <FaLinkedin className="text-white text-xs group-hover:text-[#737865] transition" />
              </Link>
            </div>
          </div>
        </div>

        {/* Alt çizgi ve telif metni */}
        <div className="mt-20 border-t border-gray-200 pt-6">
          <p className="text-xs text-[#adb29e] text-center font-sans">
            Copyright © {year} Lezzet Bu Catring. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

