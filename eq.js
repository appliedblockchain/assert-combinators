// @flow strict

const { inspect } = require('util')

const eq /*: <T>(T) => (mixed => T) */ = /*:: <T> */
  (value_) =>
    value => {
      if (value !== value_) {
        throw new TypeError(`Expected ${inspect(value_)}, got ${inspect(value)}.`)
      }
      return value
    }

module.exports = eq
