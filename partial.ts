import type Assert from './types/assert'
import type Asserted from './types/asserted'

const partial =
  <T extends Record<string, Assert<unknown>>>(kvs: T): Assert<{ [k in keyof T]?: Asserted<T[k]> }> =>
    value => {
      if (typeof value !== 'object' || value == null) {
        throw new TypeError('Expected object.')
      }
      for (const k of Object.keys(kvs)) {
        if (typeof value[k] === 'undefined') {
          continue
        }
        kvs[k](value[k])
      }
      return value
    }

export default partial
