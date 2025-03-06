import express from 'express'
import authenticateToken from '../middleware/authMiddleware.js'
import { createPaymentIntent} from '../controller/paymentController.js'

const router = express.Router()


// Route to create a payment intent
// This route generates a payment intent and returns the client secret to the frontend.

router.post('/create-payment-intent', authenticateToken,createPaymentIntent);




export default router;


