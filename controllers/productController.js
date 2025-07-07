const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
};

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};


exports.getProdById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid product ID' });
    }
    const prod = await Product.findById(id);
    if (!prod) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(prod);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};