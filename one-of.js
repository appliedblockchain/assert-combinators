// @flow

const { inspect } = require('util')

/*::

type OneOf =
  & (() => (mixed => mixed))
  & (<A>(A) => (mixed => A))
  & (<A, B>(A, B) => (mixed => (A | B)))
  & (<A, B, C>(A, B, C) => (mixed => (A | B | C)))
  & (<A, B, C, D>(A, B, C, D) => (mixed => (A | B | C | D)))
  & (<A, B, C, D, E>(A, B, C, D, E) => (mixed => (A | B | C | D | E)))
  & (<A, B, C, D, E, F>(A, B, C, D, E, F) => (mixed => (A | B | C | D | E | F)))
  & (<A, B, C, D, E, F, G>(A, B, C, D, E, F, G) => (mixed => (A | B | C | D | E | F | G)))
  & (<A, B, C, D, E, F, G, H>(A, B, C, D, E, F, G, H) => (mixed => (A | B | C | D | E | F | G | H)))
  & (<A, B, C, D, E, F, G, H, I>(A, B, C, D, E, F, G, H, I) => (mixed => (A | B | C | D | E | F | G | H | I)))
  & (<A, B, C, D, E, F, G, H, I, J>(A, B, C, D, E, F, G, H, I, J) => (mixed => (A | B | C | D | E | F | G | H | I | J)))
  & (<A, B, C, D, E, F, G, H, I, J, K>(A, B, C, D, E, F, G, H, I, J, K) => (mixed => (A | B | C | D | E | F | G | H | I | J | K)))
  & (<A, B, C, D, E, F, G, H, I, J, K, L>(A, B, C, D, E, F, G, H, I, J, K, L) => (mixed => (A | B | C | D | E | F | G | H | I | J | K | L)))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M>(A, B, C, D, E, F, G, H, I, J, K, L, M) => (mixed => (A | B | C | D | E | F | G | H | I | J | K | L | M)))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(A, B, C, D, E, F, G, H, I, J, K, L, M, N) => (mixed => (A | B | C | D | E | F | G | H | I | J | K | L | M | N)))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O) => (mixed => (A | B | C | D | E | F | G | H | I | J | K | L | M | N | O)))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P) => (mixed => (A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P)))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q) => (mixed => (A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q)))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R) => (mixed => (A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R)))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S) => (mixed => (A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S)))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T) => (mixed => (A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T)))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U) => (mixed => (A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U)))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V) => (mixed => (A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V)))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W) => (mixed => (A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W)))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X) => (mixed => (A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X)))
  & (<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y) => (mixed => (A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y)))

*/

const oneOf /*: OneOf */ =
  (...values /*: any[] */) =>
    value => {
      if (!values.includes(value)) {
        throw new TypeError(`Expected ${inspect(value)} to be one of ${inspect(values)}.`)
      }
      return (value /*: any */)
    }

module.exports = oneOf
