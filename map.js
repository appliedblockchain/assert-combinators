// @flow

const { inspect } = require('util')

const map /*: <T>(mixed => T) => (mixed => T[]) */ = /*:: <T> */
  (a) =>
    values => {
      if (!Array.isArray(values)) {
        throw new TypeError(`Expected array, got ${inspect(values)}.`)
      }
      return values.map(a)
    }

module.exports = map
