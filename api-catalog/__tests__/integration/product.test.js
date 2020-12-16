const computCatalogs = require('../../src/utils/computCatalog');
require('dotenv').config();
const request = require('supertest');
const app = require('../../src/app');
const knex = require('../../src/database');

const PRODUCT_COMPACT = {
  name: "Cortina para Box 180x180cm EVA 3D Mor - 12319",
  price: "649.90",
  status: "AVAILABLE",
  categories: "452 - Casa e Decoração | 364 - Banheiro | 512 - Cortina Box"
}

const PRODUCT_COMPLETE = {
  id: "12602",
  name: "Cortina para Box 180x180cm EVA 3D Mor - 12319",
  clientLastUpdated: "2020-01-21T09:00:46.000Z",
  oldPrice: "649.90",
  created: "2017-12-13T22:42:48.000Z",
  image: "//d1h4n7nr93grs2.cloudfront.net/Custom/Content/Products/11/07/1107689_p-12602_m1_636935124736028834.jpg",
  brand: "Mor",
  categories: "452 - Casa e Decoração | 364 - Banheiro | 512 - Cortina Box",
  price: "649.90",
  installment: {
  count: 10,
  price: 64.99
  },
  description: "Cortina para Box 180x180cm EVA 3D Mor 1562541",
  type: "product",
  status: "AVAILABLE"
}

describe('Products', () => {
  beforeAll((done) => {
    
    knex.migrate.rollback()
      .then(() => {
        knex.migrate.latest()
          .then(async () => {
            await computCatalogs();
            done();
          });
      })
    
    done();
  })

  it('should get an product by id ', async () => {
    const id = 12602;

    const response = await request(app)
      .get(`/products/${id}`);

    expect(response.body.name).toBe(PRODUCT_COMPACT.name)
  });

  afterAll((done) => {
    knex.migrate.rollback()
      .then(() => done())
  })
});