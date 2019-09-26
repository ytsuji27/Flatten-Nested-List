const test = [[1,2,[3]],4];

const flatten = arr => {
  let result = [];
  flattenList(arr, result);
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

console.log(flatten(test));