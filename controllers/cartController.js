const Cart = require('../models/Cart');
exports.addToCart = async (req, res) => {
  const { userId } = req.params;
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId });
  if (!cart) cart = new Cart({ userId, items: [] });
  const itemIndex = cart.items.findIndex(i => i.productId.equals(productId));
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }
  await cart.save();
  res.json(cart);
};
exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.productId');
  res.json(cart);
};
exports.removeFromCart = async (req, res) => {
  const { userId } = req.params;
  const { productId } = req.body;
  const cart = await Cart.findOne({ userId });
  if (!cart) return res.status(404).json({ error: 'Cart not found' });
  cart.items = cart.items.filter(item => !item.productId.equals(productId));
  await cart.save();
  res.json(cart);
};