// @flow strict

const mixed = require('./mixed')

const array /*: <T>(a?: mixed => T) => (mixed => $ReadOnlyArray<T>) */ = /*:: <T> */
  (a = mixed) =>
    value => {
      if (!Array.isArray(value)) {
        throw new TypeError('Expected array.')
      }
      if (a && a !== mixed) {
        value.every(_ => a(_))
      }
      return value
    }

module.exports = array
