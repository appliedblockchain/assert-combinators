import { inspect } from 'util'
import * as $ from '../index.js'

export type Range = [ number, number ]

const range: $.Assert<Range> =
  $.sequence(
    $.tuple($.number, $.number),
    _ => {
      if (_[0] > _[1]) {
        throw new TypeError(`Expected [a, b] range where a <= b, got ${inspect(_)}.`)
      }
      return _
    }
  )

test('assert, range', () => {
  expect(range([ 1, 2 ])).toEqual([ 1, 2 ])
  expect(() => range([ 2, 1 ])).toThrow('Expected [a, b] range where a <= b, got [ 2, 1 ].')
})
