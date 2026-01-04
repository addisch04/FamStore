import { createClient } from '@libsql/client';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import dotenv from 'dotenv';
dotenv.config();

const client = createClient({
  url: process.env.TURSO_DATABASE_URL || '',
  authToken: process.env.TURSO_AUTH_TOKEN || '',
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const { id, name, category, quantity, unit, expiration_date } = req.body;
    await client.execute({
      sql: "UPDATE pantry SET name = ?, category = ?, quantity = ?, unit = ?, expiration_date = ? WHERE id = ?",
      args: [name, category, quantity, unit, expiration_date || null, id]
    });
    return res.status(200).json({ success: true });
  } catch (e: any) { 
    // Durch das : any erlaubst du TypeScript, auf e.message zuzugreifen
    return res.status(500).json({ error: e.message });
  }
}