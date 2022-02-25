import * as $ from './index.js'

test('errorMessage', () => {
  expect($.errorOf($.string)('foo')).toEqual(undefined)
  expect($.errorOf($.string)(null)).toMatchObject({ message: 'Expected string, got null.' })
})
