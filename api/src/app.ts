import express, { Request, Response } from 'express';
import cors from 'cors';
import { createClient } from 'redis';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const redisClient = createClient({
  url: process.env.redisUrl
});

(async () => {
  await redisClient.connect();
})();

// Increment visitor count for the base location
app.post('/increment', async (req: Request, res: Response) => {
  try {
    const baseLocation: string = req.body.baseLocation;

    res.status(200).json({ count: await redisClient.incr(baseLocation) });
  } catch (err) {
    console.error('Error incrementing visitor count:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
