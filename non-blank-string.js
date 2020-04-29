// @flow strict

const { inspect } = require('util')

const nonBlankString /*: mixed => string */ =
  value => {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new TypeError(`Expected non-blank string, got ${inspect(value)}`)
    }
    return value
  }

module.exports = nonBlankString
