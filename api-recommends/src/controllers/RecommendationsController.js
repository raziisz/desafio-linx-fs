const RecommendationsParams = require("../helpers/RecommendationsParams");

class RecommendationsController {

  constructor(serviceProduct, serviceRecommendations) {
    this._serviceProduct = serviceProduct;
    this._serviceRecommendations = serviceRecommendations;

    this.index = this.index.bind(this);
  }

  async index(request, response) {
    const { maxProducts } = request.query;
    const params = new RecommendationsParams(maxProducts);
    let productsPricesReductions = [];
    let productsMostPopular = [];
    
    try {
      const resultPricesReductions = await this._serviceRecommendations.getsProductsRecommendations('pricereduction');
      const resultMostPopular = await this._serviceRecommendations.getsProductsRecommendations('mostpopular');   
    } catch (error) {
      console.log('deu ruim', error);
    }
    let quantity = params.maxProducts + 1;
    productsMostPopular = resultMostPopular.sort((a, b) => b.weight - a.weight).slice(0, quantity);
    productsPricesReductions = resultPricesReductions.sort((a, b) => b.weight - a.weight).slice(0, quantity);

    



    return response.send({productsPricesReductions, productsMostPopular});
  }
}

module.exports = RecommendationsController;