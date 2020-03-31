// @flow strict

const { inspect } = require('util')

const number /*: mixed => number */ =
  value => {
    if (typeof value !== 'number') {
      throw new TypeError(`Expected number, got ${inspect(value)}.`)
    }
    return value
  }

module.exports = number
