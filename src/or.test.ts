import * as $ from './index.js'

test('or', () => {
  const r = $.or($.number, $.string)(JSON.parse('"foo"'))
  expect(r).toEqual('foo')
})
