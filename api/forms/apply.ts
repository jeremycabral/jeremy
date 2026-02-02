export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const name = (body?.name || '').toString().trim();
  const email = (body?.email || '').toString().trim();
  const phone = (body?.phone || '').toString().trim();
  const company = (body?.company || '').toString().trim();
  const revenue = (body?.revenue || '').toString().trim();
  const website = (body?.website || '').toString().trim();
  const challenge = (body?.challenge || '').toString().trim();
  const service = (body?.service || '').toString().trim();
  const source = (body?.source || '').toString().trim() || 'apply-page';

  if (!name || !email) {
    res.status(400).json({ error: 'Name and email are required' });
    return;
  }

  const webhookUrl =
    process.env.GHL_APPLY_WEBHOOK_URL ||
    'https://services.leadconnectorhq.com/hooks/vG9fFTHY63OiYR3W5ejS/webhook-trigger/817c6343-a0fa-41d7-9905-24f67c5806f5';

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'apply',
        name,
        fullName: name,
        email,
        phone,
        company,
        revenue,
        website,
        challenge,
        service,
        source,
      }),
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send application' });
    return;
  }

  res.status(200).json({ ok: true });
}
