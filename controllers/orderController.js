const Order = require('../models/Order');
const { calculateTotal } = require('../utils/helpers');
exports.createOrder = async (req, res) => {
  const { userId } = req.params;
  const { items } = req.body;
  const totalAmount = calculateTotal(items);
  const order = new Order({ userId, items, totalAmount });
  await order.save();
  res.status(201).json(order);
};
exports.getOrdersByUser = async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });
  res.json(orders);
};
exports.getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.orderId);
  res.json(order);
};