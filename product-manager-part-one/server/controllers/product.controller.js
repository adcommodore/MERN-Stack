const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
};

module.exports.updateProduct = (req, res) => {
    Product.findAndUpdate(req.body)
        .then(product => {res.json(product)})
        .catch((err) => {res.json(err)});
};

module.exports.deleteProduct = (req, res) => {
    Product.delete(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
};
