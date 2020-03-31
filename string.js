// @flow string

const { inspect } = require('util')

const string /*: mixed => string */ =
  value => {
    if (typeof value !== 'string') {
      throw new TypeError(`Expected string, got ${inspect(value)}.`)
    }
    return value
  }

module.exports = string
