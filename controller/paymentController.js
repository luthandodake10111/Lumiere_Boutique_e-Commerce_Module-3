import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create Payment Intent (For Card Payments)
const createPaymentIntent = async (req, res) => {
    try {
        const { order_id, amount } = req.body;

        if (!order_id || !amount) {
            return res.status(400).json({ message: "Order ID and amount are required" });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert to cents
            currency: 'ZAR', // South African Rands
            metadata: { order_id, integration_check: 'accept_a_payment' },
        });

        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Payment Intent creation failed" });
    }
};

// Create Checkout Session (For Stripe Checkout)
const createCheckoutSession = async (req, res) => {
    const { user_id, cartItems, shipping_id, email } = req.body;

    if (!user_id || !shipping_id || !email) {
        return res.status(400).json({ message: "User ID, email, and shipping info are required" });
    }

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/cancel`,
            customer_email: email, // Fallback if req.user.email is undefined
            metadata: { user_id, shipping_id },
            line_items: cartItems.map(item => ({
                price_data: {
                    currency: 'usd',
                    product_data: { name: item.name, description: item.description },
                    unit_amount: Math.round(item.price * 100),
                },
                quantity: item.quantity,
            })),
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating checkout session" });
    }
};

export {createPaymentIntent, createCheckoutSession}