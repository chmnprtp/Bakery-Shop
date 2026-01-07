require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Bakery B2B API is running' });
});

// Sample Products for B2B
const products = [
  { id: 1, name: 'Sourdough Bread', price: 5.00, bulkPrice: 4.00, minOrder: 10 },
  { id: 2, name: 'Croissants', price: 2.50, bulkPrice: 2.00, minOrder: 24 },
  { id: 3, name: 'Bagels', price: 1.50, bulkPrice: 1.10, minOrder: 50 }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
