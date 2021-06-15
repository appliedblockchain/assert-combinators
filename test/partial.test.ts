import * as $ from '../index.js'

test('shape', () => {
  const r = $.partial({ foo: $.string, bar: $.number })(JSON.parse('{"foo":"F","bar":1}'))
  expect(r).toEqual({ foo: 'F', bar: 1 })
})
