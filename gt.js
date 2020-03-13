// @flow

const { inspect } = require('util')

const gt /*: number => (any => number) */ =
  than =>
    value => {
      if (typeof value !== 'number') {
        throw new TypeError(`Expected number, got ${inspect(value)}.`)
      }
      if (!(value > than)) {
        throw new TypeError(`Expcted ${inspect(value)} to be greater than ${inspect(value)}.`)
      }
      return value
    }

module.exports = gt
