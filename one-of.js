// @flow strict

const { inspect } = require('util')

/*::

import type { $A } from './types/a'

declare function oneOf<A>(A): $A<A>;
declare function oneOf<A, B>(A, B): $A<A | B>;
declare function oneOf<A, B, C>(A, B, C): $A<A | B | C>;
declare function oneOf<A, B, C, D>(A, B, C, D): $A<A | B | C | D>;
declare function oneOf<A, B, C, D, E>(A, B, C, D, E): $A<A | B | C | D | E>;
declare function oneOf<A, B, C, D, E, F>(A, B, C, D, E, F): $A<A | B | C | D | E | F>;
declare function oneOf<A, B, C, D, E, F, G>(A, B, C, D, E, F, G): $A<A | B | C | D | E | F | G>;
declare function oneOf<A, B, C, D, E, F, G, H>(A, B, C, D, E, F, G, H): $A<A | B | C | D | E | F | G | H>;
declare function oneOf<A, B, C, D, E, F, G, H, I>(A, B, C, D, E, F, G, H, I): $A<A | B | C | D | E | F | G | H | I>;
declare function oneOf<A, B, C, D, E, F, G, H, I, J>(A, B, C, D, E, F, G, H, I, J): $A<A | B | C | D | E | F | G | H | I | J>;
declare function oneOf<A, B, C, D, E, F, G, H, I, J, K>(A, B, C, D, E, F, G, H, I, J, K): $A<A | B | C | D | E | F | G | H | I | J | K>;
declare function oneOf<A, B, C, D, E, F, G, H, I, J, K, L>(A, B, C, D, E, F, G, H, I, J, K, L): $A<A | B | C | D | E | F | G | H | I | J | K | L>;
declare function oneOf<A, B, C, D, E, F, G, H, I, J, K, L, M>(A, B, C, D, E, F, G, H, I, J, K, L, M): $A<A | B | C | D | E | F | G | H | I | J | K | L | M>;
declare function oneOf<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(A, B, C, D, E, F, G, H, I, J, K, L, M, N): $A<A | B | C | D | E | F | G | H | I | J | K | L | M | N>;
declare function oneOf<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O): $A<A | B | C | D | E | F | G | H | I | J | K | L | M | N | O>;
declare function oneOf<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P): $A<A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P>;
declare function oneOf<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q): $A<A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q>;
declare function oneOf<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R): $A<A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R>;
declare function oneOf<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S): $A<A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S>;
declare function oneOf<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T): $A<A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T>;
declare function oneOf<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U): $A<A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U>;
declare function oneOf<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V): $A<A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V>;
declare function oneOf<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W): $A<A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W>;
declare function oneOf<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X): $A<A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X>;
declare function oneOf<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>(A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y): $A<A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y>;

*/

// $FlowFixMe
const oneOf =
  (...values) => {
    if (!values.length) {
      throw new TypeError('Expected non-zero arity.')
    }
    return value => {
      if (!values.includes(value)) {
        throw new TypeError(`Expected ${inspect(value)} to be one of ${inspect(values)}.`)
      }
      return value
    }
  }

module.exports = oneOf
