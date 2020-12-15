const IProductRepository = require("../IProductRepository");

class KnexProductRepository extends IProductRepository {
  constructor({ database }) {
    super();
    this.database = database;
  }

  async addProduct(data) {
    await this.database('products').insert(data);
  }
}

module.exports = KnexProductRepository;