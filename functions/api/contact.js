/**
 * gusit.de contact form — Cloudflare Pages Function.
 * POST /api/contact  { name, email, company, message, turnstileToken, website }
 * Env: TURNSTILE_SECRET, RESEND_API_KEY, CONTACT_FROM, CONTACT_TO. Plain fetch only.
 */
export async function onRequestPost(context) {
  const { request, env } = context;

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid request body' }, 400);
  }

  const name = String(data?.name || '').trim();
  const email = String(data?.email || '').trim();
  const company = String(data?.company || '').trim();
  const message = String(data?.message || '').trim();
  const turnstileToken = String(data?.turnstileToken || '');
  const website = String(data?.website || '');

  // Honeypot: bots fill it — silently drop.
  if (website !== '') return json({ ok: true });

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return json({ ok: false, error: 'missing or invalid fields' }, 400);
  }

  if (!env.TURNSTILE_SECRET || !env.RESEND_API_KEY || !env.CONTACT_FROM || !env.CONTACT_TO) {
    return json({ ok: false, error: 'contact backend not configured' }, 503);
  }

  if (!turnstileToken) {
    return json({ ok: false, error: 'verification missing' }, 400);
  }

  // Verify Turnstile token server-side.
  const clientIp = request.headers.get('CF-Connecting-IP') || '';
  const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: env.TURNSTILE_SECRET,
      response: turnstileToken,
      remoteip: clientIp
    })
  });
  const verify = await verifyRes.json().catch(() => ({ success: false }));
  if (!verify.success) {
    return json({ ok: false, error: 'verification failed' }, 403);
  }

  // Deliver via Resend.
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || '-'}`,
    '',
    'Message:',
    message,
    '',
    `Client IP: ${clientIp || 'unknown'}`
  ].join('\n');

  const sendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: env.CONTACT_TO.split(',').map((a) => a.trim()),
      reply_to: email,
      subject: `gusit.de contact: ${name}`,
      text: body
    })
  });

  if (!sendRes.ok) {
    return json({ ok: false, error: 'email delivery failed' }, 502);
  }

  return json({ ok: true });
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}
