const IProductRepository = require("../IProductRepository");

class KnexProductRepository extends IProductRepository {
  constructor({ database }) {
    super();
    this._database = database;

    this.addProduct = this.addProduct.bind(this);
    this.countProducts = this.countProducts.bind(this);
  }

  async addProduct(data) {
    const { rowCount } = await this._database('products').insert(data);
    return rowCount;
  }

  async countProducts() {
    const { amount_products } = await this._database('products')
      .select(this._database.raw('count(*) as amount_products'))
      .first();

    return parseInt(amount_products);
  }

  async getProduct(id, complete = false) {
    if (complete) {
      return await this._database('products')
        .select('*')
        .where('id', '=', id)
        .first();
    } else {
      return await this._database('products')
        .select('name', 'price', 'status', 'categories')
        .where('id', '=', id)
        .first();
    }
  }
}

module.exports = KnexProductRepository;