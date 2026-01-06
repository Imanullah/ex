export type WhatsappTextPayload = {
  to: string;
  body: string;
};

export async function sendWhatsappText({ to, body }: WhatsappTextPayload) {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN!;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID!;
  if (!accessToken || !phoneNumberId) {
    throw new Error('Missing WhatsApp env vars');
  }

  const res = await fetch(`https://graph.facebook.com/v22.0/${phoneNumberId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: { preview_url: false, body },
    }),
    // Meta’s API is fine on Edge, but Node runtime is often simpler for local dev
    cache: 'no-store',
  });

  const data = await res.json();
  if (!res.ok) {
    const msg = (data?.error?.message as string) || 'Unknown WhatsApp API error';
    const code = data?.error?.code;
    throw new Error(`WhatsApp API: ${msg}${code ? ` (code ${code})` : ''}`);
  }

  return data;
}

/** Example for sending a TEMPLATE message (required when outside 24h session).
 *  You must first create/approve a template in WhatsApp Manager.
 */
export async function sendWhatsappTemplate(opts: {
  to: string;
  templateName: string; // e.g. "order_update"
  languageCode?: string; // e.g. "en_US", "id"
  components?: Array<{
    type: 'body' | 'header' | 'button';
    parameters: Array<{ type: 'text'; text: string } | { type: 'currency'; currency: { fallback_value: string; code: string; amount_1000: number } } | { type: 'date_time'; date_time: { fallback_value: string } }>;
  }>;
}) {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN!;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID!;
  const { to, templateName, languageCode = 'en_US', components = [] } = opts;

  const res = await fetch(`https://graph.facebook.com/v20.0/${phoneNumberId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to,
      type: 'template',
      template: {
        name: templateName,
        language: { code: languageCode },
        components,
      },
    }),
    cache: 'no-store',
  });

  const data = await res.json();
  if (!res.ok) {
    const msg = (data?.error?.message as string) || 'Unknown WhatsApp API error';
    const code = data?.error?.code;
    throw new Error(`WhatsApp API (template): ${msg}${code ? ` (code ${code})` : ''}`);
  }

  return data;
}
