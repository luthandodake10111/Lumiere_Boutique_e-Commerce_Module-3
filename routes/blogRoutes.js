import express from 'express';
import { authenticateToken } from "../middleware/authMiddleware.js";
import { getBlogPostsCon, singleBlogPostsCon, addBlogPostsCon, updateBlogPostsCon, deleteBlogPostsCon } from "../controllers/blogController.js";

const router = express.Router();

router.get('/', getBlogPostsCon);
router.get('/:id', singleBlogPostsCon);
router.post('/add', authenticateToken, addBlogPostsCon);
router.patch('/:id', authenticateToken, updateBlogPostsCon);
router.delete('/:id', authenticateToken, deleteBlogPostsCon);

export default router;
