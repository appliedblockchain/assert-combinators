// @flow strict

const rethrow = require('./rethrow')

const undefinedOr /*: <T>(mixed => T) => (mixed => void | T) */ = /*:: <T> */
  (a) =>
    value =>
      typeof value === 'undefined' ?
        undefined :
        rethrow(a, 'Was not undefined.')(value)

module.exports = undefinedOr
