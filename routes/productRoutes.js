import express from 'express';
import { 
    getProductsCon, 
    singleProductCon, 
    addProductCon, 
    updateProductCon, 
    deleteProductCon 
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProductsCon);
router.get('/:id', singleProductCon);
router.post('/add', addProductCon);
router.patch('/:id', updateProductCon);
router.delete('/:id', deleteProductCon);

export default router;
