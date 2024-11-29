import mongoose, { Mongoose } from "mongoose";

let connected = false
const connectDB = async () => {
    mongoose.set('strictQuery', true)

}