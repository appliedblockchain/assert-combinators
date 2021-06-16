import * as $ from '../'

test('defined', () => {
  const a = $.object({ foo: $.defined })
  const r = a(JSON.parse('{"foo":null}'))
  expect(r).toEqual({ foo: null })
  expect(() => a(JSON.parse('{"bar":1}'))).toThrow('Expected defined.')
})
