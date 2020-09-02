import type Assert from './types/assert'

export const rethrow: <T>(a: Assert<T>, message: string) => Assert<T> =
  (a, message) =>
    value => {
      try {
        return a(value)
      } catch (err) {
        err.message = `${message} ${err.message}`
        throw err
      }
    }

export default rethrow
