import express, { Request, Response } from 'express';
import cors from 'cors';
import { createClient } from 'redis';
import 'dotenv/config'
import * as winston from 'winston';
import * as expressWinston from 'express-winston';

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

// here we are preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
      winston.format.json(),
      winston.format.prettyPrint(),
      winston.format.colorize({ all: true })
  ),
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false; // when not debugging, log requests as one-liners
  if (typeof global.it === 'function') {
      loggerOptions.level = 'http'; // for non-debug test runs, squelch entirely
  }
}

// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));


const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', async (req: express.Request, res: express.Response) => {
  try {
  let count = 0
  //  await redisClient.get('http://localhost:3000')
    res.status(200).send(`redis data: ${count}`)
  } catch (err) {
    console.error('Error incrementing visitor count:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
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
