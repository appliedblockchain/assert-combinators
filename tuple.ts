import type Assert from './types/assert'
import { inspect } from 'util'

const tuple =
  <T extends [...Assert<unknown>[]]>(...as: T) =>
    (value: unknown): { [I in keyof T]: T[I] extends Assert<unknown> ? ReturnType<T[I]> : never } & { length: T['length'] } => {
      if (!Array.isArray(value)) {
        throw new TypeError(`Expected tuple, got ${inspect(value)}.`)
      }

      // TODO: Check min/max arity, trim undefined tail.
      if (value.length > as.length) {
        throw new TypeError(`Expected tuple arity less or equal to ${as.length}, got ${value.length} in ${inspect(value)}.`)
      }

      return value.map((_, i) => as[i](_)) as { [I in keyof T]: T[I] extends Assert<unknown> ? ReturnType<T[I]> : never } & { length: T['length'] }
    }

export default tuple
