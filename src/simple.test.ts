import * as $ from './index.js'

test('array of strings', () => {
  expect(() => $.array($.string)(JSON.parse('["a", "b"]'))).not.toThrow()
  expect(() => $.array($.string)(JSON.parse('["a", 1, "b"]'))).toThrow()
})
