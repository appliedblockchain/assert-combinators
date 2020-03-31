// @flow strict

const undefinedOr /*: <T>(mixed => T) => (mixed => void | T) */ = /*:: <T> */
  (a) =>
    value =>
      typeof value === 'undefined' ?
        undefined :
        a(value)

module.exports = undefinedOr
