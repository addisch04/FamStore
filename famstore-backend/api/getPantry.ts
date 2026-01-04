import { createClient } from '@libsql/client';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import dotenv from 'dotenv';

// Lädt die Umgebungsvariablen (.env)
dotenv.config();

// Initialisiere den Turso-Client DIREKT in dieser Datei
const client = createClient({
  url: process.env.TURSO_DATABASE_URL || '',
  authToken: process.env.TURSO_AUTH_TOKEN || '',
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Header setzen, damit die App zugreifen darf
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Falls es eine Vorabfrage (OPTIONS) vom Browser/Handy ist, sofort antworten
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Die SQL Abfrage ausführen
    const result = await client.execute("SELECT * FROM pantry");
    
    // Die Daten als JSON zurückgeben
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("Datenbankfehler:", error);
    return res.status(500).json({ error: "Fehler beim Laden der Vorratsliste" });
  }
}