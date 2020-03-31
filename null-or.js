// @flow strict

const nullOr /*: <T>(mixed => T) => mixed => null | T */ = /*:: <T> */
  (a) =>
    value =>
      value === null ?
        null :
        a(value)

module.exports = nullOr
