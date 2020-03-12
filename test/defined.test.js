// @flow

const defined = require('../defined')
const object = require('../object')

test('defined', () => {
  const a = object({ foo: defined })
  const r = a(JSON.parse('{"foo":null}'))
  // $FlowFixMe
  /*:: ;(r: void); */
  expect(r).toEqual({ foo: null })
  expect(() => a(JSON.parse('{"bar":1}'))).toThrow('Expected defined.')
})
