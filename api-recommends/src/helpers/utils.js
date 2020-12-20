function sortAndGet(array, options) {
  let { attribute } = options;
  let sortArray = array.sort((a, b) => b[attribute] - a[attribute]);

  return sortArray;
}

module.exports = {
  sortAndGet
}