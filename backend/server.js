require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { APP_CONFIG } = require('./src/constants');
const productRoutes = require('./src/routes/productRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Bakery B2B API is running' });
});

app.use(`${APP_CONFIG.API_PREFIX}/products`, productRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(APP_CONFIG.PORT, () => {
  console.log(`Server is running on port ${APP_CONFIG.PORT}`);
});
