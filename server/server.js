import { config } from 'dotenv';
import connectDB from './lib/db.js';
import app from './app.js';

config();

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Only start the HTTP server for local development. On Vercel we'll use `api/index.js`.
if (process.env.NODE_ENV !== 'production') {
  start();
}

export default app;