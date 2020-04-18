// @flow strict

const { inspect } = require('util')
const { isArray } = Array

const identity = _ => _

const unique /*: <T>(f?: T => mixed) => (T[] => T[]) */ = /*:: <T> */
  (f = identity) =>
    (values) => {
      if (!isArray(values)) {
        throw new TypeError(`Expected array, got ${inspect(values)}.`)
      }
      const set = new Set
      for (const value of values) {
        const value_ = f(value)
        if (set.has(value_)) {
          throw new TypeError(`Expected unique values, got duplicate ${inspect(value)}.`)
        }
        set.add(value_)
      }
      return values
    }

module.exports = unique
