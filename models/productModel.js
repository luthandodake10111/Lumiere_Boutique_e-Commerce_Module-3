import { pool } from '../config/config.js';

const getProducts = async () => {
    const [products] = await pool.query(`
        SELECT * FROM product_images 
        INNER JOIN products 
        ON product_images.product_id = products.product_id;
    `);
    return products;
};

const singleProduct = async (product_id) => {
    const [product] = await pool.query("SELECT * FROM products WHERE product_id = ?", [product_id]);
    return product.length > 0 ? product[0] : null;
};

const addProduct = async (product) => {
    const [result] = await pool.query("INSERT INTO products SET ?", [product]);
    return result.insertId;
};

const updateProduct = async (productId, product) => {
    const [result] = await pool.query("UPDATE products SET ? WHERE product_id = ?", [product, productId]);
    return result.affectedRows > 0;
};

const deleteProduct = async (productId) => {
    const [result] = await pool.query("DELETE FROM products WHERE product_id = ?", [productId]);
    return result.affectedRows > 0;
};

export { getProducts, singleProduct, addProduct, updateProduct, deleteProduct };
