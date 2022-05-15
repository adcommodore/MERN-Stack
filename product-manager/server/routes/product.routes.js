const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api', ProductController.createProduct);
    app.delete('/api/product', ProductController.deleteProduct);  
}

