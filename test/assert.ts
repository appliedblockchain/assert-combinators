import type Assert from '../types/assert'
import { inspect } from 'util'
import $ from '../'

export type Range = [ number, number ]

const range: Assert<Range> =
  $.sequence(
    $.tuple($.number, $.number),
    _ => {
      if (_[0] > _[1]) {
        throw new TypeError(`Expected [a, b] range where a <= b, got ${inspect(_)}.`)
      }
      return _
    }
  )

export default {
  ...$,
  range
}
