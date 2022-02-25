import type { Assert } from './prelude.js'
import { inspect } from 'util'

const boolean: Assert<boolean> =
  value => {
    if (typeof value !== 'boolean') {
      throw new TypeError(`Expected boolean, got ${inspect(value)}.`)
    }
    return value
  }

export default boolean
