import express from 'express';
<<<<<<< HEAD
import { authenticateToken } from "../middleware/authMiddleware.js";
import { getBlogPostsCon, singleBlogPostsCon, addBlogPostsCon, updateBlogPostsCon, deleteBlogPostsCon } from "../controllers/blogController.js";

const router = express.Router();

router.get('/', getBlogPostsCon);
router.get('/:id', singleBlogPostsCon);
router.post('/add', authenticateToken, addBlogPostsCon);
router.patch('/:id', authenticateToken, updateBlogPostsCon);
router.delete('/:id', authenticateToken, deleteBlogPostsCon);

export default router;
=======
import { getBlogPosts, singleBlogPosts, addBlogPosts, updateBlogPosts, deleteBlogPosts } from '../model/blogModel.js';
const router = express.Router();    

router.get('/', getBlogPosts);
router.get('/:id', singleBlogPosts);
router.post('/add', addBlogPosts);
router.patch('/:id', updateBlogPosts);
router.delete('/:id', deleteBlogPosts);

export default router;
>>>>>>> 5d63e8f2391f802870ce027af9febb86e5ffb225
