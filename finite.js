// @flow strict

const { inspect } = require('util')

const finite /*: mixed => number */ =
  value => {
    if (typeof value !== 'number' || !Number.isFinite(value)) {
      throw new TypeError(`Expected finite number, got ${inspect(value)}.`)
    }
    return value
  }

module.exports = finite
