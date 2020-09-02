import type Assert from './types/assert'

type Result<T> = {
  [K in keyof T]: T[K] extends Assert<unknown> ?
  undefined | null | ReturnType<T[K]> :
  never
}

export const shape =
  <T extends { [key: string]: Assert<unknown> }>(kvs: T): Assert<Result<T>> =>
    value => {
      if (value == null || typeof value !== 'object') {
        throw new TypeError('Expected object.')
      }
      const value_ = value as { [key: string]: unknown }
      for (const k of Object.keys(kvs)) {
        if (value_[k] == null) {
          continue
        }
        kvs[k](value_[k])
      }
      return value as Result<T>
    }

export default shape
