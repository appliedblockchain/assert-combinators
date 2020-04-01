// @flow

const exact = require('../exact')
const string = require('../string')

test('exact', () => {
  expect(() => exact({ foo: string })(JSON.parse('{"foo":"a","bar":1,"baz":2}'))).toThrow('zz')
})
