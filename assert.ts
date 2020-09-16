import type Assert from './types/assert'

const assert =
  <T>(a: Assert<T>, f: (value: T) => void): Assert<T> =>
    value => {
      const r = a(value)
      f(r)
      return r
    }

export default assert
