import type Assert from './types/assert'
import type Predicate from './types/predicate'

export const implies =
  <T, A>(predicate: Predicate<T>, a: Assert<A>) =>
    (value: T): T | A =>
      predicate(value) ?
        a(value) :
        value

export default implies
