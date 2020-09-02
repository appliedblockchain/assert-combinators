import rethrow from './rethrow'
import type Assert from './types/assert'
import type NilOr from './types/nil-or'

export const nilOr =
  <T>(a: Assert<T>): Assert<NilOr<T>> =>
    value =>
      value == null ?
        value as undefined | null :
        rethrow<T>(a, 'Was not null or undefined.')(value)

export default nilOr
