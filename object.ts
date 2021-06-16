import { inspect } from 'util'
import type Assert from './types/assert'
import type Asserted from './types/asserted'

const object =
  <T extends Record<string, Assert<unknown>>>(kvs: T): Assert<{ [k in keyof T]: Asserted<T[k]> }> =>
    value => {
      if (typeof value !== 'object' || value === null) {
        throw new TypeError(`Expected object, got ${inspect(value)}.`)
      }
      for (const k of Object.keys(kvs)) {
        const v = kvs[k]
        if (typeof v === 'function') {
          try {
            v(value[k])
          } catch (err) {
            throw new TypeError(`[${k}] ${err.message}`)
          }
        } else if (v !== value[k]) {
          throw new TypeError(`Expected ${inspect(k)} to be ${inspect(v)}, got ${inspect(value[k])} in ${inspect(value)} object.`)
        }
      }
      return value as { [k in keyof T]: Asserted<T[k]> }
    }

export default object
