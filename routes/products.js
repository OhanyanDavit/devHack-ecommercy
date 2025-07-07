const express = require('express');
const router = express.Router();
const { createProduct, getProducts, getProdById } = require('../controllers/productController');
router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProdById);

module.exports = router;