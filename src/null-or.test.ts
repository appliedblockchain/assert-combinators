import * as $ from './index.js'

test('simple', () => {
  const union = $.or($.string, $.number)
  const assert = $.nullOr(union)
  expect(assert(null)).toEqual(null)
  expect(assert(1)).toEqual(1)
  expect(assert('foo')).toEqual('foo')
  expect(() => assert(true)).toThrow('')
})
