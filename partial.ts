import type Assert from './types/assert'

const partial =
  <T extends Record<string, Assert<unknown>>>(kvs: T): Assert<Partial<T>> =>
    value => {
      if (typeof value !== 'object' || value == null) {
        throw new TypeError('Expected object.')
      }
      for (const k of Object.keys(kvs)) {
        if (typeof value[k] === 'undefined') {
          continue
        }
        kvs[k](value[k])
      }
      return value
    }

export default partial
