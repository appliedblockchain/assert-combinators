import $ from '../'

test('object', () => {
  const r = $.object({ foo: $.string, bar: $.number })(JSON.parse('{"foo":"a","bar":1}'))
  expect(r).toEqual({ foo: 'a', bar: 1 })
})

test('error', () => {
  expect(() => $.object({ foo: $.string, bar: $.number })(JSON.parse('{"foo":"a","bar":"2"}'))).toThrow('[bar] Expected number, got \'2\'.')
})
