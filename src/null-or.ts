import type { Assert } from './prelude.js'
import rethrow from './rethrow.js'

const nullOr: <T>(a: Assert<T>) => Assert<null | T> =
  a =>
    value =>
      value === null ?
        null :
        rethrow(a, 'Was not null.')(value)

export default nullOr
