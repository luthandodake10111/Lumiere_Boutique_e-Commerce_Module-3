import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

<<<<<<< HEAD
const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
=======
const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log("Auth Header:", authHeader);

    const token = authHeader && authHeader.split(" ")[1];
    console.log("Extracted Token:", token);
>>>>>>> 5d63e8f2391f802870ce027af9febb86e5ffb225

    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
<<<<<<< HEAD
=======
        console.error("JWT Secret is missing in .env file!");
>>>>>>> 5d63e8f2391f802870ce027af9febb86e5ffb225
        return res.status(500).json({ message: 'Server error, secret key not configured' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
<<<<<<< HEAD
        if (err) return res.status(403).json({ message: 'Invalid token' });
=======
        if (err) {
            console.error("Token verification failed:", err);
            return res.status(403).json({ message: 'Invalid token' });
        }

        console.log("Decoded Token:", decoded);
        req.user = decoded; // Ensure this includes { user_id, email }
>>>>>>> 5d63e8f2391f802870ce027af9febb86e5ffb225

        next();
    });
};

<<<<<<< HEAD
const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extracting token
  
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Attaching user info to request
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

export { authenticateToken, authenticateUser };
=======
export default authenticateToken;
>>>>>>> 5d63e8f2391f802870ce027af9febb86e5ffb225
