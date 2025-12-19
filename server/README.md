# Server (Vercel-ready)

This folder contains the Express API. It's been prepared for deployment on Vercel using a serverless entry in `api/index.js`.

Quick steps to deploy:

1. Set your environment variables (e.g., `MONGO_URI`) in the Vercel project settings.
2. Install dependencies: `npm install` in the `server` folder locally.
3. Locally run the server: `npm run dev` (uses nodemon).

Notes:
- The database connection is cached to avoid opening multiple connections in serverless environments.
- The API root is `/api`; Vercel will serve `api/index.js` as a serverless function.
