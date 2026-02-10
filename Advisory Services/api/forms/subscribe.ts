export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const fullName = (body?.fullName || '').toString().trim();
  const email = (body?.email || '').toString().trim();
  const source = (body?.source || '').toString().trim() || 'unknown';

  if (!fullName || !email) {
    res.status(400).json({ error: 'Full name and email are required' });
    return;
  }
  const nameParts = fullName.split(/\s+/).filter(Boolean);
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ');

  const webhookUrl =
    process.env.GHL_NEWSLETTER_WEBHOOK_URL ||
    process.env.GHL_WEBHOOK_URL ||
    'https://services.leadconnectorhq.com/hooks/vG9fFTHY63OiYR3W5ejS/webhook-trigger/76353403-7875-4217-8342-f91c788b36f1';

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'newsletter',
          fullName,
          name: fullName,
          full_name: fullName,
          firstName,
          lastName,
          email,
          emailOnly: email,
          source,
          contact: {
            name: fullName,
            firstName,
            lastName,
            email,
            emailOnly: email,
          },
        }),
      });
    } catch (error) {
      // Ignore webhook errors to avoid blocking the user.
    }
  }

  res.status(200).json({ ok: true });
}
