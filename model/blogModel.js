import { pool } from '../config/config.js';

const getBlogPosts = async () => {
    const [blogs] = await pool.query("SELECT * FROM blog_posts");
    return blogs;
};

const singleBlogPosts = async (id) => {
    const [blog] = await pool.query("SELECT * FROM blog_posts WHERE blog_id = ?", [id]);
    return blog.length > 0 ? blog[0] : null;
};

const addBlogPosts = async (blog) => {
    const [result] = await pool.query("INSERT INTO blog_posts SET ?", [blog]);
    return result.insertId;
};

const updateBlogPosts = async (blogId, blog) => {
    const [result] = await pool.query("UPDATE blog_posts SET ? WHERE blog_id = ?", [blog, blogId]);
    return result.affectedRows;
};

const deleteBlogPosts = async (blogId) => {
    const [result] = await pool.query("DELETE FROM blog_posts WHERE blog_id = ?", [blogId]);
    return result.affectedRows;
};
export { getBlogPosts, singleBlogPosts, addBlogPosts, updateBlogPosts, deleteBlogPosts };