import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    const mongoURI = `${process.env.MONGODB_URI}/${DB_NAME}`;
    // console.log('Attempting to connect to:', mongoURI);

    try {
        const conn = await mongoose.connect(mongoURI);
        console.log('MongoDB Database connected successfully', conn.connection.host);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        // Optionally, you can handle the error further or exit the process
        process.exit(1);
    }
};

export default connectDB;