class RecommendationsParams {
  constructor(maxProducts = 10) {
    this.maxProducts = maxProducts < 10 ? 10 : maxProducts;
  }
}

module.exports = RecommendationsParams;