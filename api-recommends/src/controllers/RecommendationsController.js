const RecommendationsParams = require("../helpers/RecommendationsParams");

class RecommendationsController {

  constructor(serviceProduct, serviceRecommendations) {
    this._serviceProduct = serviceProduct;
    this._serviceRecommendations = serviceRecommendations;
  }

  async index(request, response) {
    const { maxProducts } = request.query;
    const params = new RecommendationsParams(maxProducts);


    

    return response.send();
  }
}

module.exports = RecommendationsController;