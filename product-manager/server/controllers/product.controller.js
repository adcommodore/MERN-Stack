const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
};

module.exports.updateProduct = (req, res) => {
    Product.findAndUpdate({ _id: req.params.id }, req.body,
        { new: true, runValidators: true }
    )
        .then(product => {res.json(product)})
        .catch((err) => {res.json(err)});
    }

module.exports.deleteProduct = (req, res) => {
    Product.delete({ _id: req.params.id }, req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
};
