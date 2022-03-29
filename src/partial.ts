import { inspect } from 'util'
import type { Assert, AssertedWithPrimitive, Primitive } from './prelude.js'

const partial =
  <T extends Record<string, Primitive | Assert<unknown>>>(kvs: T): Assert<{ [k in keyof T]?: AssertedWithPrimitive<T[k]> }> =>
    value => {
      if (typeof value !== 'object' || value == null) {
        throw new TypeError('Expected object.')
      }
      for (const k in kvs) {
        if (typeof (value as Record<string, unknown>)[k] === 'undefined') {
          continue
        }
        const v = kvs[k]
        if (typeof v === 'function') {
          try {
            v((value as Record<string, unknown>)[k])
          } catch (err: unknown) {
            throw new TypeError(`[${k}] ${err instanceof Error ? err.message : err}`)
          }
        } else if (v !== (value as Record<string, unknown>)[k]) {
          throw new TypeError(`Expected ${inspect(k)} to be ${inspect(v)}, got ${inspect((value as Record<string, unknown>)[k])} in ${inspect(value)} object.`)
        }
      }
      return value as { [k in keyof T]?: AssertedWithPrimitive<T[k]> }
    }

export default partial
