const { Router } = require('express');
const factoryRecommendations = require('./factories/factorieRecommendations');
const { recommendationsController } = factoryRecommendations();

const router = Router();

router.get('/recommendations', recommendationsController.index);

module.exports = router;