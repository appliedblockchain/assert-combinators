// @flow

const { inspect } = require('util')

const boolean /*: any => boolean */ =
  value => {
    if (typeof value !== 'boolean') {
      throw new TypeError(`Expected boolean, got ${inspect(value)}.`)
    }
    return value
  }

module.exports = boolean
