import { inspect } from 'util'
import rethrow from './rethrow.js'
import type { Assert, Keyed } from './prelude.js'

/** @returns assert for `Keyed<T>`, which is check-forced record `Record<string, T | undefined>`. */
const keyed =
  <T>(a: Assert<T>): Assert<Keyed<T>> =>
    value => {
      if (value === null || typeof value !== 'object' || Array.isArray(value)) {
        throw new TypeError(`Expected object, got ${inspect(value)}.`)
      }
      const value_ = value as Record<string, unknown>
      for (const key in value_) {
        rethrow(a, `[${inspect(key)}]`)(value_[key])
      }
      return value_ as Keyed<T>
    }

export default keyed
