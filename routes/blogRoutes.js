import express from 'express';
import { authenticateToken } from "../middleware/authMiddleware.js";
import { 
    getBlogPostsCon, 
    singleBlogPostCon, 
    addBlogPostCon, 
    updateBlogPostCon, 
    deleteBlogPostCon 
} from "../controllers/blogController.js";

const router = express.Router();

// Route to fetch all blog posts
router.get('/', getBlogPostsCon);

// Route to fetch a single blog post by ID
router.get('/:id', singleBlogPostCon);

// Route to add a new blog post (authentication required)
router.post('/add', authenticateToken, addBlogPostCon);

// Route to update an existing blog post by ID (authentication required)
router.patch('/:id', authenticateToken, updateBlogPostCon);

// Route to delete a blog post by ID (authentication required)
router.delete('/:id', authenticateToken, deleteBlogPostCon);

export default router;
