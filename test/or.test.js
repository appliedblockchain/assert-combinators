// @flow

const or = require('../or')
const number = require('../number')
const string = require('../string')

test('or', () => {
  const r = or(number, string)(JSON.parse('"foo"'))

  // $FlowFixMe
  /*:: ;(r: string); */

  /*:: ;(r: number | string); */
  expect(r).toEqual('foo')
})
