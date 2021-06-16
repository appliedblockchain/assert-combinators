import type Assert from './types/assert'
import type Asserted from './types/asserted'

const partial =
  <T extends Record<string, Assert<unknown>>>(kvs: T): Assert<{ [k in keyof T]?: Asserted<T[k]> }> =>
    value => {
      if (typeof value !== 'object' || value == null) {
        throw new TypeError('Expected object.')
      }
      for (const k in kvs) {
        if (typeof (value as Record<string, unknown>)[k] === 'undefined') {
          continue
        }
        kvs[k]((value as Record<string, unknown>)[k])
      }
      return value
    }

export default partial
