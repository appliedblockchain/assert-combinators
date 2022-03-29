import { inspect } from 'util'
import type { Assert, AssertedWithPrimitive, Primitive } from './prelude.js'

const object =
  <T extends Record<string, Assert<unknown> | Primitive>>(kvs: T): Assert<{ [k in keyof T]: AssertedWithPrimitive<T[k]> }> =>
    value => {
      if (typeof value !== 'object' || value === null) {
        throw new TypeError(`Expected object, got ${inspect(value)}.`)
      }
      for (const k in kvs) {
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
      return value as { [k in keyof T]: AssertedWithPrimitive<T[k]> }
    }

export default object
