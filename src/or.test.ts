import * as $ from './index.js'

test('or', () => {
  const assert = $.or($.number, $.string)
  const r = assert(JSON.parse('"foo"'))
  expect(r).toEqual('foo')
})
