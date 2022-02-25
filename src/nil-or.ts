import rethrow from './rethrow.js'
import type { Assert, NilOr } from './prelude.js'

const nilOr =
  <T>(a: Assert<T>): Assert<NilOr<T>> =>
    value =>
      value == null ?
        value as undefined | null :
        rethrow<T>(a, 'Was not null or undefined.')(value)

export default nilOr
