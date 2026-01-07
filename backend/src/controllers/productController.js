const prisma = require('../config/db');

const getAllProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
    } catch (error) {
        console.error('Error in getAllProducts:', error);
        res.status(500).json({ error: 'Failed to fetch products', details: error.message });
    }
};

const createProduct = async (req, res) => {
    const { name, price, bulkPrice, minOrder, category, description } = req.body;
    try {
        const newProduct = await prisma.product.create({
            data: { name, price, bulkPrice, minOrder, category, description },
        });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
    }
};

module.exports = {
    getAllProducts,
    createProduct,
};
