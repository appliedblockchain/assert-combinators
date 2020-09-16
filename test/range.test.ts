import $ from './assert'

test('assert, range', () => {
  expect($.range([ 1, 2 ])).toEqual([ 1, 2 ])
  expect(() => $.range([ 2, 1 ])).toThrow('Expected [a, b] range where a <= b, got [ 2, 1 ].')
})
