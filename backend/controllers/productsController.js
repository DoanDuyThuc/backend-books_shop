const Products = require('../models/Products');

class productsController {

    async getAllProducts(req,res) {
        try {
            const products = await Products.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(err);
        }
    }

    async getProducts(req,res) {
        try {
            const products = await Products.findById(req.params.id);
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(err);
        }
    }
       
}

module.exports = new productsController;