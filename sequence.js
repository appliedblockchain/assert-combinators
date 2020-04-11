// @flow

/*::

type Sequence =
  & (() => (mixed => mixed))
  & (<A>(mixed => A) => (mixed => A))
  & (<A,B>(mixed => A, A => B) => (mixed => B))
  & (<A, B, C>(mixed => A, A => B, B => C) => (mixed => C))
  & (<A, B, C, D>(mixed => A, A => B, B => C, C => D) => (mixed => D))
  & (<A, B, C, D, E>(mixed => A, A => B, B => C, C => D, D => E) => (mixed => E))
  & (<A, B, C, D, E, F>(mixed => A, A => B, B => C, C => D, D => E, E => F) => (mixed => F))
  & (<A, B, C, D, E, F, G>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G) => (mixed => G))
  & (<A, B, C, D, E, F, G, H>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H) => (mixed => H))
  & (<A, B, C, D, E, F, G, H, I>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H, H => I) => (mixed => I))
  & (<A, B, C, D, E, F, G, H, I, J>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H, H => I, I => J) => (mixed => J))
  & (<A, B, C, D, E, F, G, H, I, J, K>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H, H => I, I => J, J => K) => (mixed => K))
  & (<A, B, C, D, E, F, G, H, I, J, K, L>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H, H => I, I => J, J => K, K => L) => (mixed => L))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H, H => I, I => J, J => K, K => L, L => M) => (mixed => M))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H, H => I, I => J, J => K, K => L, L => M, M => N) => (mixed => N))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H, H => I, I => J, J => K, K => L, L => M, M => N, N => O) => (mixed => O))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H, H => I, I => J, J => K, K => L, L => M, M => N, N => O, O => P) => (mixed => P))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H, H => I, I => J, J => K, K => L, L => M, M => N, N => O, O => P, P => Q) => (mixed => Q))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H, H => I, I => J, J => K, K => L, L => M, M => N, N => O, O => P, P => Q, Q => R) => (mixed => R))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H, H => I, I => J, J => K, K => L, L => M, M => N, N => O, O => P, P => Q, Q => R, R => S) => (mixed => S))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H, H => I, I => J, J => K, K => L, L => M, M => N, N => O, O => P, P => Q, Q => R, R => S, S => T) => (mixed => T))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H, H => I, I => J, J => K, K => L, L => M, M => N, N => O, O => P, P => Q, Q => R, R => S, S => T, T => U) => (mixed => U))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H, H => I, I => J, J => K, K => L, L => M, M => N, N => O, O => P, P => Q, Q => R, R => S, S => T, T => U, U => V) => (mixed => V))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H, H => I, I => J, J => K, K => L, L => M, M => N, N => O, O => P, P => Q, Q => R, R => S, S => T, T => U, U => V, V => W) => (mixed => W))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H, H => I, I => J, J => K, K => L, L => M, M => N, N => O, O => P, P => Q, Q => R, R => S, S => T, T => U, U => V, V => W, W => X) => (mixed => X))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>(mixed => A, A => B, B => C, C => D, D => E, E => F, F => G, G => H, H => I, I => J, J => K, K => L, L => M, M => N, N => O, O => P, P => Q, Q => R, R => S, S => T, T => U, U => V, V => W, W => X, X => Y) => (mixed => Y))

*/

const sequence /*: Sequence */ =
  (...as /*: any[] */) =>
    value => {
      let r = value
      for (const a of as) {
        r = a(r)
      }
      return (r /*: any */)
    }

module.exports = sequence
