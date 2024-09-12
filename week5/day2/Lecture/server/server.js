import express from 'express';
import cors from 'cors'; // we will talk about this later
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
const app = express();
app.use(express.json(), cors()); // middleware to use json in the request body and cors
dotenv.config();
const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);

