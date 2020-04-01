// @flow strict

const rethrow /*: string => Error => void */ =
  message =>
    err => {

      // eslint-disable-next-line no-param-reassign
      err.message = `${message} ${err.message}`
      throw err
    }

module.exports = rethrow
