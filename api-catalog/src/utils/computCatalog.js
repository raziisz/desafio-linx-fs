const { createReadStream } = require('fs');
const { resolve, join } = require('path');
const { createInterface } = require('readline');

const ProductRepository = require('../repositories/implementations/KnexProductRepository');
const knex = require('../database');

class ComputCatalog {
  constructor() {
    this.repo = new ProductRepository(knex);
  }

  compCatalogJson() {
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
        type: result.type
      }
      //save data

      await this.repo.addProduct(data);
    });

  }
}

module.exports = new ComputCatalog().compCatalogJson;