// @flow

const boolean = require('../boolean')
const nilOr = require('../nil-or')
const nullOr = require('../null-or')
const number = require('../number')
const string = require('../string')
const tuple = require('../tuple')
const undefinedOr = require('../undefined-or')

test('tuple', () => {
  const r = tuple(undefinedOr(number), nullOr(string), nilOr(boolean))(JSON.parse('[1,"foo"]'))

  /*:: ;(r: [ void | number, null | string, ?boolean ]); */

  // $FlowFixMe
  /*:: ;(r: [ number, string, boolean ] ); */

  expect(r).toEqual([ 1, 'foo' ])
})
