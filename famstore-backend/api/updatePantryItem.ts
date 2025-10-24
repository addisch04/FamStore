import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.TURSO_DB_URL,
  authToken: process.env.TURSO_DB_AUTH_TOKEN,
});

export default async function handler(req, res) {
  try {
    const { id, name, quantity } = req.body;

    if (!id || (!name && !quantity)) {
      return res.status(400).json({ error: 'ID and at least one field to update are required' });
    }

    const updates: string[] = [];
    const values: any[] = [];

    if (name) {
      updates.push('name = ?');
      values.push(name);
    }
    if (quantity) {
      updates.push('quantity = ?');
      values.push(quantity);
    }

    values.push(id); // for WHERE clause

    await client.execute(`UPDATE pantry SET ${updates.join(', ')} WHERE id = ?`, values);

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
