const request = require('supertest');
const app = require('../../src/app');

describe('Recommendations controller', () => {
  
  it('should returns an object with properties productsPricesReductions and productsMostPopular', async () => {
    const response = await request(app)
      .get(`/recommendations`);
    
    expect(response.body).toHaveProperty('productsPricesReductions');
    expect(response.body).toHaveProperty('productsMostPopular');
  });

  it('should returns an object with arrays length 10', async () => {
    const response = await request(app)
      .get(`/recommendations`);

    expect(response.body.productsPricesReductions.length).toBe(10);
    expect(response.body.productsMostPopular.length).toBe(10);
  });

  it('should returns an object with arrays length 15', async () => {
    const response = await request(app)
      .get(`/recommendations?maxProducts=15`);

    expect(response.body.productsPricesReductions.length).toBe(15);
    expect(response.body.productsMostPopular.length).toBe(15);
  });

  it('should returns an error not found', async () => {
    const response = await request(app)
      .get(`/recommendationss`);

    expect(response.body.message).toEqual('not found');
    expect(response.status).toBe(404);
  });

  it.only('should returns an array with objects products compact', async () => {
    const response = await request(app)
      .get(`/recommendations`);
    
    expect(response.body.productsPricesReductions[0]).toHaveProperty('name');
    expect(response.body.productsPricesReductions[0]).toHaveProperty('price');
    expect(response.body.productsPricesReductions[0]).toHaveProperty('status');
    expect(response.body.productsPricesReductions[0]).toHaveProperty('categories');
  });
});