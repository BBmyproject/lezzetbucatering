import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[min(70vh,720px)] bg-[#f9f9f7] px-4 py-16 md:py-24">
      <div className="container mx-auto flex max-w-[1320px] flex-col items-center text-center">
        <p
          className="font-secondary text-7xl font-medium leading-none text-[#4d592b] md:text-8xl"
          aria-hidden
        >
          404
        </p>
        <h1 className="mt-6 font-secondary text-2xl font-medium text-dark md:text-4xl">
          Sayfa bulunamadı
        </h1>
        <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-gray-600 md:text-lg">
          Aradığınız adres yanlış yazılmış, sayfa kaldırılmış veya taşınmış
          olabilir. Ana sayfadan devam edebilir veya bizimle iletişime
          geçebilirsiniz.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group relative inline-flex overflow-hidden rounded-[118px] border-[1.5px] border-dark bg-transparent px-8 py-3 font-sans text-base font-bold text-dark transition-colors duration-300 hover:border-[#f58220] hover:text-white"
          >
            <span className="relative z-10">Ana Sayfaya Dön</span>
            <div className="price-button-hover" />
          </Link>
          <Link
            href="/contact"
            className="rounded-[118px] border-[1.5px] border-[#4d592b] bg-[#4d592b] px-8 py-3 font-sans text-base font-bold text-white transition-colors hover:border-[#3d4522] hover:bg-[#3d4522]"
          >
            İletişim
          </Link>
        </div>
      </div>
    </main>
  );
}
