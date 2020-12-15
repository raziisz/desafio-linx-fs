const IProductRepository = require("../IProductRepository");

class KnexProductRepository extends IProductRepository {
  constructor({ database }) {
    super();
    this._database = database;
  }

  async addProduct(data) {
    await this._database('products').insert(data);
  }
}

module.exports = KnexProductRepository;