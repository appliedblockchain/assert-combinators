import type Assert from './types/assert'
import { inspect } from 'util'

export const gte: (than: number) => Assert<number> =
  than =>
    value => {
      if (typeof value !== 'number') {
        throw new TypeError(`Expected number, got ${inspect(value)}.`)
      }
      if (!(value >= than)) {
        throw new TypeError(`Expcted ${inspect(value)} to be greater than or equal to ${inspect(value)}.`)
      }
      return value
    }

export default gte
