import { inspect } from 'util'
import type { Assert, Keyed } from './prelude.js'

const map: Keyed<RegExp | string> = {

  // Day
  a: /^(Sun|Mon|Tue|Wed|Thu|Fri|Sat)/,
  A: /^(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)/,
  d: /^(0[1-9]|[12][0-9]|3[01])/, // 01..31
  e: /^( [1-9]|[12][0-9]|3[01])/, // _1..31
  j: /^([0-2][0-9]{2}|3[0-5][0-9]|36[0-6])/,
  u: /^[1-7]/, // 1..7
  w: /^[0-6]/, // 0..6

  // Week
  U: /^(0[0-9]|[1-4][0-9]|5[0-3])/, // 00..53
  V: /^(0[1-9]|[1-4][0-9]|5[0-3])/, // 01..53
  W: /^(0[0-9]|[1-4][0-9]|5[0-3])/, // 00..53

  // Month
  b: /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/,
  B: /^(January|February|March|April|May|June|July|August|September|October|November|December)/,
  h: /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/,
  m: /^(0[1-9]|1[0-2])/, // 01..12

  // Year
  C: /^[0-9]{2}/, // 00..99
  g: /^[0-9]{2}/, // 00..99
  G: /^[0-9]{4}/, // 0000..9999
  y: /^[0-9]{2}/, // 00..99
  Y: /^[0-9]{4}/, // 0000..9999

  // Time
  H: /^(0[0-9]|1[0-9]|2[0-3])/, // 00..23
  k: /^( [0-9]|1[0-9]|2[0-3])/, // _0..23
  I: /^(0[1-9]|1[0-2])/, // 01..12
  l: /^( [1-9]|1[0-2])/, // _1..12
  M: /^[0-5][0-9]/, // 00..59
  p: /^(AM|PM)/,
  P: /^(am|pm)/,
  r: '%I:%M:%S %p',
  R: '%H:%M',
  S: /^[0-5][0-9]/,
  T: '%H:%M:%S',
  X: '%H:%M:%S',
  z: /^[+-][0-9]{4}/,
  Z: /^[A-Z]+/,

  // Time and Date Stamps
  // %c not supported.
  D: '%m/%d/%y',
  F: '%Y-%m-%d',
  s: /^[0-9]+/,
  // %x not supported.

  // Misc
  n: /^\n/,
  t: /^\t/,
  '%': /^%/
}

type Token =
  | { type: 'regexp', value: RegExp }
  | { type: 'literal', value: string }

const tokens =
  function *(value: string): Generator<Token> {
    let j = 0
    let i = 0
    for (i = 0; i < value.length; i++) {
      if (value[i] === '%') {
        if (j < i - 1) {
          yield { type: 'literal', value: value.slice(j + 1, i) }
        }
        const r = map[value[i + 1]]
        if (typeof r === 'undefined') {
          throw new TypeError(`Unknown strftime rule %${value[i + 1]}.`)
        }
        if (typeof r === 'string') {
          yield *tokens(r)
        }
        if (r instanceof RegExp) {
          yield { type: 'regexp', value: r }
        }
        i++
        j = i
      }
    }
    if (j < i - 1) {
      yield { type: 'literal', value: value.slice(j + 1, i) }
    }
  }

const strftime =
  (f: string): Assert<string> => {
    if (typeof f !== 'string') {
      throw new TypeError(`Expected format string, got ${inspect(f)}.`)
    }
    return (value: unknown) => {
      if (typeof value !== 'string') {
        throw new TypeError(`Expected ${inspect(f)} strftime formatted string, got ${inspect(value)}.`)
      }
      let i = 0
      for (const token of tokens(f)) {
        const value_ = value.substr(i)
        switch (token.type) {
          case 'regexp': {
            const m = value_.match(token.value)
            if (m) {
              i += m[0].length
            } else {
              throw new TypeError(`Expected ${inspect(f)} strftime format, got ${inspect(value)}, failed at index ${i}, unrecognised part ${inspect(value_)}.`)
            }
            break
          }
          case 'literal':
            if (!value_.startsWith(token.value)) {
              throw new TypeError(`Expected ${inspect(f)} strftime format, got ${inspect(value)}, failed at index ${i}, unrecognised part ${inspect(value_)}.`)
            }
            i += token.value.length
            break
        }
      }
      if (i !== value.length) {
        throw new TypeError(`Expected ${inspect(f)} strftime format, got ${inspect(value)}, failed at index ${i}, unrecognised part ${inspect(value.substr(i))}.`)
      }
      return value
    }
  }

export default strftime
