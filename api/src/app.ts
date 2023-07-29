import express, { Request, Response } from 'express';
import cors from 'cors';
import { createClient } from 'redis';
import 'dotenv/config'
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import { updateSvgWithCount } from './utils';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const redisClient = createClient({
  url: process.env.redisUrl
});

try {
  (async () => {
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

app.get("/api/count/incr/badge.svg", async (req: Request, res: Response) => {

  // Update SVG with the provided count
  let updatedSvg = updateSvgWithCount(0);
  try {
    const url: string = (req.query.url ? req.query.url : "") as string;
    const count = await redisClient.incr(url) || 0; 
    // Update SVG with the provided count
    updatedSvg = updateSvgWithCount(count);
  } catch (err) {
    console.error('Error incrementing visitor count:', err);
  }

  // Set the response Content-Type to "image/svg+xml" for SVG content
  res.set('Content-Type', 'image/svg+xml');  
  // Send the updated SVG as the response
  res.send(updatedSvg);
})

export default app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
