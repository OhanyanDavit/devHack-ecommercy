require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const cartRoutes = require('./routes/carts');
const orderRoutes = require('./routes/orders');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/carts', cartRoutes);
app.use('/orders', orderRoutes);

app.use(errorHandler);

connectDB().then(() => {
  app.listen(process.env.PORT)
});