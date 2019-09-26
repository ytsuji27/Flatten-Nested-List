const flatten = require('./solution');

test('true to equal true', () => {
  expect(true).toBe(true);
})

test('Flattens [[1,1],2,[1,1]] to equal [1,1,2,1,1]', () => {
  expect(flatten([[1,1],2,[1,1]])).toEqual([1,1,2,1,1]);
})

test('Flattens [1,[4,[6]]] to equal [1,4,6]', () => {
  expect(flatten([1,[4,[6]]])).toEqual([1,4,6]);
})

// NOTE: Need to use 'toEqual' when comparing objects
