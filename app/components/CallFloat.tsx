'use client';

import { FaPhoneAlt } from 'react-icons/fa';
import { trackPhoneClick } from '@/lib/tracking';

const PHONE_NUMBER = '+905434566278';

export default function CallFloat() {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      onClick={() => trackPhoneClick('floating_call_button')}
      className="group fixed z-[100] block h-14 w-14 transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f58220] md:h-16 md:w-16"
      style={{
        bottom: 'calc(max(1.25rem, env(safe-area-inset-bottom, 0px)) + 4.75rem)',
        right: 'max(1.25rem, env(safe-area-inset-right, 0px))',
      }}
      aria-label="Hemen ara"
    >
      <span className="call-float-inner relative flex h-full w-full items-center justify-center overflow-visible rounded-full bg-[#f58220] text-white shadow-lg group-hover:shadow-xl">
        <span className="call-float-ring" aria-hidden />
        <FaPhoneAlt className="relative z-[1] h-6 w-6 md:h-7 md:w-7" />
      </span>
    </a>
  );
}
