import { pool } from '../config/config.js';

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

export { getUserByEmail, registerUser, getCartHistory };
