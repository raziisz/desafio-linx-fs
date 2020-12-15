const { createReadStream } = require('fs');
const { resolve, join } = require('path');
const { createInterface } = require('readline');
const { once } = require('events');

const ProductRepository = require('../repositories/implementations/KnexProductRepository');
const knex = require('../database');

class ComputCatalog {
  constructor() {
    this.repo = new ProductRepository({ database: knex});
    this.compCatalogJson = this.compCatalogJson.bind(this);
  }

  async compCatalogJson() {
    try {
      const amountProducts = await this.repo.countProducts();
      if (amountProducts > 0) {
        return;
      }
      
      const fileDir = resolve(__dirname, "dataset");
      const filePath = join(fileDir, "catalog.json");
  
      const readable = createReadStream(filePath);
      const rl = createInterface({
        input: readable
      });
  
      rl.on('line', async line => {
        const result = JSON.parse(line);
        const data = {
          id: result.id,
          name: result.name,
          clientLastUpdated: result.clientLastUpdated,
          oldPrice: result.oldPrice,
          created: result.created,
          image: result.images.default,
          brand: result.brand,
          categories: result.categories.map(categorie => {
            return `${categorie.id} - ${categorie.name}`;
          }).join(' | '),
          price: parseFloat(result.price),
          installment: JSON.stringify(result.installment),
          description: result.description,
          type: result.type,
          status: result.status
        }
        //save data
  
        await this.repo.addProduct(data);
      });
      await once(rl, 'close');

      console.log('File processed');
    } catch (error) {
      console.log(error);
      throw error;
    }

  }
}

module.exports = new ComputCatalog().compCatalogJson;