<<<<<<< HEAD
import { authenticateToken } from "../middleware/authMiddleware.js";
import { createOrderAndPaymentCon, confirmPaymentCon, getPaymentByOrderIdCon } from "../controllers/paymentController.js";
import express from "express";

const router = express.Router();

router.post('/create-order', authenticateToken, createOrderAndPaymentCon);
router.post('/confirm-payment', confirmPaymentCon);
router.get('/get-payment/:order_id', getPaymentByOrderIdCon);

export default router
=======
import express from 'express'
import authenticateToken from '../middleware/authMiddleware.js'
import { createPaymentIntent} from '../controller/paymentController.js'

const router = express.Router()


// Route to create a payment intent
// This route generates a payment intent and returns the client secret to the frontend.

router.post('/create-payment-intent', authenticateToken,createPaymentIntent);




export default router;


>>>>>>> 5d63e8f2391f802870ce027af9febb86e5ffb225
