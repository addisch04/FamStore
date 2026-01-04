// deletePantryItem (KORRIGIERT)
// ... client setup

export default async function handler(req, res) {
  try {
    const { **name** } = req.body; // ✅ Erwarte jetzt "name"

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    await client.execute('DELETE FROM pantry WHERE **name** = ?', [name]); // ✅ Lösche nach "name"
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: err.message });
  }
}
