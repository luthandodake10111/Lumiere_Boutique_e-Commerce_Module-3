import { getBlogPosts, singleBlogPosts, addBlogPosts, updateBlogPosts, deleteBlogPosts } from "../models/blogModel.js";

const getBlogPostsCon = async (req, res) => {
    try {
        const blogs = await getBlogPosts();
        res.json({ blogs });
    } catch (error) {
        res.status(500).json({ message: "Error fetching blog posts", error });
    }
};

const singleBlogPostsCon = async (req, res) => {
    try {
        const blogId = req.params.id;
        const blog = await singleBlogPosts(blogId);

        if (!blog) {
            return res.status(404).json({ message: "Blog post not found" });
        }

        res.json({ blog });
    } catch (error) {
        res.status(500).json({ message: "Error fetching blog post", error });    
    }
};

const addBlogPostsCon = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        if (!title || !content || !author) {
            return res.status(400).json({ message: "All fields are required (title, content, author)" });
        }

        const blogId = await addBlogPosts({ title, content, author });
        res.status(201).json({ message: 'Blog post added successfully', blogId });
    } catch (error) {
        res.status(500).json({ message: "Error adding blog post", error });
    }
};

const updateBlogPostsCon = async (req, res) => {
    try {
        const blogId = req.params.id;
        const { title, content, author } = req.body;

        if (!title || !content || !author) {
            return res.status(400).json({ message: "All fields are required (title, content, author)" });
        }

        const updated = await updateBlogPosts(blogId, { title, content, author });

        if (updated === 0) {
            return res.status(404).json({ message: "Blog post not found or no changes made" });
        }

        res.status(200).json({ message: 'Blog post updated successfully' });
    } catch (error) {
        res.status(500).json({ message: "Error updating blog post", error });
    }
};

const deleteBlogPostsCon = async (req, res) => {
    try {
        const blogId = req.params.id;
        const deleted = await deleteBlogPosts(blogId);

        if (deleted === 0) {
            return res.status(404).json({ message: "Blog post not found" });
        }

        res.status(200).json({ message: 'Blog post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: "Error deleting blog post", error });
    }
};

export { getBlogPostsCon, singleBlogPostsCon, addBlogPostsCon, updateBlogPostsCon, deleteBlogPostsCon };
