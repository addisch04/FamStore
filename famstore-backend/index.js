import express from 'express';
import { createClient } from '@libsql/client';

const app = express();
const port = process.env.PORT || 3000;

// ✅ Connect to Turso using environment variables from Vercel
const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// ✅ Root route (for testing)
app.get('/', (req, res) => {
  res.send('✅ Famstore backend is running!');
});

// ✅ API route: Fetch pantry items from Turso
app.get('/api/pantry', async (req, res) => {
  try {
    const result = await db.execute('SELECT * FROM pantry_items');
    res.json(result.rows); // Send the rows as JSON
  } catch (error) {
    console.error('Error fetching pantry items:', error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Start the server locally (Vercel handles this in production)
app.listen(port, () => {
  console.log(`✅ Famstore backend running on http://localhost:${port}`);
});
