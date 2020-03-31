// @flow

const and = require('../and')
const object = require('../object')
const string = require('../string')

test.skip('and', () => {
  const r = and(
    object({ firstName: string, lastName: string, name: string }),
    object({ name: string })
  )(JSON.parse('{"name":"Foo"}'))

  /*:: ;(r: {| name: string |}); */
  expect(r).toEqual({ name: 'Foo' })
})
