import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import connectDB from './lib/db.js';
import apiRoutes from './routes/api.js';

config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => res.send('API running'));

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();