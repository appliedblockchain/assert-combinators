// @flow

const and = require('../and')
const object = require('../object')
const string = require('../string')

test('and', () => {
  const r = and(
    object({ firstName: string, lastName: string, name: string }),
    object({ name: string })
  )(JSON.parse('{"name":"Foo"}'))

  // $FlowFixMe
  /*:: ;(r: {| firstName: number, lastName: string, name: string |}); */

  /*:: ;(r: {| name: string |}); */
  expect(r).toEqual({ name: 'Foo' })
})
