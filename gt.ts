import type Assert from './types/assert'
import { inspect } from 'util'

const gt: (than: number) => Assert<number> =
  than =>
    value => {
      if (typeof value !== 'number') {
        throw new TypeError(`Expected number, got ${inspect(value)}.`)
      }
      if (!(value > than)) {
        throw new TypeError(`Expected ${inspect(value)} to be greater than ${inspect(than)}.`)
      }
      return value
    }

export default gt
