import express from 'express';
import { getBlogPosts, singleBlogPosts, addBlogPosts, updateBlogPosts, deleteBlogPosts } from '../model/blogModel.js';
const router = express.Router();    

router.get('/', getBlogPosts);
router.get('/:id', singleBlogPosts);
router.post('/add', addBlogPosts);
router.patch('/:id', updateBlogPosts);
router.delete('/:id', deleteBlogPosts);

export default router;