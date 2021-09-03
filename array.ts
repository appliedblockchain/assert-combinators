import type Assert from './types/assert'
import unknown from './unknown'

const array: <T>(a: Assert<T>) => Assert<T[]> =
  a =>
    value => {
      if (!Array.isArray(value)) {
        throw new TypeError('Expected array.')
      }
      if (a && a !== unknown) {
        value.forEach((_, i) => {
          try {
            a(_)
          } catch (err: any) {
            throw new TypeError(`[${i}] ${err.message}`)
          }
        })
      }
      return value
    }

export default array
