const express = require('express');
const router = express.Router();
const { createOrder, getOrdersByUser, getOrderById } = require('../controllers/orderController');
router.post('/:userId', createOrder);
router.get('/:userId', getOrdersByUser);
router.get('/id/:orderId', getOrderById);
module.exports = router;
