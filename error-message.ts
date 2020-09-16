import type Assert from './types/assert'
import type Maybe from './types/maybe'

export const errorMessage: <T>(a: Assert<T>) => Assert<Maybe<string>> =
  (a) =>
    value => {
      try {
        a(value)
        return null
      } catch (err) {
        return err != null && typeof err.message === 'string' ?
          err.message :
          'Unknown error.'
      }
    }

export default errorMessage
