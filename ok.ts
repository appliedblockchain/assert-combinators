import type Assert from './types/assert'
import type Predicate from './types/predicate'

const ok: <T>(a: Assert<T>) => Predicate =
  a =>
    value => {
      try {
        a(value)
        return true
      } catch (err) {
        return false
      }
    }

export default ok
