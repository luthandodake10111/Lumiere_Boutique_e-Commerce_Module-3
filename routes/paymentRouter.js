import express from "express";
import { authenticateToken } from "../middleware/authMiddleware.js";
import { 
    createOrderAndPaymentCon, 
    confirmPaymentCon, 
    getPaymentByOrderIdCon, 
} from "../controllers/paymentController.js";

const router = express.Router();

// Order-related payment routes
router.post('/create-order', authenticateToken, createOrderAndPaymentCon);
router.post('/confirm-payment', authenticateToken, confirmPaymentCon);
router.get('/get-payment/:order_id', authenticateToken, getPaymentByOrderIdCon);

// // Stripe payment intent route
// router.post('/create-payment-intent', authenticateToken, createPaymentIntent);

export default router;
