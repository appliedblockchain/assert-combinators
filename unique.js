// @flow strict

const { inspect } = require('util')
const { isArray } = Array

const unique /*: <T>(T[]) => T[] */ = /*:: <T> */
  (values) => {
    if (!isArray(values)) {
      throw new TypeError(`Expected array, got ${inspect(values)}.`)
    }
    const values_ = values.slice(0).sort()
    for (let i = 1; i < values_.length; i++) {
      if (values_[i - 1] === values_[i]) {
        throw new TypeError(`Expected unique values, got duplicate ${inspect(values_[i])}.`)
      }
    }
    return values
  }

module.exports = unique
