import type { Assert } from './prelude.js'
import rethrow from './rethrow.js'

const undefinedOr: <T>(a: Assert<T>) => Assert<undefined | T> =
  a =>
    value =>
      typeof value === 'undefined' ?
        undefined :
        rethrow(a, 'Was not undefined.')(value)

export default undefinedOr
