import $ from '../'

test('array', () => {
  const r: string[] = $.array($.string)(JSON.parse('["a","b"]'))
  expect(r).toEqual([ 'a', 'b' ])
})

test('array error', () => {
  expect(() => $.array($.string)(JSON.parse('["a",42]'))).toThrow('[1] Expected string, got 42.')
})
