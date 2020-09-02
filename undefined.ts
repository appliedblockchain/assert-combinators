import type Assert from './types/assert'
import { inspect } from 'util'

export const undefined_: Assert<undefined> =
  value => {
    if (typeof value !== 'undefined') {
      throw new TypeError(`Expected undefined, got ${inspect(value)}.`)
    }
    return undefined
  }

export default undefined_
