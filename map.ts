import type Assert from './types/assert'
import { inspect } from 'util'

export const map: <T>(a: Assert<T>) => Assert<T[]> =
  a =>
    values => {
      if (!Array.isArray(values)) {
        throw new TypeError(`Expected array, got ${inspect(values)}.`)
      }
      return values.map(a)
    }

export default map
