import type Assert from '../types/assert'
import { inspect } from 'util'
import $ from '../'

export type Range = [ number, number ]

const range: Assert<Range> =
  $.assert(
    $.tuple($.number, $.number),
    ([ a, b ]) => {
      if (a > b) {
        throw new TypeError(`Expected [a, b] range where a <= b, got ${inspect([ a, b ])}.`)
      }
    }
  )

export default {
  ...$,
  range
}
