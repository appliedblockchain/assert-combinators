import type Assert from './types/assert'
import rethrow from './rethrow'

const nullOr: <T>(a: Assert<T>) => Assert<null | T> =
  a =>
    value =>
      value === null ?
        null :
        rethrow(a, 'Was not null.')(value)

export default nullOr
