import express from 'express';
import { authenticateToken, authenticateUser } from '../middleware/authMiddleware.js';
import { 
    getCartCon, 
    addCartItemCon, 
    removeCartItemCon, 
    updateCartItemCon, 
    clearCartCon, 
    saveCartHistoryCon, 
    getCartHistoryCon 
} from '../controllers/cartController.js';

const router = express.Router();

// Routes for cart operations
router.get('/:user_id', authenticateToken, getCartCon);
router.post('/add', authenticateUser, addCartItemCon);
router.patch('/update', authenticateToken, updateCartItemCon);
router.delete('/remove', authenticateToken, removeCartItemCon);
router.post('/clear', authenticateToken, clearCartCon);

// Routes for cart history
router.post('/save-history', authenticateToken, saveCartHistoryCon);
router.get('/get-history', authenticateToken, getCartHistoryCon);

export default router;
