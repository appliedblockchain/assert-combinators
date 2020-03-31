// @flow strict

const { inspect } = require('util')

const boolean /*: mixed => boolean */ =
  value => {
    if (typeof value !== 'boolean') {
      throw new TypeError(`Expected boolean, got ${inspect(value)}.`)
    }
    return value
  }

module.exports = boolean
