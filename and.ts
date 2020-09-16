import type Assert from './types/assert'

type $<T> = Assert<T>

interface And {
  <A>(a: $<A>): $<A>
  <A, B>(a: $<A>, b: $<B>): $<A & B>
  <A, B, C>(a: $<A>, b: $<B>, c: $<C>): $<A & B & C>
  <A, B, C, D>(a: $<A>, b: $<B>, c: $<C>, d: $<D>): $<A & B & C & D>
}

export const and: And =
  (...as: Assert<unknown>[]) =>
    (value: unknown) => {
      for (const a of as) {
        a(value)
      }
      return value
    }

export default and
