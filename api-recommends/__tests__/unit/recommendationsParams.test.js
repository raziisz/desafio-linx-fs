const RecommendationsParams = require('../../src/helpers/RecommendationsParams');

const MOCK_PARAMS_DEFAULT = {
  maxProducts: 10,
}

const MOCK_PARAMS = {
  maxProducts: 20
}

describe('Recommendations params', () => {
  it('should get recommendations params defaults values', () => {
    const params = new RecommendationsParams();

    expect(params).toEqual(MOCK_PARAMS_DEFAULT);
  });

  it('should get recommendations params', () => {
    const params = new RecommendationsParams(MOCK_PARAMS.maxProducts);

    expect(params).toEqual(MOCK_PARAMS);
  });

  it ('should returns maxProducts 10 (verify maxProducts < 10)', () => {
    const params = new RecommendationsParams(8);

    expect(params.maxProducts).toBe(10);
  }) 

});