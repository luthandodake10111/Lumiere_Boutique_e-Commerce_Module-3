import { pool } from '../config/config.js';

// User Authentication Functions
const getUserByEmail = async (email) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows.length > 0 ? rows[0] : null;
};

const registerUser = async (first_name, last_name, email, password, phone_number) => {
    const [result] = await pool.query(
        'INSERT INTO users (first_name, last_name, email, password, phone_number) VALUES (?, ?, ?, ?, ?)',
        [first_name, last_name, email, password, phone_number]
    );
    return result.insertId;
};

const getCartHistory = async (user_id) => {
    const [rows] = await pool.query('SELECT * FROM cart WHERE user_id = ?', [user_id]);
    return rows;
};

// Cart Management Functions
const getCart = async (user_id) => {
    const [cart] = await pool.query('SELECT * FROM cart WHERE user_id = ?', [user_id]);
    return cart;
};

const insertCartItem = async (user_id, product_id, quantity, added_at) => {
    const [result] = await pool.query(
        `INSERT INTO cart (user_id, product_id, quantity, added_at) 
        VALUES (?, ?, ?, ?) 
        ON DUPLICATE KEY UPDATE quantity = quantity + ?`,
        [user_id, product_id, quantity, added_at, quantity]
    );
    return result.insertId;
};

const updateCartItem = async (user_id, product_id, quantity) => {
    const [result] = await pool.query(
        'UPDATE cart SET quantity = ? WHERE user_id = ? AND product_id = ?',
        [quantity, user_id, product_id]
    );
    return result.affectedRows > 0;
};

const removeCartItem = async (user_id, product_id) => {
    const [result] = await pool.query('DELETE FROM cart WHERE user_id = ? AND product_id = ?', [user_id, product_id]);
    return result.affectedRows > 0 ? "Item removed successfully" : "Item not found";
};

const clearCart = async (user_id) => {
    const [result] = await pool.query('DELETE FROM cart WHERE user_id = ?', [user_id]);
    return result.affectedRows > 0 ? "Cart cleared successfully" : "Cart already empty";
};

// Export functions
export { 
    getUserByEmail, 
    registerUser, 
    getCartHistory, 
    getCart, 
    insertCartItem, 
    updateCartItem, 
    removeCartItem, 
    clearCart 
};
