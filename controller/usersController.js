import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getUserByEmail, registerUser, getUsers } from '../model/usersDb.js';

const getUsersCon = async (req,res) =>{
    try {
        const users = await getUsers();
        res.json({ users });
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
}
const registerUserCon = async (req, res) => {
    try {
        const { first_name, last_name, email, password, phone_number, address } = req.body;

        const existingUser = await getUserByEmail(email);
        if (existingUser) return res.status(400).json({ message: 'Email already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user_id = await registerUser(first_name, last_name, email, hashedPassword, phone_number, address);

        const token = jwt.sign({ id: user_id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(201).json({ message: 'User registered successfully', token, user: { id: user_id, first_name, email } });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};


const loginUserCon = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await getUserByEmail(email);

        if (!user) return res.status(400).json({ message: 'Invalid email or password' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({ token, user: { id: user.user_id, first_name: user.first_name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export {registerUserCon, loginUserCon, getUsersCon}