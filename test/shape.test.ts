import $ from '../'

test('shape', () => {
  const r = $.shape({ foo: $.string, bar: $.number })(JSON.parse('{"foo":"F","bar":1}'))
  expect(r).toEqual({ foo: 'F', bar: 1 })
})
