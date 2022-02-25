import type { Assert, Predicate } from './prelude.js'

const implies =
  <T, A>(predicate: Predicate<T>, a: Assert<A>) =>
    (value: T): T | A =>
      predicate(value) ?
        a(value) :
        value

export default implies
