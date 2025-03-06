import express from 'express'
import authenticateToken from '../middleware/authMiddleware.js'
import { getCartCon, insertCartItemCon, removeCartItemCon, updateCartItemCon } from '../controller/cartController.js'

const router = express.Router()

router.get('/:user_id', authenticateToken, getCartCon);
router.post('/:user_id', insertCartItemCon);
router.patch('/:user_id', updateCartItemCon);
router.delete('/:user_id', removeCartItemCon);

export default router