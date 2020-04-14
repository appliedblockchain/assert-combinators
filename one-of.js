// @flow strict

const { inspect } = require('util')

const oneOf /*: <R>(...mixed[]) => R */ = /*:: <R> */
  (...values) =>
    value => {
      if (!values.includes(value)) {
        throw new TypeError(`Expected ${inspect(value)} to be one of ${inspect(values)}.`)
      }

      // $FlowFixMe
      return value
    }

module.exports = oneOf
