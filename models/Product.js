const mongoose = require('mongoose')

const Product = mongoose.Schema({
  partnerName: {
    type: String,
    require: true
  }, operator: {
    type: String,
  },
  productType: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: true
  },
  basePrice: {
    type: Number,
    require: true
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  }
})

module.exports = mongoose.model('Products', Product)