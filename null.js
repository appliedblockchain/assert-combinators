// @flow

const { inspect } = require('util')

const null_ /*: any => null */ =
  value => {
    if (value !== null) {
      throw new TypeError(`Expected null, got ${inspect(value)}.`)
    }
    return null
  }

module.exports = null_
