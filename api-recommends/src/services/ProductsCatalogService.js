require('dotenv').config();

class ProductCatalogService {
  constructor(provider) {
    this._provider = provider;
    this.baseUrl = process.env.API_CATALOG_BASE || 'http://localhost:3333';
  }

  async getProductById(id, options = {}) {
    if (!!id) {
      let error = new Error('O id não pode ser nullo');
      error.status = 404;
      throw error;
    }
    const result = await this._provider.get(`${this.baseUrl}/products/${id}`, {
      params: {
        ...options
      }
    });

    return result.data;
  }
}

module.exports = ProductCatalogService;