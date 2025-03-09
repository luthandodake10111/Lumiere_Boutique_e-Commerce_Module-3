import {pool} from '../config/config.js';

const getUserByEmail = async (email) => {
    console.log("Checking for user with email:", email);
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];  // Return first user if exists
};

const getUsers = async ()=>{
    const [users] = await pool.query("SELECT * FROM users")
    return users
}

const registerUser = async (first_name, last_name, email, password, phone_number) => {
    const [result] = await pool.query(
        'INSERT INTO users (first_name, last_name, email, password, phone_number) VALUES (?, ?, ?, ?, ?)',
        [first_name, last_name, email, password, phone_number]
    );

    return result.insertId;
    
};

export {getUserByEmail, registerUser, getUsers }