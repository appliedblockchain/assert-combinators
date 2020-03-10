// @flow

const any = require('./any')

const array /*: <T>(a?: any => T) => (any => T[]) */ = /*:: <T> */
  (a = any) =>
    value => {
      if (!Array.isArray(value)) {
        throw new TypeError('Expected array.')
      }
      if (a && a !== any) {
        value.every(_ => a(_))
      }
      return value
    }

module.exports = array
