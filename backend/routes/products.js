const express = require('express')
const router = express.Router()

const productsController = require('../controllers/productsController')

// get all products
router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProducts);

module.exports = router
