// @flow strict

const unique = require('../unique')

test('unique', () => {
  expect(() => unique([ 'b', 'a', 'c', 'a' ])).toThrow('Expected unique values, got duplicate \'a\'.')
  expect(unique([ 'b', 'c', 'a' ])).toEqual([ 'b', 'c', 'a' ])
})
