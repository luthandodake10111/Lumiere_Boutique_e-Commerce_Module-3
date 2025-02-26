import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRouter from './routes/usersRouter.js';
import crypto from 'crypto'
// import productRouter from './routes/productRouter.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/users', usersRouter);


// Server

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const secretKey = crypto.randomBytes(64).toString('hex');
// console.log(secretKey);
