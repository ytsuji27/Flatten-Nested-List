const flatten = arr => {
  let result = [];
  flattenList(arr, result);
  return result;
}

const flattenList = (arr, result) => {
  arr.forEach(value => {
    if (typeof(value) === 'number') {
      result.push(value);
      return;
    } else {
      flattenList(value, result);
    }
  })
  return result;
}

module.exports = flatten;