// @flow strict

const { inspect } = require('util')
const { isArray } = Array

const identity = _ => _

const unique /*: <T = mixed>(f?: T => mixed) => (mixed => mixed[]) */ = /*:: <T> */
  (f = identity) =>
    (values) => {
      if (!isArray(values)) {
        throw new TypeError(`Expected array, got ${inspect(values)}.`)
      }
      const set = new Set

      // $FlowFixMe
      for (const value of values) {
        const value_ = f(value)
        if (set.has(value_)) {
          throw new TypeError(`Expected unique values, got duplicate ${inspect(value)}.`)
        }
        set.add(value_)
      }

      // $FlowFixMe
      return values
    }

module.exports = unique
