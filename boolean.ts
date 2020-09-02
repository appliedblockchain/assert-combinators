import type Assert from './types/assert'
import { inspect } from 'util'

export const boolean: Assert<boolean> =
  value => {
    if (typeof value !== 'boolean') {
      throw new TypeError(`Expected boolean, got ${inspect(value)}.`)
    }
    return value
  }

export default boolean