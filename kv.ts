import { inspect } from 'util'
import rethrow from './rethrow'
import type Assert from './types/assert'
import type Kv from './types/kv'

/** @returns assert for `Kv<T>`, which is check-forced record `Record<string, T | undefined>`. */
export const kv =
  <T>(a: Assert<T>): Assert<Kv<T>> =>
    value => {
      if (value === null || typeof value !== 'object') {
        throw new TypeError(`Expected object, got ${inspect(value)}.`)
      }
      const value_ = value as Record<string, unknown>
      for (const key in value_) {
        rethrow(a, `[${inspect(key)}]`)(value_[key])
      }
      return value_ as Kv<T>
    }

export default kv
