import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import userRoutes from './routes/user.routes.js'
import cookieParser from 'cookie-parser';
const app = express();

app.use(cookieParser(process.env.SECRET_KEY))
app.use(express.json(), cors({origin:'http://localhost:5173', credentials:true}))
app.use('/api', userRoutes)
dotenv.config()
const PORT = process.env.PORT | 8000

dbConnect()

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})
