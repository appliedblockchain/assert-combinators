// @flow

/*::

type $NonVoidType<T> = $NonMaybeType<T> | null

*/

const defined /*: <T>(T) => $NonVoidType<T> */ = /*:: <T> */
  (value) => {
    if (typeof value === 'undefined') {
      throw new TypeError('Expected defined.')
    }
    return value
  }

module.exports = defined
