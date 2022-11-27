const Product = require("../models/Product");


module.exports = {
  getProducts: async (req, res) => {
    try {
      const products = await Product.find()
      // Pagination
      const page = parseInt(req.query.page)
      const limit = parseInt(req.query.limit)
      const startIndex = (page - 1) * limit
      const endIndex = page * limit
      const results = {}

      if (endIndex < products.length) {
        results.next = {
          page: page + 1,
          limit: limit
        }
      }
      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit
        }
      }
      results.results = products.slice(startIndex, endIndex)
      return res.status(200).json(results)
    } catch (error) {
      console.log(error)
      return res.status(500).send(error)
    }
  },
  addProducts: async (req, res) => {
    const product = new Product(req.body)
    try {
      const savedProducts = await product.save()
      return res.status(200).json(savedProducts)
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  updateProducts: async (req, res) => {
    try {
      const updatedProducts = await Product.updateOne({ _id: req.params.id }, { $set: req.body })
      return res.status(200).json(updatedProducts)
    } catch (error) {
      return res.status(500).send(error)
    }
  }

}
