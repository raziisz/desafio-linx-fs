function sortAndGet(array, options) {
  let { attribute, quantity } = options;
  let sortArray = array.sort((a, b) => b[attribute] - a[attribute]).slice(0, quantity);

  return sortArray;
}

module.exports = {
  sortAndGet
}