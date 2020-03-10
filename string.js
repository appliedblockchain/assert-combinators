// @flow

const { inspect } = require('util')

const string /*: any => string */ =
  value => {
    if (typeof value !== 'string') {
      throw new TypeError(`Expected string, got ${inspect(value)}.`)
    }
    return value
  }

module.exports = string
