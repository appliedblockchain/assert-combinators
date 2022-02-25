import * as $ from './index.js'

test('partial', () => {
  const r = $.partial({ foo: $.string, bar: $.number })(JSON.parse('{"foo":"foo"}'))
  expect(r).toEqual({ foo: 'foo' })
})
