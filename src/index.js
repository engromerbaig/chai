import express from 'express';

import dotenv from 'dotenv';
import connectDB from './db/index.js';
// Load environment variables from .env file
dotenv.config({
    path: './.env'
});

const app = express();


const PORT = process.env.PORT || 3000;



connectDB();

// Define your routes and middleware here
app.get('/', (req, res) => {
    res.send('Hello, world!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




// // Connect to MongoDB
// (async () => {
//     try {
//         const mongoURI = `${process.env.MONGODB_URI}/${process.env.DB_NAME}`;
//         console.log('Attempting to connect to:', mongoURI);
//         await mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('MongoDB Database connected successfully');
//     } catch (error) {
//         console.error("Database connection error: ", error);
//         process.exit(1);  // Exit the process with a failure code
//     }
// })();