import express from 'express';
import cors from 'cors'; // we will talk about this later
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import albumRoutes from './routes/album.routes.js'
const app = express();
app.use(express.json(), cors({origin:'http://localhost:5173'})); // middleware to use json in the request body and cors
app.use('/api/v1', albumRoutes)


dotenv.config();
const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);

