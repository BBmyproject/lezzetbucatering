import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const LIMITS = {
  firstName: 80,
  lastName: 80,
  phone: 40,
  email: 254,
  subject: 200,
  message: 8000,
};

function createTransport() {
  const user = process.env.YANDEX_USER;
  const pass = process.env.YANDEX_APP_PASSWORD;
  if (!user?.trim() || !pass?.trim()) {
    return null;
  }
  return nodemailer.createTransport({
    host: 'smtp.yandex.com',
    port: 465,
    secure: true,
    auth: { user: user.trim(), pass: pass.trim() },
  });
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Geçersiz istek' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Geçersiz istek' }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const firstName = String(b.firstName ?? '').trim().slice(0, LIMITS.firstName);
  const lastName = String(b.lastName ?? '').trim().slice(0, LIMITS.lastName);
  const phone = String(b.phone ?? '')
    .trim()
    .slice(0, LIMITS.phone);
  const email = String(b.email ?? '').trim().slice(0, LIMITS.email);
  const subject = String(b.subject ?? '').trim().slice(0, LIMITS.subject);
  const message = String(b.message ?? '').trim().slice(0, LIMITS.message);

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json({ error: 'Zorunlu alanları doldurun.' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Geçersiz e-posta adresi.' }, { status: 400 });
  }

  const transport = createTransport();
  if (!transport) {
    console.error('contact: YANDEX_USER / YANDEX_APP_PASSWORD eksik');
    return NextResponse.json(
      { error: 'Sunucu e-posta ayarları yapılandırılmamış.' },
      { status: 503 }
    );
  }

  const fromUser = process.env.YANDEX_USER!.trim();
  const to =
    process.env.CONTACT_MAIL_TO?.trim() || fromUser;

  const fullName = `${firstName} ${lastName}`.trim();
  const text = [
    `Ad Soyad: ${fullName}`,
    `E-posta: ${email}`,
    phone ? `Telefon: ${phone}` : 'Telefon: (belirtilmedi)',
    `Konu: ${subject}`,
    '',
    'Mesaj:',
    message,
  ].join('\n');

  const html = `
    <p><strong>Ad Soyad:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefon:</strong> ${phone ? escapeHtml(phone) : '(belirtilmedi)'}</p>
    <p><strong>Konu:</strong> ${escapeHtml(subject)}</p>
    <hr />
    <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
  `;

  try {
    await transport.sendMail({
      from: `"Lezzet Bu İletişim" <${fromUser}>`,
      to,
      replyTo: email,
      subject: `[İletişim Formu] ${subject}`,
      text,
      html,
    });
  } catch (err) {
    console.error('contact sendMail:', err);
    return NextResponse.json(
      { error: 'E-posta gönderilemedi. Lütfen daha sonra tekrar deneyin.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
