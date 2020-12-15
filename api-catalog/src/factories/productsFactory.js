const ProductRepository = require('../repositories/implementations/KnexProductRepository');
const ProductController = require('../controllers/ProductsController');
const database = require('../database');

const generateInstance = () => {
  const repository = new ProductRepository({ database });
  const productController = new ProductController(repository);

  return { 
    repository,
    productController
  }
}

module.exports = generateInstance;