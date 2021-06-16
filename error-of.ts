import type Assert from './types/assert'

/** @returns `Error` of unsatisfied assertion, `undefined` if assertion passes. */
const errorOf =
  <T>(a: Assert<T>): Assert<undefined | Error> =>
    value => {
      try {
        a(value)
        return
      } catch (err) {
        return err instanceof Error ?
          err :
          new Error(String(err))
      }
    }

export default errorOf
