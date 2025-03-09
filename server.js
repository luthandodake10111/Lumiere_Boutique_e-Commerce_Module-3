import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import usersRouter from "./routes/usersRouter.js";
import cartRouter from "./routes/cartRouter.js";
import paymentRouter from "./routes/paymentRouter.js";
import productRoutes from "./routes/productRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Routes
app.use("/users", usersRouter);
app.use("/cart", cartRouter);
app.use("/payments", paymentRouter);
app.use("/products", productRoutes);
app.use("/blogposts", blogRoutes);

// Server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
