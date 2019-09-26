const flatten = require('./solution');

test('true to equal true', () => {
  expect(true).toBe(true);
})

test('Flattens [[1,1],2,[1,1]] to equal [1,1,2,1,1]', () => {
  expect(flatten([[1,1],2,[1,1]])).toBe([1,1,2,1,1]);
})
