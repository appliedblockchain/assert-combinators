// @flow strict

/*:: import type { NonVoidType } from './types/non-void-type' */

const defined /*: <T>(T) => NonVoidType<T> */ = /*:: <T> */
  (value) => {
    if (typeof value === 'undefined') {
      throw new TypeError('Expected defined.')
    }
    return value
  }

module.exports = defined
