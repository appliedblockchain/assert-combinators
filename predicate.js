// @flow strict

const { inspect } = require('util')

const predicate /*: <T>(mixed => boolean, name?: string) => (T => T) */ = /*:: <T> */
  (f, name) =>
    value => {
      if (!f(value)) {
        throw new TypeError(`Expected ${name === undefined ? 'predicate' : `${inspect(name)} predicate`} to pass for ${inspect(value)}.`)
      }
      return value
    }

module.exports = predicate
