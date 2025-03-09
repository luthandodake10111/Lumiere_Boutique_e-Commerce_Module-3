import express from 'express'
<<<<<<< HEAD
import {authenticateToken, authenticateUser} from '../middleware/authMiddleware.js'
import { getCartCon, addCartItemCon, removeCartItemCon, updateCartItemCon, clearCartCon, saveCartHistoryCon, getCartHistoryCon } from '../controllers/cartController.js'
=======
import authenticateToken from '../middleware/authMiddleware.js'
import { getCartCon, insertCartItemCon, removeCartItemCon, updateCartItemCon } from '../controller/cartController.js'
>>>>>>> 5d63e8f2391f802870ce027af9febb86e5ffb225

const router = express.Router()

router.get('/:user_id', authenticateToken, getCartCon);
<<<<<<< HEAD
router.post('/add', authenticateUser, addCartItemCon);
router.patch('/update', updateCartItemCon);
router.delete('/remove', removeCartItemCon);
router.post('/clear', clearCartCon);
router.post('/save-history', saveCartHistoryCon)
router.get('/get-history', getCartHistoryCon ) 
=======
router.post('/:user_id', insertCartItemCon);
router.patch('/:user_id', updateCartItemCon);
router.delete('/:user_id', removeCartItemCon);
>>>>>>> 5d63e8f2391f802870ce027af9febb86e5ffb225

export default router