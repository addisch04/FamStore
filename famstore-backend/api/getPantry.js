import client from './_db.js';

export default async function handler(request, response) {
  // Add CORS support so your Expo app can talk to this
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  try {
    // Simple query to test the connection
    const result = await client.execute("SELECT * FROM pantry_items");
    response.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }
}