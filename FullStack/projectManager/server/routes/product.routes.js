const productController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api', productController.index);
    app.post('/api/products', productController.createProduct);
}