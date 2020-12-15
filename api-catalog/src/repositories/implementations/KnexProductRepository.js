const IProductRepository = require("../IProductRepository");

class KnexProductRepository extends IProductRepository {
  constructor({ database }) {
    super();
    this._database = database;

    this.addProduct = this.addProduct.bind(this);
    this.countProducts = this.countProducts.bind(this);
  }

  async addProduct(data) {
    await this._database('products').insert(data);
  }

  async countProducts() {
    const { amount_products } = await this._database('products')
      .select(this._database.raw('count(*) as amount_products'))
      .first();

    return amount_products;
  }
}

module.exports = KnexProductRepository;