import { NextRequest, NextResponse } from 'next/server';

import { sendWhatsappText } from '@/lib/whatapp';

export async function POST(req: NextRequest) {
  try {
    const to = process.env.WHATSAPP_TO_NUMBER!;

    if (!to) {
      return NextResponse.json({ ok: false, error: 'Missing WHATSAPP_TO_NUMBER' }, { status: 500 });
    }

    return to

  } catch (error: any) {}
}
