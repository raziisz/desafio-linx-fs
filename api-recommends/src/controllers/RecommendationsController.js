const RecommendationsParams = require("../helpers/RecommendationsParams");
const { sortAndGet } = require("../helpers/utils");

class RecommendationsController {
  constructor(serviceProduct, serviceRecommendations) {
    this._serviceProduct = serviceProduct;
    this._serviceRecommendations = serviceRecommendations;

    this.index = this.index.bind(this);
  }

  async index(request, response, next) {
    const { maxProducts } = request.query;
    const params = new RecommendationsParams(maxProducts);
    let productsPricesReductions = [];
    let productsMostPopular = [];

    let resultPricesReductions = [];
    let resultMostPopular = [];

    try {
      resultPricesReductions = await this._serviceRecommendations.getsProductsRecommendations(
        "pricereduction"
      );
      resultMostPopular = await this._serviceRecommendations.getsProductsRecommendations(
        "mostpopular"
      );
    } catch (error) {
      console.log("deu ruim", error);
      next(error);
    }

    let sortMostPopular = sortAndGet(resultMostPopular, { attribute: "weight" });
    let sortPricesReductions = sortAndGet(resultPricesReductions, { attribute: "weight" });
    
    try {
      let quantity = params.maxProducts;
      productsMostPopular = await this._serviceProduct.getProducts(
        sortMostPopular,
        { quantity }
      );
      productsPricesReductions = await this._serviceProduct.getProducts(
        sortPricesReductions,
        { quantity }
      );
    } catch (error) {
      console.log("deu bad", error);
      next(error);
    }
    return response.json({ productsPricesReductions, productsMostPopular });
  }
}

module.exports = RecommendationsController;
