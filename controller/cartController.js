import { pool } from '../config/config.js';

const getCartCon = async (req, res) => {
    const user_id = req.user.user_id; // Get user_id from token

    try {
        const [cart] = await pool.query("SELECT * FROM cart WHERE user_id = ?", [user_id]);
        res.json({ cart });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Database error" });
    }
};


const insertCartItemCon = async (req, res) => {
    const { user_id, product_id, quantity } = req.body;
    
    if (!user_id) {
        return res.status(401).json({ message: "User not logged in" });
    }

    try {
        // Checking if the product is already in the cart
        const [existingItem] = await pool.query(
            "SELECT * FROM cart WHERE user_id = ? AND product_id = ?", 
            [user_id, product_id]
        );

        if (existingItem.length > 0) {
            // Update quantity if product is already in cart
            await pool.query(
                "UPDATE cart SET quantity = quantity + ? WHERE user_id = ? AND product_id = ?", 
                [quantity, user_id, product_id]
            );
        } else {
            // Insert new item into cart
            await pool.query(
                "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)", 
                [user_id, product_id, quantity]
            );
        }

        res.json({ message: "Item added to cart" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Database error" });
    }
};

const removeCartItemCon = async(req, res) => {
    const { user_id, product_id } = req.body;

    try {
        await pool.query("DELETE FROM cart WHERE user_id = ? AND product_id = ?", [user_id, product_id]);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Database error" });
    }
};

const updateCartItemCon = async (req, res) => {
    const { user_id, product_id, quantity } = req.body;

    try {
        await pool.query(
            "UPDATE cart SET quantity = ? WHERE user_id = ? AND product_id = ?", 
            [quantity, user_id, product_id]
        );
        res.json({ message: "Cart updated" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Database error" });
    }
};



export {getCartCon, insertCartItemCon, removeCartItemCon, updateCartItemCon}