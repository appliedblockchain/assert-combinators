// @flow strict

const rethrow /*: <T>(mixed => T, string) => (mixed => T) */ = /*:: <T> */
  (a, message) =>
    input => {
      try {
        return a(input)
      } catch (err) {

        // eslint-disable-next-line no-param-reassign
        err.message = `${message} ${err.message}`
        throw err
      }
    }

module.exports = rethrow
