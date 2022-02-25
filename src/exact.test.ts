import * as $ from './index.js'

test('exact ok', () => {
  const value = $.exact({ foo: $.string, bar: $.number })(JSON.parse('{"foo":"a","bar":1}'))
  expect(value).toEqual({ foo: 'a', bar: 1 })
})

test('exact', () => {
  expect(() => $.exact({ foo: $.string })(JSON.parse('{"foo":"a","bar":1,"baz":2}'))).toThrow('Unexpected extra keys bar, baz in { foo: \'a\', bar: 1, baz: 2 }.')
})
