// @flow

const array = require('../array')
const string = require('../string')

test('array', () => {
  const r = array(string)(JSON.parse('["a","b"]'))

  // $FlowFixMe
  /*:: ;(r: number[]); */

  /*:: ;(r: string[]); */

  expect(r).toEqual([ 'a', 'b' ])
})

test('array error', () => {
  expect(() => array(string)(JSON.parse('["a",42]'))).toThrow('[1] Expected string, got 42.')
})
