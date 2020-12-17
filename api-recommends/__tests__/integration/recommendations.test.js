const request = require('supertest');
const app = require('../../src/app');

describe('Recommendations controller', () => {
  
  it.only('should get products most popular and pricereduction', async () => {
    const response = await request(app)
      .get(`/recommendations`);
    
    expect(response.body).toEqual([]);
  })
});