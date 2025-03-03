const db = require('../config/database');

const ProductImage = {
    getImagesByProductId: async (productId) => {
        const query = 'SELECT * FROM product_images WHERE product_id = ?';
        const [images] = await db.execute(query, [productId]);
        return images;
    },
    getPrimaryImageByProductId: async (productId) => {
        const query = 'SELECT * FROM product_images WHERE product_id = ? AND is_primary = TRUE';
        const [image] = await db.execute(query, [productId]);
        return image[0]; 
    },
};

module.exports = ProductImage;
