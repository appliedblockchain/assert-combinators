// @flow strict

const rethrow = require('./rethrow')

const nullOr /*: <T>(mixed => T) => mixed => null | T */ = /*:: <T> */
  (a) =>
    value =>
      value === null ?
        null :
        rethrow(a, 'Was not null.')(value)

module.exports = nullOr
