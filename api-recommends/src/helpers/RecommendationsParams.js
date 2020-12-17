class RecommendationsParams {
  constructor({maxProducts = 10, mostpopular = '', pricereduction = ''}) {
    this.maxProducts = maxProducts < 10 ? 10 : maxProducts;
    this.mostpopular = mostpopular;
    this.pricereduction = pricereduction;
  }
}