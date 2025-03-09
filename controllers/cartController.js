import { pool } from '../config/config.js';
import { getCartHistory } from '../models/cartDb.js';

const getCartCon = async (req, res) => {
    const user_id = req.user.user_id; // Make sure this is correctly obtained

    try {
        // Join cart table with products table to fetch product details including the image
        const [cart] = await pool.query(`
            SELECT p.product_id, p.product_name, p.product_type, p.price, p.stock_quantity, p.description, pi.image_url
            FROM products p
            LEFT JOIN product_images pi ON p.product_id = pi.product_id AND pi.is_primary = TRUE WHERE user_id = ?`, [user_id]);

        console.log("Cart Data from DB:", cart); // Debugging log

        if (cart.length === 0) {
            return res.json({ message: "Cart is empty", cart: [] });
        }

        return res.json({ cart });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Database error" });
    }
};

const addCartItemCon = async (req, res) => {
    const { user_id, product_id, quantity } = req.body;
    
    if (!user_id) {
        return res.status(401).json({ message: "User not logged in" });
    }

    try {
        // Fetch product price
        const [productData] = await pool.query("SELECT price FROM products WHERE product_id = ?", [product_id]);

        if (productData.length === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        const price = productData[0].price;
        const totalPrice = price * quantity;

        // Checking if the product is already in the cart
        const [existingItem] = await pool.query(
            "SELECT * FROM cart WHERE user_id = ? AND product_id = ?", 
            [user_id, product_id]
        );

        if (existingItem.length > 0) {
            // Update quantity if product is already in cart
            await pool.query(
                "UPDATE cart SET quantity = quantity + ?, total = total + ? WHERE user_id = ? AND product_id = ?", 
                [quantity, totalPrice, user_id, product_id]
            );
        } else {
            // Insert new item into cart
            await pool.query(
                "INSERT INTO cart (user_id, product_id, quantity, price, total) VALUES (?, ?, ?, ?, ?)", 
                [user_id, product_id, quantity, price, totalPrice]
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
res.json({ message: "Item removed from cart" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Database error" });
    }
};

const updateCartItemCon = async (req, res) => {
    const { user_id, product_id, quantity } = req.body;

    try {
        await pool.query(
            "UPDATE cart SET quantity = ? WHERE user_id = ? AND product_id = ? ", 
            [quantity, user_id, product_id]
        );
        res.json({ message: "Cart updated" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Database error" });
    }
};



const clearCartCon = async (req, res) => {
    const { user_id } = req.body;

    try {
        await pool.query("DELETE FROM cart WHERE user_id = ?", [user_id]);
        return res.json({ message: "Cart cleared after payment" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

const saveCartHistoryCon = async (req, res) => {
    const { user_id } = req.body;

    try {
        // Moving cart items to cart_history before clearing
        await pool.query("INSERT INTO cart_history (user_id, product_id, quantity, price, total, added_at) SELECT user_id, product_id, quantity, price, total, NOW() FROM cart WHERE user_id = ?", [user_id]);

        return res.json({ message: "Cart history saved successfully!" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}
const getCartHistoryCon = async(req, res)=>{
    const user_id = req.user.user_id;
    try {
        const cart = await getCartHistory();
        res.json({ cart });
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve cart' });
}
}


export {getCartCon, addCartItemCon, removeCartItemCon, updateCartItemCon, clearCartCon, saveCartHistoryCon, getCartHistoryCon}