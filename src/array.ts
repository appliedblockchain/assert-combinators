import type { Assert } from './prelude.js'
import unknown from './unknown.js'

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
          } catch (err: unknown) {
            throw new TypeError(`[${i}] ${err instanceof Error ? err.message : err}`)
          }
        })
      }
      return value
    }

export default array
