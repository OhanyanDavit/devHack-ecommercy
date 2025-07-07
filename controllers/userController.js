const User = require('../models/User');
exports.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
};
exports.getUser = async (req, res) => {
  const products = await User.find();
  res.json(products);
};
