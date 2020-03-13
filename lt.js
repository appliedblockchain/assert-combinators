// @flow

const { inspect } = require('util')

const lt /*: number => (any => number) */ =
  than =>
    value => {
      if (typeof value !== 'number') {
        throw new TypeError(`Expected number, got ${inspect(value)}.`)
      }
      if (!(value < than)) {
        throw new TypeError(`Expcted ${inspect(value)} to be less than ${inspect(value)}.`)
      }
      return value
    }

module.exports = lt
