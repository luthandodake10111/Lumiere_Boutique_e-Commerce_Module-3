import { getProducts, singleProducts, addProduct, updateProduct, deleteProduct } from "../model/productModel.js";

const getProductsCon = async (req, res) => {
    try {
        const products = await getProducts();
        res.json({ products });
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
};

const singleProductsCon = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await singleProducts(productId);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ product });
    } catch (error) {
        res.status(500).json({ message: "Error fetching product", error });
    }
};

const addProductCon = async (req, res) => {
    try {
        const product = req.body;
        const productId = await addProduct(product);
        res.status(201).json({ message: 'Product added successfully', productId });
    } catch (error) {
        res.status(500).json({ message: "Error adding product", error });
    }
};

const updateProductCon = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = req.body;
        const updated = await updateProduct(productId, product);

        if (updated === 0) {
            return res.status(404).json({ message: "Product not found or no changes made" });
        }

        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error });
    }
};

const deleteProductCon = async (req, res) => {
    try {
        const productId = req.params.id;
        const deleted = await deleteProduct(productId);

        if (deleted === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error });
    }
};

export { getProductsCon, singleProductsCon, addProductCon, updateProductCon, deleteProductCon };
