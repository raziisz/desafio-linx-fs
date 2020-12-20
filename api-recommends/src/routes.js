const { Router } = require('express');
const factoryRecommendations = require('./factories/factorieRecommendations');
const { recommendationsController } = factoryRecommendations();

const router = Router();

router.get('/', (req, res) => {
  return res.send("It's works");
});

router.get('/recommendations', recommendationsController.index);

module.exports = router;