const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - bulkPrice
 *         - minOrder
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the product
 *         name:
 *           type: string
 *           description: Product name
 *         price:
 *           type: number
 *           description: Retail price
 *         bulkPrice:
 *           type: number
 *           description: Wholesale price
 *         minOrder:
 *           type: integer
 *           description: Minimum order quantity
 *         category:
 *           type: string
 *           description: Product category (e.g., Bread, Pastry)
 *         description:
 *           type: string
 *           description: Detailed description
 *       example:
 *         id: 1
 *         name: Artisan Sourdough
 *         price: 6.5
 *         bulkPrice: 5.0
 *         minOrder: 10
 *         category: Bread
 *         description: Hand-crafted naturally fermented sourdough.
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The bakery product management API
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns the list of all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/', productController.getAllProducts);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: The product was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 */
router.post('/', productController.createProduct);

module.exports = router;
