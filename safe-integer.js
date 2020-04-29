// @flow strict

const { inspect } = require('util')
const { isSafeInteger } = Number

const safeInteger /*: mixed => number */ =
  value => {
    if (typeof value !== 'number' || !isSafeInteger(value)) {
      throw new TypeError(`Expected safe integer, got ${inspect(value)}.`)
    }
    return value
  }

module.exports = safeInteger
