// @flow

const $ = require('../')

test('errorMessage', () => {
  expect($.errorMessage($.string)('foo')).toEqual(null)
  expect($.errorMessage($.string)(null)).toEqual('Expected string, got null.')
})
