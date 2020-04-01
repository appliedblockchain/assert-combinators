// @flow strict

const nil /*: mixed => null | void */ =
  value => {
    if (value != null) {
      throw new TypeError('Expected nil.')
    }
    return value
  }

module.exports = nil
