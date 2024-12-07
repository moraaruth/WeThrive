import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  // If the database is already connected, don't connect again
  if (connected) {
    console.log('MongoDB is already connected...');
    return;
  }

  // Connect to MongoDB
  try {
    console.log('Connecting to MongoDB with a timeout of 50 seconds...');
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 50000, // 30 seconds timeout
      connectTimeoutMS: 50000,         // 30 seconds connection timeout
    });
    connected = true;
    console.log('MongoDB connected...');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;