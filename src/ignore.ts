import type { Assert } from './prelude.js'

/** Ignores error returning value as is. Optional on-error handler can be provided to ie. log warning. */
const ignore =
  <T>(a: Assert<T>, onError?: (err: Error) => void): Assert<T> =>
    value => {
      try {
        return a(value)
      } catch (err) {
        if (onError) {
          onError(
            err instanceof Error ?
              err :
              new Error(String(err))
          )
        }
        return value as T
      }
    }

export default ignore
