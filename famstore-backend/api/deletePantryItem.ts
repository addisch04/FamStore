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
  res.setHeader('Access-Control-Allow-Methods', 'DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

try {
    const { id } = req.query;
    
    // Sicherstellen, dass die ID ein einzelner String ist
    const idToLink = Array.isArray(id) ? id[0] : id;

    if (!idToLink) {
      return res.status(400).json({ error: "ID fehlt" });
    }

    await client.execute({
      sql: "DELETE FROM pantry WHERE id = ?",
      args: [idToLink]
    });
    return res.status(200).json({ success: true });
  } catch (e: any) { // "any" löst das Problem mit dem Typ "unknown"
    return res.status(500).json({ error: e.message });
  }

}