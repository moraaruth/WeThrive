import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);
  mongoose.set('bufferCommands', false);
 

  // Validate environment variable
  if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI is not defined in environment variables.');
    return;
  }

  if (connected) {
    console.log('MongoDB is already connected...');
    return;
  }

  try {
    console.log('Connecting to MongoDB with a timeout of 50 seconds...');
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 50000,
      connectTimeoutMS: 50000,
    });
    connected = true;
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }

  mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB disconnected. Attempting to reconnect...');
    connected = false;
  });
};

export default connectDB;
