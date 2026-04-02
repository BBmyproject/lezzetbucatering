'use client';

import { useState, useLayoutEffect } from 'react';

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formFeedback, setFormFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (formFeedback) setFormFeedback(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormFeedback(null);
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setFormFeedback({
          type: 'error',
          message: data.error || 'Gönderilemedi. Lütfen tekrar deneyin.',
        });
        return;
      }

      setFormFeedback({
        type: 'success',
        message: 'Mesajınız alındı. En kısa sürede size dönüş yapacağız.',
      });
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch {
      setFormFeedback({
        type: 'error',
        message: 'Bağlantı hatası. İnternetinizi kontrol edip tekrar deneyin.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen py-10 md:py-20 contact-page">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Başlık Bölümü */}
        <div className="text-center mb-12">
          <h1
            className={`fade-up-contact-title ${
              isLoaded ? 'fade-up-visible' : ''
            } text-5xl md:text-6xl lg:text-7xl font-secondary text-dark mb-6`}
          >
            İletişime Geç
          </h1>
          <p
            className={`fade-up-contact-subtitle ${
              isLoaded ? 'fade-up-visible' : ''
            } text-base md:text-lg text-dark font-sans leading-relaxed max-w-2xl mx-auto`}
          >
            Daha kaliteli bir hizmet için bizimle iletişime geçebilirsiniz. 
            Sorularınız, önerileriniz veya rezervasyon talepleriniz için aşağıdaki formu doldurabilirsiniz.
          </p>
        </div>

        {/* İletişim Bilgileri */}
        <div className="mt-12 pt-8 max-w-4xl mx-auto pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:justify-items-center">
            {/* Telefon */}
            <div
              className={`fade-up-contact-card ${
                isLoaded ? 'fade-up-visible' : ''
              }`}
              style={{ transitionDelay: '0s' }}
            >
              <h3 className="text-lg md:text-xl font-bold text-dark mb-2 font-sans">
                Telefon
              </h3>
              <a
                href="tel:+905434566278"
                className="text-lg md:text-xl text-[#f58220] font-sans font-bold hover:underline transition-colors"
              >
                +90 543 456 62 78
              </a>
            </div>

            {/* Mail */}
            <div
              className={`fade-up-contact-card ${
                isLoaded ? 'fade-up-visible' : ''
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              <h3 className="text-lg md:text-xl font-bold text-dark mb-2 font-sans">
                Mail
              </h3>
              <a
                href="mailto:lezzetbucatering@gmail.com"
                className="text-base md:text-xl text-dark font-sans hover:text-[#f58220] transition-colors"
              >
                lezzetbucatering@gmail.com
              </a>
            </div>

            {/* Adres */}
            <div
              className={`fade-up-contact-card ${
                isLoaded ? 'fade-up-visible' : ''
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <h3 className="text-lg md:text-xl font-bold text-dark mb-2 font-sans">
                Adres
              </h3>
              <p className="text-base md:text-xl leading-relaxed text-dark font-sans">
                Zekeriyaköy Mah. 5. Cad. Eğrisel Blok No: 7 İç Kapı No: 22
                Sarıyer/İstanbul
              </p>
            </div>
          </div>
        </div>

        {/* Form Bölümü */}
        <div
          className={`fade-up-contact-form ${
            isLoaded ? 'fade-up-visible' : ''
          } bg-white rounded-2xl py-12 px-4 md:px-12 shadow-sm`}
           style={{
            boxShadow: '0 2.97872px 59.5745px #00000014',
           }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {formFeedback && (
              <div
                role="alert"
                className={`contact-form-feedback font-sans ${
                  formFeedback.type === 'success'
                    ? 'contact-form-feedback--success'
                    : 'contact-form-feedback--error'
                }`}
              >
                {formFeedback.message}
              </div>
            )}
            {/* Ad Soyad - Yan Yana */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-bold text-dark mb-2 font-sans"
                >
                  Adınız
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58220] focus:border-transparent font-sans"
                  placeholder="Adınız"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-bold text-dark mb-2 font-sans"
                >
                  Soyadınız
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58220] focus:border-transparent font-sans"
                  placeholder="Soyadınız"
                />
              </div>
            </div>

            {/* Telefon ve Email - Yan Yana */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold text-dark mb-2 font-sans"
                >
                  Telefon Numaranız <span className="text-gray-500">(Opsiyonel)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58220] focus:border-transparent font-sans"
                  placeholder="Telefon Numaranız"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-dark mb-2 font-sans"
                >
                  Email Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58220] focus:border-transparent font-sans"
                  placeholder="Email Adresiniz"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-bold text-dark mb-2 font-sans"
              >
                Konu
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58220] focus:border-transparent font-sans"
                placeholder="Konu"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-dark mb-2 font-sans"
              >
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f58220] focus:border-transparent font-sans resize-none"
                placeholder="Mesajınızı buraya yazın..."
              />
            </div>

            {/* Gönder Butonu */}
            <div className="pt-1 md:pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-[#f58220] text-white font-bold rounded-lg hover:bg-[#d14a00] transition-colors duration-300 font-sans text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Gönderiliyor…' : 'Gönder'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
