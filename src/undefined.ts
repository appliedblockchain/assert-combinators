import type { Assert } from './prelude.js'
import { inspect } from 'util'

const undefined_: Assert<undefined> =
  value => {
    if (typeof value !== 'undefined') {
      throw new TypeError(`Expected undefined, got ${inspect(value)}.`)
    }
    return undefined
  }

export default undefined_
