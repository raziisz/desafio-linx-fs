const RecommendationsController = require('../controllers/RecommendationsController');

const getInstance = () => {
  const recommendationsController = new RecommendationsController();

  return {
    recommendationsController
  }
}

module.exports = getInstance;