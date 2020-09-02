import type Assert from './types/assert'
import rethrow from './rethrow'

export const undefinedOr: <T>(a: Assert<T>) => Assert<undefined | T> =
  a =>
    value =>
      typeof value === 'undefined' ?
        undefined :
        rethrow(a, 'Was not undefined.')(value)

export default undefinedOr
