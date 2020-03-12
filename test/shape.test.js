// @flow

const shape = require('../shape')
const number = require('../number')
const string = require('../string')

test('shape', () => {
  const r = shape({ foo: string, bar: number })(JSON.parse('{"foo":"F","bar":1}'))
  /*:: ;(r: $Shape<{ foo: string, bar: number }>); */
  expect(r).toEqual({ foo: 'F', bar: 1 })
})
