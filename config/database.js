import mongoose, { Mongoose } from "mongoose";

let connected = false
const connectDB = async () => {
    mongoose.set('strictQuery', true)

    //if db is already connected dont connect again
    if (connected) {
        console.log('MongoDB is already connected');
        return;
    }

}