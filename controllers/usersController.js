import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getUserByEmail, registerUser, getUsers } from '../models/usersDb.js';

const registerUserCon = async (req, res) => {
    try {
        const { first_name, last_name, email, password, phone_number } = req.body;
        
        if (!first_name || !last_name || !email || !password || !phone_number) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user_id = await registerUser(first_name, last_name, email, hashedPassword, phone_number);

        const token = jwt.sign({ user_id }, process.env.JWT_SECRET, { expiresIn: '100d' });

        res.status(201).json({
            message: "User registered successfully",
            token,
            user: { user_id, first_name, email }
        });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

const getUsersCon = async (req, res) => {
    try {
        const users = await getUsers();
        res.json({ users });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

const loginUserCon = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await getUserByEmail(email);
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate token
        const token = jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET, { expiresIn: '100d' });

        res.json({
            message: "Login successful",
            token,
            user: {
                user_id: user.user_id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error", error });
    }
};


// Export all the functions
export { registerUserCon, getUsersCon, loginUserCon };
