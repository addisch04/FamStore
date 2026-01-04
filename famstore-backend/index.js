import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ status: "Backend läuft", info: "Nutze /api/getPantry etc." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Basis-Server auf http://localhost:${PORT}`);
});

export default app;