import express from 'express';
import { getProductsCon, singleProductsCon, addProductCon, updateProductCon, deleteProductCon } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProductsCon);
router.get('/:id', singleProductsCon);
router.post('/add', addProductCon);
router.patch('/:id', updateProductCon);
router.delete('/:id', deleteProductCon);

export default router;
