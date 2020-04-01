// @flow

const { inspect } = require('util')

const undefined_ /*: any => void */ =
  value => {
    if (typeof value !== 'undefined') {
      throw new TypeError(`Expected undefined, got ${inspect(value)}.`)
    }
    return undefined
  }

module.exports = undefined_
