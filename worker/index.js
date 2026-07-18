/**
 * Cloudflare Worker — Contact form proxy for Mailgun
 *
 * Secrets (set via CLI, never stored in code):
 *   wrangler secret put MAILGUN_API_KEY
 *   wrangler secret put MAILGUN_DOMAIN    (e.g. mg.automation-integration.com)
 *   wrangler secret put MAILGUN_TO        (e.g. jonathan@automation-integration.com)
 */

const ALLOWED_ORIGINS = [
  'https://automation-integration.com',
  'https://www.automation-integration.com',
];

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    if (!ALLOWED_ORIGINS.includes(origin)) {
      return new Response('Forbidden', { status: 403 });
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return json({ error: 'Invalid JSON' }, 400, origin);
    }

    const { firstName, lastName, email, org, service, message } = data;

    if (!firstName || !email || !message) {
      return json({ error: 'firstName, email, and message are required.' }, 400, origin);
    }

    // Basic email format guard
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: 'Invalid email address.' }, 400, origin);
    }

    const body = new FormData();
    body.append('from', `A&I Website <noreply@${env.MAILGUN_DOMAIN}>`);
    body.append('to', env.MAILGUN_TO);
    body.append('subject', `New Contact Form Submission — ${firstName} ${lastName || ''}`.trim());
    body.append('text', [
      `Name:         ${firstName} ${lastName || ''}`.trim(),
      `Email:        ${email}`,
      `Organization: ${org || 'N/A'}`,
      `Service:      ${service || 'N/A'}`,
      '',
      message,
    ].join('\n'));

    const mgRes = await fetch(`https://api.mailgun.net/v3/${env.MAILGUN_DOMAIN}/messages`, {
      method: 'POST',
      headers: { Authorization: `Basic ${btoa(`api:${env.MAILGUN_API_KEY}`)}` },
      body,
    });

    if (!mgRes.ok) {
      const detail = await mgRes.text();
      console.error('Mailgun error:', mgRes.status, detail);
      return json({ error: 'Failed to send message. Please try again.' }, 502, origin);
    }

    return json({ success: true }, 200, origin);
  },
};

function json(payload, status, origin) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}
