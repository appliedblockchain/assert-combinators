// @flow strict

const { inspect } = require('util')

const null_ /*: mixed => null */ =
  value => {
    if (value !== null) {
      throw new TypeError(`Expected null, got ${inspect(value)}.`)
    }
    return null
  }

module.exports = null_
