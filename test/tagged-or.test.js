// @flow

const taggedOr = require('../tagged-or')
const string = require('../string')
const number = require('../number')

test('taggedOr', () => {
  const r = taggedOr(
    [ 'string', string ],
    [ 'number', number ]
  )(JSON.parse('"foo"'))
  /*:: ;(r: $ReadOnly<{| tag: 'string', value: string |}> | $ReadOnly<{| tag: 'number', value: number |}>); */
  if (r.tag === 'string') {
    /*:: ;(r.value: string ); */

    // $FlowFixMe
    /*:: ;(r.value: number); */
  }
  if (r.tag === 'number') {
    /*:: ;(r.value: number ); */

    // $FlowFixMe
    /*:: ;(r.value: string); */
  }
  expect(r).toEqual({ tag: 'string', value: 'foo' })
})
