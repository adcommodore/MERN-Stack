const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api', ProductController.createProduct);
    app.patch('/api/edit', ProductController.updateProduct);
    app.delete('/api/product/delete', ProductController.deleteProduct);  
}

