import Link from 'next/link';
import { AiFillFacebook } from 'react-icons/ai';
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2c2f24] border-t border-gray-200 mt-16">
      <div className="container mx-auto max-w-[1320px] px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sol - Logo ve kısa metin */}
          <div className="space-y-3">
            <Link
              href="/"
              className="text-2xl font-secondary font-bold text-white"
            >
              Lezzet Bu Catring
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
                  <Link href="/" className="hover:text-[#ec5600] transition-colors">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#ec5600] transition-colors"
                  >
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="hover:text-[#ec5600] transition-colors">
                    Menü
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hygiene"
                    className="hover:text-[#ec5600] transition-colors"
                  >
                    Hijyen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#ec5600] transition-colors"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">İletişim</h2>
            <div className="flex flex-col gap-3 text-sm font-sans text-[#dbdfd0]">
              <div className="group flex items-center gap-2 cursor-pointer">
                <FaPhoneAlt className="text-white text-base group-hover:text-[#ec5600] transition-colors" />
                <a
                  href="tel:+905551234567"
                  className="text-[#dbdfd0] group-hover:text-[#ec5600] transition-colors"
                >
                  +90 555 123 45 67
                </a>
              </div>
              <div className="group flex items-center gap-2 cursor-pointer">
                <FiMail className="text-white text-base group-hover:text-[#ec5600] transition-colors" />
                <a
                  href="mailto:info@lezzetbucatring.com"
                  className="text-[#dbdfd0] group-hover:text-[#ec5600] transition-colors"
                >
                  info@lezzetbucatring.com
                </a>
              </div>
              <div className="group flex items-center gap-2">
                <FaMapMarkerAlt className="text-white text-base group-hover:text-[#ec5600] transition-colors" />
                <span className="text-[#dbdfd0] group-hover:text-[#ec5600] transition-colors">İstanbul, Türkiye</span>
              </div>
            </div>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Bizi Takip Edin</h2>
            <div className="flex items-center gap-2">
              <Link
                href="#"
                className="group text-white transition-all bg-[#737865] p-2 rounded-full hover:bg-white"
                aria-label="Facebook"
              >
                <AiFillFacebook className="text-white text-xs group-hover:text-[#737865] transition" />
              </Link>
              <Link
                href="#"
                className="group text-white transition-all bg-[#737865] p-2 rounded-full hover:bg-white"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white text-xs group-hover:text-[#737865] transition" />
              </Link>
              <Link
                href="#"
                className="group text-white transition-all bg-[#737865] p-2 rounded-full hover:bg-white"
                aria-label="Twitter"
              >
                <FaTwitter className="text-white text-xs group-hover:text-[#737865] transition" />
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

