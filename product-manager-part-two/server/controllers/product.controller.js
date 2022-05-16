const Product = require('../models/product.model');

module.exports = {
    createProduct: (req, res) =>
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => console.log(err)),
    
    getAllProducts: (req, res) =>
        Product.find({})
            .then((products) => res.json(products))
            .catch((err) => console.log(err)),

    findOneProduct: (req, res) =>
    Product.findOne({_id:requestAnimationFrame.params.id})
        .then((oneproduct) => res.json(oneproduct))
        .catch((err) => console.log(err))
}
