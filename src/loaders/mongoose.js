import mongoose from 'mongoose';
import config from '../config/index.js';

const RETRY_INTERVAL = 5000; // 5초

export async function connectDB() {
  try {
    await mongoose.connect(config.db.url, {
      dbName: 'chichi',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB Connection Success!');
  } catch (error) {
    console.error('mongoose connect error', error);
    setTimeout(() => connectDB(), RETRY_INTERVAL);
  }
}

mongoose.connection.on('disconnected', () => {
  console.error('mongoose connect disconnected. retry to connect');
  setTimeout(() => connectDB(), RETRY_INTERVAL);
});