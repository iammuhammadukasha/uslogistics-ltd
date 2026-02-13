import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { first_name, last_name, email, message } = body;

    if (!email || typeof email !== 'string' || !email.trim()) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }
    const emailTrimmed = String(email).trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const toEmail = process.env.CONTACT_NOTIFY_EMAIL?.trim() || process.env.CASH_OFFER_NOTIFY_EMAIL?.trim();
    if (!apiKey || !toEmail) {
      const msg = !apiKey
        ? 'RESEND_API_KEY is not set. Add it in .env.local or your hosting env vars.'
        : 'CONTACT_NOTIFY_EMAIL (or CASH_OFFER_NOTIFY_EMAIL) is not set. Add it in .env.local or your hosting env vars.';
      console.error('Contact form email skipped:', msg);
      return NextResponse.json(
        { error: 'Email is not configured. Please contact us directly.' },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM_EMAIL?.trim() || 'US Logistics Ltd. <onboarding@resend.dev>';
    const fullName = [first_name, last_name].filter(Boolean).map((s: string) => String(s).trim()).join(' ') || '—';

    const { data, error } = await resend.emails.send({
      from,
      to: [toEmail],
      subject: `Contact form: ${fullName} (${emailTrimmed})`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(emailTrimmed)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(String(message).trim()).replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend contact email error:', error.message || error);
      return NextResponse.json(
        { error: error.message || 'Failed to send message. Please try again or email us directly.' },
        { status: 500 }
      );
    }
    console.log('Contact email sent to', toEmail, 'id:', data?.id);
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Contact API error:', e);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
