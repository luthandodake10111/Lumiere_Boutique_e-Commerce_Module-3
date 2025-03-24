import { pool } from '../config/config.js';

// Fetch all blog posts
const getBlogPosts = async () => {
    const [blogs] = await pool.query("SELECT * FROM blog_posts");
    return blogs;
};

// Fetch a single blog post by ID
const singleBlogPost = async (id) => {
    const [blog] = await pool.query("SELECT * FROM blog_posts WHERE blog_id = ?", [id]);
    return blog.length > 0 ? blog[0] : null;
};

// Add a new blog post
const addBlogPost = async (blog) => {
    const [result] = await pool.query(
        "INSERT INTO blog_posts (title, content, author) VALUES (?, ?, ?)", 
        [blog.title, blog.content, blog.author]
    );
    return result.insertId;
};

// Update an existing blog post by ID
const updateBlogPost = async (blogId, blog) => {
    const [result] = await pool.query(
        "UPDATE blog_posts SET title = ?, content = ?, author = ? WHERE blog_id = ?", 
        [blog.title, blog.content, blog.author, blogId]
    );
    return result.affectedRows;
};

// Delete a blog post by ID
const deleteBlogPost = async (blogId) => {
    const [result] = await pool.query("DELETE FROM blog_posts WHERE blog_id = ?", [blogId]);
    return result.affectedRows;
};

export { getBlogPosts, 
         singleBlogPost, 
         addBlogPost, 
         updateBlogPost, 
         deleteBlogPost };
