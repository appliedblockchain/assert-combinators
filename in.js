// @flow strict

const { inspect } = require('util')

const in_ /*: <T>(T[]) => (mixed => T) */ = /*:: <T> */
  (values) =>
    value => {
      if (!values.includes(value)) {
        throw new TypeError(`Expected ${inspect(value)} to be in ${inspect(values)}.`)
      }
      return value
    }

module.exports = in_
