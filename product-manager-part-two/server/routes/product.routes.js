const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api/create', ProductController.createProduct); 
    app.get('/api/allproducts', ProductController.getAllProducts);
    app.get('/api/:id', ProductController.findOneProduct);

}

