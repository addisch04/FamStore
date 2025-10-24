import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.TURSO_DB_URL,
  authToken: process.env.TURSO_DB_AUTH_TOKEN,
});

export default async function handler(req, res) {
  try {
    const { name, quantity } = req.body;
    const result = await client.execute(
      'INSERT INTO pantry (name, quantity) VALUES (?, ?)',
      [name, quantity]
    );
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
