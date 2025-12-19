import { config } from 'dotenv';
import serverless from 'serverless-http';
import connectDB from '../lib/db.js';
import app from '../app.js';

config();

const handler = serverless(app);
let connected = false;

export default async function (req, res) {
  if (!connected) {
    await connectDB();
    connected = true;
  }
  return handler(req, res);
}
