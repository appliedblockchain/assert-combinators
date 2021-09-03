import type Assert from './types/assert'
import type Asserted from './types/asserted'
import { inspect } from 'util'

const tuple =
  <T extends [...Assert<unknown>[]]>(...as: T): Assert<{ [I in keyof T]: Asserted<T[I]> }> =>
    (value: unknown) => {
      if (!Array.isArray(value)) {
        throw new TypeError(`Expected tuple, got ${inspect(value)}.`)
      }
      if (value.length > as.length) {
        throw new TypeError(`Expected tuple length of not more than ${as.length}, got ${value.length} in ${inspect(value)}.`)
      }
      as.forEach((a, i) => {
        try {
          a(value[i])
        } catch (err: unknown) {
          throw new TypeError(`[${i}] ${err instanceof Error ? err.message : err}`)
        }
      })
      return value as { [I in keyof T]: Asserted<T[I]> }
    }

export default tuple
