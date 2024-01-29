import type { Assert } from './prelude.js'

type Z<A, B> =
  (value: A) =>
    B

type And = {
  <A>(a: Assert<A>): Assert<A>
  <A, B>(a: Assert<A>, b: Z<A, B>): Assert<A & B>
  <A, B, C>(a: Assert<A>, b: Z<A, B>, c: Z<B, C>): Assert<A & B & C>
  <A, B, C, D>(a: Assert<A>, b: Z<A, B>, c: Z<B, C>, d: Z<C, D>): Assert<A & B & C & D>
}

const and: And =
  (...as: Assert<unknown>[]) =>
    (value: unknown) => {
      for (const a of as) {
        a(value)
      }
      return value
    }

export default and
