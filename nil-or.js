// @flow strict

const rethrow = require('./rethrow')

const nilOr /*: <T>(mixed => T) => (mixed => ?T) */ = /*:: <T> */
  (a) =>
    value =>
      value == null ?
        value :
        rethrow(a, 'Was not null or undefined.')(value)

module.exports = nilOr
