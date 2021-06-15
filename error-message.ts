import type Assert from './types/assert'
import type NilOr from './types/nil-or'

// TODO: Remove in favour of error-of.
const errorMessage: <T>(a: Assert<T>) => Assert<NilOr<string>> =
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
