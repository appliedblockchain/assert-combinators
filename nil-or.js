// @flow strict

const nilOr /*: <T>(mixed => T) => (mixed => ?T) */ = /*:: <T> */
  (a) =>
    value =>
      value == null ?
        value :
        a(value)

module.exports = nilOr
