import { getBlogPosts, 
         singleBlogPost, 
         addBlogPost, 
         updateBlogPost, 
         deleteBlogPost } from "../models/blogModel.js";

// Controller to fetch all blog posts
const getBlogPostsCon = async (req, res) => {
    try {
        const blogs = await getBlogPosts();
        res.json({ blogs });
    } catch (error) {
        res.status(500).json({ message: "Error fetching blog posts", error });
    }
};

// Controller to fetch a single blog post by ID
const singleBlogPostCon = async (req, res) => {
    try {
        const blogId = req.params.id;
        const blog = await singleBlogPost(blogId);

        if (!blog) {
            return res.status(404).json({ message: "Blog post not found" });
        }

        res.json({ blog });
    } catch (error) {
        res.status(500).json({ message: "Error fetching blog post", error });    
    }
};

// Controller to add a new blog post
const addBlogPostCon = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        if (!title || !content || !author) {
            return res.status(400).json({ message: "All fields are required (title, content, author)" });
        }

        const blogId = await addBlogPost({ title, content, author });
        res.status(201).json({ message: 'Blog post added successfully', blogId });
    } catch (error) {
        res.status(500).json({ message: "Error adding blog post", error });
    }
};

// Controller to update an existing blog post by ID
const updateBlogPostCon = async (req, res) => {
    try {
        const blogId = req.params.id;
        const { title, content, author } = req.body;

        if (!title || !content || !author) {
            return res.status(400).json({ message: "All fields are required (title, content, author)" });
        }

        const updated = await updateBlogPost(blogId, { title, content, author });

        if (updated === 0) {
            return res.status(404).json({ message: "Blog post not found or no changes made" });
        }

        res.status(200).json({ message: 'Blog post updated successfully' });
    } catch (error) {
        res.status(500).json({ message: "Error updating blog post", error });
    }
};

// Controller to delete a blog post by ID
const deleteBlogPostCon = async (req, res) => {
    try {
        const blogId = req.params.id;
        const deleted = await deleteBlogPost(blogId);

        if (deleted === 0) {
            return res.status(404).json({ message: "Blog post not found" });
        }

        res.status(200).json({ message: 'Blog post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: "Error deleting blog post", error });
    }
};

export { getBlogPostsCon, 
         singleBlogPostCon,  
         addBlogPostCon, 
         updateBlogPostCon, 
         deleteBlogPostCon };
