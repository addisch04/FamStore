import { createClient } from '@libsql/client';

// Make sure these match the keys you typed in Vercel exactly!
const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url) {
  throw new Error("Missing TURSO_DATABASE_URL environment variable");
}

const client = createClient({
  url,
  authToken,
});

export default client;