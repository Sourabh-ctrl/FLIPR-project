import { config } from 'dotenv';
import connectDB from '../lib/db.js';
import app from '../app.js';

config();

let connected = false;

export default async function handler(req, res) {
  try {
    if (!connected) {
      await connectDB();
      connected = true;
    }

    // Call the Express app directly — Vercel will pass req/res objects
    return app(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
