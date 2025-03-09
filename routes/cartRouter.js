import express from 'express'
import {authenticateToken, authenticateUser} from '../middleware/authMiddleware.js'
import { getCartCon, addCartItemCon, removeCartItemCon, updateCartItemCon, clearCartCon, saveCartHistoryCon, getCartHistoryCon } from '../controllers/cartController.js'

const router = express.Router()

router.get('/:user_id', authenticateToken, getCartCon);
router.post('/add', authenticateUser, addCartItemCon);
router.patch('/update', updateCartItemCon);
router.delete('/remove', removeCartItemCon);
router.post('/clear', clearCartCon);
router.post('/save-history', saveCartHistoryCon)
router.get('/get-history', getCartHistoryCon ) 

export default router