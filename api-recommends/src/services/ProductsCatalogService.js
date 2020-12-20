require('dotenv').config();

class ProductCatalogService {
  constructor(provider) {
    this._provider = provider;
    this._baseUrl = process.env.API_CATALOG_BASE || 'http://localhost:3333';
  }

  async getProductById(id, options = {}) {
    if (!id) {
      let error = new Error('O id não pode ser nullo');
      error.status = 404;
      throw error;
    }
    options.response = 'complete';
    const result = await this._provider.get(`${this._baseUrl}/products/${id}`, {
      params: {
        ...options
      }
    });

    return result.data;
  }

  async getProducts(data = [], options = {}) {
    let products = [];

    for (let i = 0; i < data.length; i++) {
      const productId = data[i].recommendedProduct.id;
      try {
        let product = await this.getProductById(productId, options);
        let isUnavailable = product.status === 'UNAVAILABLE';
        
        if (isUnavailable) continue;
        
        products.push(product);    
      } catch (error) {
        if (error.response.status === 404) {
          continue;
        }

        throw error;
      }
    }

    products = products.slice(0, options.quantity);

    return products;
  }
}

module.exports = ProductCatalogService;