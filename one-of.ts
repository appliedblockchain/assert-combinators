import type Assert from './types/assert'
import { inspect } from 'util'

/**
 * Asserts primitive type union.
 *
 * @example
 *   import * as $ from '@appliedblockchain/assert-combinators'
 *   export const assert = $.oneOf('A', 'B', 'C')
 *   export type T = $.Asserted<typeof assert>
 *   // type T is 'A' | 'B' | 'C'
 *
 */
const oneOf =
  <T extends undefined | null | boolean | number | string | symbol>(...values: readonly T[]): Assert<T> => {
    if (!values.length) {
      throw new TypeError('Expected non-zero arity.')
    }
    return (value: unknown) => {
      for (const value_ of values) {
        if (value_ === value) {
          return value as T
        }
      }
      throw new TypeError(`Expected ${inspect(value)} to be one of ${inspect(values)}.`)
    }
  }

export default oneOf
