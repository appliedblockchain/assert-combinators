// @flow strict

const mixed = require('./mixed')
const rethrow = require('./helpers/rethrow')

const array /*: <T>(a?: mixed => T) => (mixed => T[]) */ = /*:: <T> */
  (a = mixed) =>
    value => {
      if (!Array.isArray(value)) {
        throw new TypeError('Expected array.')
      }
      if (a && a !== mixed) {
        value.forEach((_, i) => {
          try {
            a(_)
          } catch (err) {
            rethrow(`[${i}]`)(err)
          }
        })
      }

      // $FlowFixMe
      return value
    }

module.exports = array
