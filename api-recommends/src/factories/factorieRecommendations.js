const RecommendationsController = require('../controllers/RecommendationsController');
const ProductCatalogService = require('../services/ProductsCatalogService');
const axios = require('axios');
const RecommendationsServices = require('../services/RecommendationsServices');

const getInstance = () => {
  const serviceProductCatalog = new ProductCatalogService(axios);
  const serviceRecommendations = new RecommendationsServices(axios);
  const recommendationsController = new RecommendationsController(serviceProductCatalog, serviceRecommendations);

  return {
    recommendationsController,
    serviceProductCatalog,
    serviceRecommendations
  }
}

module.exports = getInstance;