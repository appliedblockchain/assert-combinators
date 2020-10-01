import $ from '..'

test('kv', () => {
  expect($.kv($.boolean)(JSON.parse('{"foo":true,"bar":false}'))).toEqual({
    foo: true,
    bar: false
  })
  expect(() => $.kv($.boolean)(JSON.parse('{"foo":true,"bar":null}')))
    .toThrow('[\'bar\'] Expected boolean, got null.')
})
