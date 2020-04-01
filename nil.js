// @flow

const nil /*: any => null | void */ =
  value => {
    if (value != null) {
      throw new TypeError('Expected nil.')
    }
    return value
  }

module.exports = nil
