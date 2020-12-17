require('dotenv').config();

class ProductCatalogService {
  constructor(api) {
    this.api = api;
    this.baseUrl = process.env.API_CATALOG_BASE || 'http://localhost:3333';
  }

  async getProductById(id, options = {}) {
    const result = await this.api.get(`${this.baseUrl}/products/${id}`, {
      params: {
        ...options
      }
    });

    return result.data;
  }
}

module.exports = ProductCatalogService;