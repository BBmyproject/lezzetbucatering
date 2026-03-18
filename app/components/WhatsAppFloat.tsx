'use client';

import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '905434566278';
const DEFAULT_MESSAGE =
  'Merhaba, Lezzet Bu Catering hakkında bilgi almak istiyorum.';

export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed z-[100] block h-14 w-14 transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] md:h-16 md:w-16"
      style={{
        bottom: 'max(1.25rem, env(safe-area-inset-bottom, 0px))',
        right: 'max(1.25rem, env(safe-area-inset-right, 0px))',
      }}
      aria-label="WhatsApp ile iletişime geçin"
    >
      <span className="whatsapp-float-inner relative flex h-full w-full items-center justify-center overflow-visible rounded-full bg-[#25D366] text-white shadow-lg group-hover:shadow-xl">
        <span className="whatsapp-float-ring" aria-hidden />
        <FaWhatsapp className="relative z-[1] h-8 w-8 md:h-9 md:w-9" />
      </span>
    </a>
  );
}
