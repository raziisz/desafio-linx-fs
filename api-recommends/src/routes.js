const { Router } = require('express');
const factoryRecommendations = require('./factories/factorieRecommendations');
const { recommendationsController } = factoryRecommendations();

const routes = Router();

routes.get('recommendations-prod', recommendationsController.index);

module.exports = routes;