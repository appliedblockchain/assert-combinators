import type Assert from './types/assert'

type $<A, B> = (a: A) => B

type Sequence = {
  <A>(a: Assert<A>): Assert<A>
  <A, B>(a: Assert<A>, b: $<A, B>): Assert<B>
  <A, B, C>(a: Assert<A>, b: $<A, B>, c: $<B, C>): Assert<C>
}

const sequence: Sequence =
  (...as: Assert<unknown>[]) => {
    if (!as.length) {
      throw new TypeError('Expected non-zero arity.')
    }
    return (value: unknown) => {
      let r = value
      for (const a of as) {
        r = a(r)
      }
      return r
    }
  }

export default sequence
