const NotImplementedException = require('../utils/NotImplemented');

class IProductRepository {
  constructor() {}

  addProduct(data) {
    throw new NotImplementedException();
  }

  getProduct(id) {
    throw new NotImplementedException();
  }

  countProducts() {
    throw new NotImplementedException();
  }
}

module.exports = IProductRepository;