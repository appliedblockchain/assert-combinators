import type { Assert, Predicate } from './prelude.js'

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
