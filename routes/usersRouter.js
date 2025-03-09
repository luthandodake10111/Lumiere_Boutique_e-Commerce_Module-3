import express from 'express';
import { getUsersCon, loginUserCon, registerUserCon} from '../controllers/usersController.js';
import {authenticateToken} from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/register', registerUserCon);
router.post('/login', loginUserCon);
router.get('/',authenticateToken, getUsersCon)

export default router;

