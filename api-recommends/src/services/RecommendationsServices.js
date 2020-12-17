require('dotenv').config();

class RecommendationsServices {
  constructor(provider) {
    this._provider = provider;
    this._baseUrl = process.env.API_REC;
  }

  async getsProductsRecommendations(type) {
    if (!type) {
      const error = new Error('type recommendation not should is empty');
      error.status = 500;
      throw error;
    }
    const result = await this._provider.get(`${this._baseUrl}/${type}.json`);

    return result.data;

  }
}

module.exports = RecommendationsServices;