const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product', 
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true 
  },
  quantity: {
    type: Number,
    required: true
  }
}, { _id: false });

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: {
    type: [orderItemSchema],
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  }
}, { timestamps: true }); 
module.exports = mongoose.model('Order', orderSchema);
