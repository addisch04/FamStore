import { createClient } from '@libsql/client';
import { VercelRequest, VercelResponse } from '@vercel/node'; // 👈 WICHTIG: Typen importieren

// ... client setup (dein Code hier)
const client = createClient({
  url: process.env.TURSO_DB_URL,
  authToken: process.env.TURSO_DB_AUTH_TOKEN,
});

export default async function handler(req: VercelRequest, res: VercelResponse) { // 👈 Typen verwenden
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // 1. Die Destrukturierung ist syntaktisch korrekt.
    // TypeScript/Editor sollten diesen Fehler nicht mehr zeigen, da req.body nun einen Typ hat.
    const { name, quantity, expiry } = req.body;

    if (!name || !quantity || !expiry) {
      return res.status(400).json({ error: 'Missing required fields: name, quantity, expiry' });
    }

    // 2. Deine SQL-Logik ist jetzt richtig
    await client.execute(
      'INSERT INTO pantry (name, quantity, expiry) VALUES (?, ?, ?)',
      [name, quantity, expiry]
    );

    res.status(201).json({ success: true });
  } catch (err) {
    console.error("Database error:", err);
    // Stelle sicher, dass err ein Error-Objekt ist, um .message zu verwenden
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
}
