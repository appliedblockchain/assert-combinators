// @flow strict

/*:: import type { $A } from './types/a' */

const if_ /*: <A, B = mixed>(mixed => boolean, $A<A>, else_?: $A<B>) => $A<A | B> */ = /*:: <A, B> */
  (predicate, then_, else_) =>
    value =>
      predicate(value) ?
        then_(value) :
        else_ ?
          else_(value) :
          value

module.exports = if_
