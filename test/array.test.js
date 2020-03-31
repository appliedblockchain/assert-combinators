// @flow

const array = require('../array')
const string = require('../string')

test('array', () => {
  const r = array(string)(JSON.parse('["a","b"]'))

  // $FlowFixMe
  /*:: ;(r: number[]); */

  /*:: ;(r: $ReadOnlyArray<string>); */

  expect(r).toEqual([ 'a', 'b' ])
})
