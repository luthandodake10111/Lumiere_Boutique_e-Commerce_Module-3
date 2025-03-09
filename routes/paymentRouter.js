import { authenticateToken } from "../middleware/authMiddleware.js";
import { createOrderAndPaymentCon, confirmPaymentCon, getPaymentByOrderIdCon } from "../controllers/paymentController.js";
import express from "express";

const router = express.Router();

router.post('/create-order', authenticateToken, createOrderAndPaymentCon);
router.post('/confirm-payment', confirmPaymentCon);
router.get('/get-payment/:order_id', getPaymentByOrderIdCon);

export default router