import express, { Request, Response } from 'express';
import cors from 'cors';
import { createClient } from 'redis';
import 'dotenv/config'

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const redisClient = createClient({
  url: process.env.redisUrl
});

try {
  (async () => {
    console.log("process.env.redisUrl", process.env.redisUrl);
    await redisClient.connect();
  })();
} catch(err) {
  console.error("Error in connecting to redis", err);
}

const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', async (req: express.Request, res: express.Response) => {
    res.status(200).send(`redis data: ${await redisClient.get('http://localhost:3000')}`)
});

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

export default app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
