import rethrow from './rethrow.js'
import type { Assert, Nullish } from './prelude.js'

const nullishOr =
  <T>(a: Assert<T>): Assert<Nullish<T>> =>
    value =>
      value == null ?
        value as undefined | null :
        rethrow<T>(a, 'Was not nullish.')(value)

export default nullishOr
