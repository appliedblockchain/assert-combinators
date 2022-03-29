import * as $ from './index.js'

test('tuple', () => {
  const r = $.tuple($.number, $.string)(JSON.parse('[1,"foo"]'))
  expect(r).toEqual([ 1, 'foo' ])
})

test('more', () => {
  expect(() => $.tuple($.number, $.string)(JSON.parse('[1,"foo","baz"]'))).toThrow('Expected tuple length of not more than 2, got 3 in [ 1, \'foo\', \'baz\' ].')
})

test('less', () => {
  expect(() => $.tuple($.number, $.string)(JSON.parse('[1]'))).toThrow('[1] Expected string, got undefined.')
})

test('optional tail', () => {
  expect($.tuple($.number, $.undefinedOr($.string))(JSON.parse('[1]'))).toEqual([ 1 ])
  expect($.tuple($.number, $.undefinedOr($.string))(JSON.parse('[1,"foo"]'))).toEqual([ 1, 'foo' ])
})

test('literal', () => {
  const assert = $.tuple('foo', $.number)
  expect(() => assert([ 'foo', 1 ])).not.toThrow()
  expect(() => assert([ 'bar', 1 ])).toThrow('Expected tuple element at index 0 to be \'foo\', got \'bar\'.')
})
