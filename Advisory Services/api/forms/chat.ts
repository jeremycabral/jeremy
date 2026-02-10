import { supabaseServer } from '../_lib/supabase';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const message = (body?.message || '').toString().trim();
  const page = (body?.page || '').toString().trim();
  const source = (body?.source || '').toString().trim() || 'chat-widget';

  if (!message) {
    res.status(400).json({ error: 'Message is required' });
    return;
  }

  const supabase = supabaseServer();
  const { error } = await supabase
    .from('chat_messages')
    .insert({ message, page: page || null, source });

  if (error) {
    res.status(500).json({ error: 'Failed to save chat message' });
    return;
  }

  const webhookUrl =
    process.env.GHL_CHAT_WEBHOOK_URL || process.env.GHL_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'chat',
          message,
          page,
          source,
        }),
      });
    } catch (error) {
      // Ignore webhook errors to avoid blocking the user.
    }
  }

  res.status(200).json({ ok: true });
}
