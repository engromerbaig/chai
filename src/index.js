import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Connect to MongoDB
(async () => {
    try {
        const mongoURI = `${process.env.MONGODB_URI}/${process.env.DB_NAME}`;
        console.log('Attempting to connect to:', mongoURI);
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error("Database connection error: ", error);
        process.exit(1);  // Exit the process with a failure code
    }
})();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
