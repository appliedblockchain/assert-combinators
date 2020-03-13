// @flow

const { inspect } = require('util')

const lte /*: number => (any => number) */ =
  than =>
    value => {
      if (typeof value !== 'number') {
        throw new TypeError(`Expected number, got ${inspect(value)}.`)
      }
      if (!(value <= than)) {
        throw new TypeError(`Expcted ${inspect(value)} to be less than or equal to ${inspect(value)}.`)
      }
      return value
    }

module.exports = lte
