import { inspect } from 'util'
import type Assert from './types/assert'

const number: Assert<number> =
  value => {
    if (typeof value !== 'number') {
      throw new TypeError(`Expected number, got ${inspect(value)}.`)
    }
    return value
  }

export default number
