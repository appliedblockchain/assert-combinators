// @flow

const tuple = require('../tuple')
const number = require('../number')
const string = require('../string')

test('tuple', () => {
  const r = tuple(number, string)(JSON.parse('[1,"foo"]'))

  /*:: ;(r: [ number, string ]); */

  // $FlowFixMe
  /*:: ;(r: [ number, number ] ); */

  expect(r).toEqual([ 1, 'foo' ])
})
