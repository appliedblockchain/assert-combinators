import $ from '..'

test('keyed', () => {
  expect($.keyed($.boolean)(JSON.parse('{"foo":true,"bar":false}'))).toEqual({
    foo: true,
    bar: false
  })
  expect(() => $.keyed($.boolean)(JSON.parse('{"foo":true,"bar":null}')))
    .toThrow('[\'bar\'] Expected boolean, got null.')
})
