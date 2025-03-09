import { Payment } from "../models/paymentModel.js"; 

const createOrderAndPaymentCon = async (req, res) => {
    try {
        const order = await Payment.createPayment(req.body.order_id, req.body.payment_method, req.body.payment_amount);
        res.json({ order });
    } catch (error) {
        res.status(500).json({ error: "Failed to create order and payment" });
    }
};

const confirmPaymentCon = async (req, res) => {
    try {
        await Payment.confirmPayment(req.body.payment_id, req.body.transaction_reference);
        res.json({ message: "Payment confirmed" });
    } catch (error) {
        res.status(500).json({ error: "Failed to confirm payment" });
    }
};

const getPaymentByOrderIdCon = async (req, res) => {
    try {
        const payment = await Payment.getPaymentByOrderId(req.params.order_id);
        res.json({ payment });
    } catch (error) {
        res.status(500).json({ error: "Failed to get payment by order ID" });
    }
};

export { createOrderAndPaymentCon, confirmPaymentCon, getPaymentByOrderIdCon };
 