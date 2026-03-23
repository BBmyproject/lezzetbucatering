'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaInstagram, FaLinkedin, FaTimes } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Hizmetlerimiz', href: '/services' },
    { name: 'Menü', href: '/menu' },
    { name: 'Hijyen', href: '/hygiene' },
    { name: 'İletişim', href: '/contact' },
  ];

  return (
    <header className='inline lg:block'>
      {/* Header Top */}
      <div className="bg-[#4d592b] py-[6px] lg:py-[9px]">
        <div className="container mx-auto max-w-[1320px] px-4">
          <div className="flex items-center justify-between">
            {/* Sol Taraf - İletişim Bilgileri */}
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Telefon */}
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-white text-base" />
                <a
                  href="tel:+905434566278"
                  className="hidden lg:block text-white text-base hover:opacity-80 transition-opacity"
                >
                  +90 543 456 62 78
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <FiMail className="text-white text-base" />
                <a
                  href="mailto:lezzetbucatering@gmail.com"
                  className="hidden lg:block text-white text-base hover:opacity-80 transition-opacity"
                >
                  lezzetbucatering@gmail.com
                </a>
              </div>
            </div>

            {/* Sağ Taraf - Social Media */}
            <div className="flex items-center gap-1.5 ml-auto">
              <Link
                href="https://www.instagram.com/lezzetbucatering"
                className="group text-white transition-all bg-[#737865] p-1.5 lg:p-2 rounded-full hover:bg-white"
                aria-label="Instagram"
                target="_blank"
              >
                <FaInstagram className="text-white text-xs group-hover:text-[#737865] transition" />
              </Link>
              <Link
                href="#"
                className="group text-white transition-all bg-[#737865] p-1.5 lg:p-2 rounded-full hover:bg-white"
                aria-label="LinkedIn"
                target="_blank"
              >
                <FaLinkedin className="text-white text-xs group-hover:text-[#737865] transition" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Ana Header */}
      <div className="bg-[#f9f9f7]">
        <div className="container mx-auto max-w-[1320px] px-4">
          <div className="flex items-center justify-between py-4 lg:py-7">
            {/* Sol - Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center"
                aria-label="Lezzet Bu Catering - Ana sayfa"
              >
                <img
                  src="/logo.png"
                  alt="Lezzet Bu Catering"
                  className="h-9 w-auto max-h-11 object-contain object-left lg:h-12 lg:max-h-[52px]"
                  width={180}
                  height={52}
                />
              </Link>
            </div>

            {/* Orta - Menu (Desktop) */}
            <nav className="hidden lg:flex flex-1 justify-center">
              <ul className="flex items-center gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base text-dark px-4 py-1 font-sans font-medium hover:bg-[#dbdfd0] hover:opacity-80 rounded-3xl transition-all duration-1000"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Sağ - Fiyat Al Butonu (Desktop) ve Hamburger (Mobile) */}
            <div className="flex items-center gap-4">
              {/* Fiyat Al Butonu - Desktop */}
              <div className="hidden lg:block flex-shrink-0">
                <Link
                  href="/contact"
                  className="group flex relative border-[1.5px] border-dark bg-transparent text-dark py-3 px-6 rounded-[118px] hover:text-white hover:border-[#f58220] transition-colors duration-300 font-sans text-base font-medium overflow-hidden"
                >
                  <span className="relative z-10 font-bold">Fiyat Al</span>
                  <div className="price-button-hover" />
                </Link>
              </div>

              {/* Hamburger Menu Button - Mobile */}
              <button
                onClick={toggleMenu}
                className="lg:hidden text-dark text-2xl focus:outline-none"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <IoClose className="w-6 h-6" />
                ) : (
                  <RxHamburgerMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden">
          <div className="flex flex-col h-full">
            {/* Logo ve Close Button */}
            <div className="px-4 py-4 border-b border-gray-200 flex items-center justify-between">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center"
                aria-label="Lezzet Bu Catering - Ana sayfa"
              >
                <img
                  src="/logo.png"
                  alt="Lezzet Bu Catering"
                  className="h-9 w-auto max-h-10 object-contain object-left"
                  width={160}
                  height={44}
                />
              </Link>
              <button
                onClick={closeMenu}
                className="text-dark text-2xl focus:outline-none"
                aria-label="Close Menu"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 py-8">
              <ul className="flex flex-col gap-1 lg:gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="text-base lg:text-xl text-dark font-sans font-medium hover:text-[#f58220] transition-colors block py-2"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Fiyat Al Butonu */}
            <div className="px-4 pb-8">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="group flex relative border-[1.5px] border-dark bg-transparent text-dark py-3 px-6 rounded-[118px] hover:text-white hover:border-[#f58220] transition-colors duration-300 font-sans text-base font-medium overflow-hidden w-full justify-center"
              >
                <span className="relative z-10 font-bold">Fiyat Al</span>
                <div className="price-button-hover" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
