const IProductRepository = require("../IProductRepository");

class KnexProductRepository extends IProductRepository {
  constructor({ database }) {
    super();
    this._database = database;
  }

  async addProduct(data) {
    await this._database('products').insert(data);
  }

  async countProducts() {
    return await this._database('products')
      .select(this._database.raw('count(*) as amountProducts'));
  }
}

module.exports = KnexProductRepository;