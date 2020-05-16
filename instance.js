// @flow strict

const { inspect } = require('util')

const instance /*: <T>(Class<T>) => (mixed => T) */ = /*:: <T> */
  (klass) =>
    value => {
      if (!(value instanceof klass)) {
        throw new TypeError(`Expected ${inspect(value)} to be instance of ${inspect(klass)}.`)
      }
      return value
    }

module.exports = instance
