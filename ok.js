// @flow strict

const ok /*: (mixed => mixed) => (mixed => boolean) */ =
  a =>
    value => {
      try {
        a(value)
        return true
      } catch (err) {
        return false
      }
    }

module.exports = ok
