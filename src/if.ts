import type { Assert } from './prelude.js'

type Predicate<T> = (value: T) => boolean

const if_ =
  <T, A, B>(predicate: Predicate<T>, then_: Assert<A>, else_: Assert<B>) =>
    (value: T): A | B =>
      predicate(value) ?
        then_(value) :
        else_(value)

export default if_
