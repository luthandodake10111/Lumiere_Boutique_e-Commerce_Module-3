import { pool } from '../config/config.js';

const getBlogPosts = async () => {
    const [blogs] = await pool.query("SELECT * FROM blog_posts");
    return blogs;
};

<<<<<<< HEAD:models/blogModel.js

=======
>>>>>>> 5d63e8f2391f802870ce027af9febb86e5ffb225:model/blogModel.js
const singleBlogPosts = async (id) => {
    const [blog] = await pool.query("SELECT * FROM blog_posts WHERE blog_id = ?", [id]);
    return blog.length > 0 ? blog[0] : null;
};

const addBlogPosts = async (blog) => {
<<<<<<< HEAD:models/blogModel.js
    const [result] = await pool.query("INSERT INTO blog_posts (title, content, author) VALUES (?, ?, ?)", 
    [blog.title, blog.content, blog.author]);
=======
    const [result] = await pool.query("INSERT INTO blog_posts SET ?", [blog]);
>>>>>>> 5d63e8f2391f802870ce027af9febb86e5ffb225:model/blogModel.js
    return result.insertId;
};

const updateBlogPosts = async (blogId, blog) => {
<<<<<<< HEAD:models/blogModel.js
    const [result] = await pool.query("UPDATE blog_posts SET title = ?, content = ?, author = ? WHERE blog_id = ?", 
    [blog.title, blog.content, blog.author, blogId]);
=======
    const [result] = await pool.query("UPDATE blog_posts SET ? WHERE blog_id = ?", [blog, blogId]);
>>>>>>> 5d63e8f2391f802870ce027af9febb86e5ffb225:model/blogModel.js
    return result.affectedRows;
};

const deleteBlogPosts = async (blogId) => {
    const [result] = await pool.query("DELETE FROM blog_posts WHERE blog_id = ?", [blogId]);
    return result.affectedRows;
};
<<<<<<< HEAD:models/blogModel.js

export { getBlogPosts, singleBlogPosts, addBlogPosts, updateBlogPosts, deleteBlogPosts };
=======
export { getBlogPosts, singleBlogPosts, addBlogPosts, updateBlogPosts, deleteBlogPosts };
>>>>>>> 5d63e8f2391f802870ce027af9febb86e5ffb225:model/blogModel.js
