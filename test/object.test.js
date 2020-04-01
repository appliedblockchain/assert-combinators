// @flow

const number = require('../number')
const object = require('../object')
const string = require('../string')

test('object', () => {
  const r = object({ foo: string, bar: number })(JSON.parse('{"foo":"a","bar":1}'))

  // $FlowFixMe
  /*:: ;(r.foo: number); */

  // $FlowFixMe
  /*:: ;(r.bar: string); */

  /*:: ;(r.foo: string); */
  /*:: ;(r.bar: number); */

  expect(r).toEqual({ foo: 'a', bar: 1 })
})

test('error', () => {
  expect(() => object({ foo: string, bar: number })(JSON.parse('{"foo":"a","bar":"2"}'))).toThrow('[bar] Expected number, got \'2\'.')
})
