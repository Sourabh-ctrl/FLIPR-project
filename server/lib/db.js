import mongoose from 'mongoose';

const connectDB = async () => {
  // Cache the connection promise in global to prevent creating
  // new connections across serverless function invocations
  if (globalThis._mongooseConnection) {
    return globalThis._mongooseConnection;
  }

  try {
    globalThis._mongooseConnection = mongoose.connect(process.env.MONGO_URI);
    const conn = await globalThis._mongooseConnection;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw error;
  }
};

export default connectDB;