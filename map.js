// @flow strict

const { inspect } = require('util')

/*:: import type { $A } from './types/a' */

const map /*: <T>($A<T>) => $A<T[]> */ = /*:: <T> */
  (a) =>
    values => {
      if (!Array.isArray(values)) {
        throw new TypeError(`Expected array, got ${inspect(values)}.`)
      }
      return values.map(_ => a(_))
    }

module.exports = map
