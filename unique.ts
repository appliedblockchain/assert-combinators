import { inspect } from 'util'
import type Assert from './types/assert'
import type Primitive from './types/primitive'

type Mapping<A, B extends Primitive> = (value: A) => B

/** Asserts unique array using given `f` mapping from array elements to `===` comparable values (defaults to identity). */
const unique =
  <T, R extends Primitive>(f: Mapping<T, R>): Assert<T[]> =>
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
