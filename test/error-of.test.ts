import * as $ from '..'

test('errorMessage', () => {
  expect($.errorOf($.string)('foo')).toEqual(undefined)
  expect($.errorOf($.string)(null)).toMatchObject({ message: 'Expected string, got null.' })
})
