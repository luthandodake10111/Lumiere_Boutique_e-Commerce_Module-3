import express from 'express';
import { getUsersCon, loginUserCon, registerUserCon} from '../controller/usersController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/users/register', registerUserCon);
router.post('/users/login', loginUserCon);
router.get('/',authenticateToken, getUsersCon)

export default router;

