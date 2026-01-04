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
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const { name, category, quantity, unit, expiration_date } = req.body;
    const result = await client.execute({
      sql: "INSERT INTO pantry (name, category, quantity, unit, expiration_date) VALUES (?, ?, ?, ?, ?)",
      args: [name, category, quantity, unit, expiration_date || null]
    });
    return res.status(201).json({ 
  id: result.lastInsertRowid ? result.lastInsertRowid.toString() : "0" 
});
 } catch (e: any) { 
    // Durch das : any erlaubst du TypeScript, auf e.message zuzugreifen
    return res.status(500).json({ error: e.message });
  }
}