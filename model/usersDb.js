import {pool} from '../config/config.js';

const getUserByEmail = async (email) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];  // Return single user
};

const getUsers = async ()=>{
    const [users] = await pool.query("SELECT * FROM users")
    return users
}

const registerUser = async (first_name, last_name, email, password, phone_number, address) => {
    const [result] = await pool.query(
        'INSERT INTO users (first_name, last_name, email, password, phone_number, address) VALUES (?, ?, ?, ?, ?, ?)',
        [first_name, last_name, email, password, phone_number, address]
    );

    return result.insertId;
    
};

export {getUserByEmail, registerUser, getUsers }