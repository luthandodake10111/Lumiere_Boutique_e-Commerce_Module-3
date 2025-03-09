import express from 'express';
<<<<<<< HEAD
import { getProductsCon, singleProductsCon, addProductCon, updateProductCon, deleteProductCon } from '../controllers/productController.js';
=======
import { getProductsCon, singleProductsCon, addProductCon, updateProductCon, deleteProductCon } from '../controller/productController.js';
>>>>>>> 5d63e8f2391f802870ce027af9febb86e5ffb225

const router = express.Router();

router.get('/', getProductsCon);
router.get('/:id', singleProductsCon);
router.post('/add', addProductCon);
router.patch('/:id', updateProductCon);
router.delete('/:id', deleteProductCon);

export default router;
