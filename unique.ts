import type Assert from './types/assert'
import { inspect } from 'util'

type Mapping<A, B> = (value: A) => B

export const identity =
  <T>(_: T): T =>
    _

/** Asserts unique array using given `f` mapping from array elements to `===` comparable values (defaults to identity). */
export const unique =
  <T>(f: Mapping<T, unknown> = identity): Assert<T[]> =>
    values => {
      if (!Array.isArray(values)) {
        throw new TypeError(`Expected array, got ${inspect(values)}.`)
      }
      const set = new Set
      for (const value of values) {
        const value_ = f(value)
        if (set.has(value_)) {
          throw new TypeError(`Expected unique values, got duplicate ${inspect(value)}.`)
        }
        set.add(value_)
      }
      return values
    }

export default unique
