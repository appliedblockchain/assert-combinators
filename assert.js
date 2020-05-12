// @flow strict

const assert /*: <T>(mixed => T, T => void) => mixed => T */ = /*:: <T> */
  (a, f) =>
    value => {
      const r = a(value)
      f(r)
      return r
    }

module.exports = assert
