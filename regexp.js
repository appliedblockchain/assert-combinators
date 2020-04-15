// @flow strict

const { inspect } = require('util')

/*:: import type { $A } from './types/a' */

const regexp /*: RegExp => $A<string> */ =
  re =>
    value => {
      if (typeof value !== 'string') {
        throw new TypeError(`Expected string, got ${inspect(value)}.`)
      }
      if (!value.match(re)) {
        throw new TypeError(`Expected ${inspect(value)} to match ${inspect(re)}.`)
      }
      return value
    }

module.exports = regexp
