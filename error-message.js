// @flow strict

/*:: import type { $A } from './types/a' */

const errorMessage /*: <T>($A<T>) => $A<?string> */ = /*:: <T> */
  (a) =>
    value => {
      try {
        a(value)
        return null
      } catch (err) {
        return err != null && typeof err.message === 'string' ?
          err.message :
          'Unknown error.'
      }
    }

module.exports = errorMessage
