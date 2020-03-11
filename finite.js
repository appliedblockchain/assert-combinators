// @flow

const { inspect } = require('util')

const finite /*: any => number */ =
  value => {
    if (!Number.isFinite(value)) {
      throw new TypeError(`Expected finite number, got ${inspect(value)}.`)
    }
    return value
  }

module.exports = finite
