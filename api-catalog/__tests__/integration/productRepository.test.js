const knex = require("../../src/database");

const ProductRepository = require("../../src/repositories/implementations/KnexProductRepository");
let repository = new ProductRepository({ database: knex });

const MOCK_PRODUCT_SAVE = {
  id: "12602",
  name: "Cortina para Box 180x180cm EVA 3D Mor - 12319",
  clientLastUpdated: "2020-01-21T09:00:46.000Z",
  oldPrice: "649.90",
  created: "2017-12-13T22:42:48.000Z",
  image:
    "//d1h4n7nr93grs2.cloudfront.net/Custom/Content/Products/11/07/1107689_p-12602_m1_636935124736028834.jpg",
  brand: "Mor",
  categories: "452 - Casa e Decoração | 364 - Banheiro | 512 - Cortina Box",
  price: "649.90",
  installment: JSON.stringify({ count: 10, price: 64.99 }),
  description: "Cortina para Box 180x180cm EVA 3D Mor 1562541",
  type: "product",
  status: "AVAILABLE",
};

const MOCK_PRODUCT_COMPACT = {
  name: "Cortina para Box 180x180cm EVA 3D Mor - 12319",
  price: "649.90",
  status: "AVAILABLE",
  categories: "452 - Casa e Decoração | 364 - Banheiro | 512 - Cortina Box",
};

describe("Product repository", () => {
  beforeAll((done) => {
    knex.migrate.rollback().then(() => {
      knex.migrate.latest().then(() => {
        done();
      });
    });
  });

  it("should create a new product and rows count", async () => {
    const result = await repository.addProduct(MOCK_PRODUCT_SAVE);

    expect(result).toBe(1);
  });

  it("should get an product by id compact", async () => {
    const result = await repository.getProduct(MOCK_PRODUCT_SAVE.id);

    expect(result).toEqual(MOCK_PRODUCT_COMPACT);
  });

  it("should get an product by id complete", async () => {
    let MOCK_PRODUCT_COMPLETE = MOCK_PRODUCT_SAVE;
    MOCK_PRODUCT_COMPLETE.installment = JSON.parse(MOCK_PRODUCT_COMPLETE.installment);
    MOCK_PRODUCT_COMPLETE.created = new Date(MOCK_PRODUCT_COMPLETE.created);
    MOCK_PRODUCT_COMPLETE.clientLastUpdated = new Date(MOCK_PRODUCT_COMPLETE.clientLastUpdated);
    
    const complete = true;
    const result = await repository.getProduct(MOCK_PRODUCT_SAVE.id, complete);

    expect(result).toEqual(MOCK_PRODUCT_COMPLETE);
  });

  it('should get amount products', async () => {
    const result = await repository.countProducts();

    expect(result).toBe(1);
  })

  afterAll((done) => {
    knex.migrate.rollback().then(() => done());
  });
});
