import type { Assert, AssertedWithPrimitive, Primitive } from './prelude.js'
import { inspect } from 'util'

const tuple =
  <T extends [...(Assert<unknown> | Primitive)[]]>(...as: T): Assert<{ [I in keyof T]: AssertedWithPrimitive<T[I]> }> =>
    (value: unknown) => {
      if (!Array.isArray(value)) {
        throw new TypeError(`Expected tuple, got ${inspect(value)}.`)
      }
      if (value.length > as.length) {
        throw new TypeError(`Expected tuple length of not more than ${as.length}, got ${value.length} in ${inspect(value)}.`)
      }
      as.forEach((a, i) => {
        if (typeof a === 'function') {
          try {
            a(value[i])
          } catch (err: unknown) {
            throw new TypeError(`[${i}] ${err instanceof Error ? err.message : err}`)
          }
        } else if (a !== value[i]) {
          throw new TypeError(`Expected tuple element at index ${i} to be ${inspect(a)}, got ${inspect(value[i])}.`)
        }
      })
      return value as { [I in keyof T]: AssertedWithPrimitive<T[I]> }
    }

export default tuple
