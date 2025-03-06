import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRouter from './routes/usersRouter.js';
import productRouter from './routes/productRoutes.js';
import cartRouter from './routes/cartRouter.js'
import paymentRouter from './routes/paymentRouter.js';
import blogRoutes from './routes/blogRoutes.js'

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/users', usersRouter);
app.use('/products', productRouter)
app.use('/cart',cartRouter)
app.use('/payment', paymentRouter)
app.use('/blogpost',blogRoutes)


// Server

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// const secretKey = crypto.randomBytes(64).toString('hex');
// console.log(secretKey);
