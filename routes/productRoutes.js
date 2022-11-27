const express = require('express')
const { getProducts, addProducts, updateProducts } = require("../controllers/productController")
const router = express.Router()


router.get('/', getProducts)
router.get('/:id')
router.post('/', addProducts)
router.patch('/:id', updateProducts)
router.delete('/')



module.exports = router

