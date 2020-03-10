// @flow

/*::

type $A<R> = any => R

declare function and<A>($A<A>): $A<A>;
declare function and<A, B>($A<A>, $A<B>): $A<A & B>;
declare function and<A, B, C>($A<A>, $A<B>, $A<C>): $A<A & B & C>;
declare function and<A, B, C, D>($A<A>, $A<B>, $A<C>, $A<D>): $A<A & B & C & D>;
declare function and<A, B, C, D, E>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>): $A<A & B & C & D & E>;
declare function and<A, B, C, D, E, F>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>): $A<A & B & C & D & E & F>;
declare function and<A, B, C, D, E, F, G>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>): $A<A & B & C & D & E & F & G>;
declare function and<A, B, C, D, E, F, G, H>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>): $A<A & B & C & D & E & F & G & H>;
declare function and<A, B, C, D, E, F, G, H, I>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>): $A<A & B & C & D & E & F & G & H & I>;
declare function and<A, B, C, D, E, F, G, H, I, J>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>, $A<J>): $A<A & B & C & D & E & F & G & H & I & J>;
declare function and<A, B, C, D, E, F, G, H, I, J, K>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>, $A<J>, $A<K>): $A<A & B & C & D & E & F & G & H & I & J & K>;
declare function and<A, B, C, D, E, F, G, H, I, J, K, L>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>, $A<J>, $A<K>, $A<L>): $A<A & B & C & D & E & F & G & H & I & J & K & L>;
declare function and<A, B, C, D, E, F, G, H, I, J, K, L, M>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>, $A<J>, $A<K>, $A<L>, $A<M>): $A<A & B & C & D & E & F & G & H & I & J & K & L & M>;
declare function and<A, B, C, D, E, F, G, H, I, J, K, L, M, N>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>, $A<J>, $A<K>, $A<L>, $A<M>, $A<N>): $A<A & B & C & D & E & F & G & H & I & J & K & L & M & N>;
declare function and<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>, $A<J>, $A<K>, $A<L>, $A<M>, $A<N>, $A<O>): $A<A & B & C & D & E & F & G & H & I & J & K & L & M & N & O>;
declare function and<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>, $A<J>, $A<K>, $A<L>, $A<M>, $A<N>, $A<O>, $A<P>): $A<A & B & C & D & E & F & G & H & I & J & K & L & M & N & O & P>;
declare function and<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>, $A<J>, $A<K>, $A<L>, $A<M>, $A<N>, $A<O>, $A<P>, $A<Q>): $A<A & B & C & D & E & F & G & H & I & J & K & L & M & N & O & P & Q>;
declare function and<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>, $A<J>, $A<K>, $A<L>, $A<M>, $A<N>, $A<O>, $A<P>, $A<Q>, $A<R>): $A<A & B & C & D & E & F & G & H & I & J & K & L & M & N & O & P & Q & R>;
declare function and<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>, $A<J>, $A<K>, $A<L>, $A<M>, $A<N>, $A<O>, $A<P>, $A<Q>, $A<R>, $A<S>): $A<A & B & C & D & E & F & G & H & I & J & K & L & M & N & O & P & Q & R & S>;
declare function and<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>, $A<J>, $A<K>, $A<L>, $A<M>, $A<N>, $A<O>, $A<P>, $A<Q>, $A<R>, $A<S>, $A<T>): $A<A & B & C & D & E & F & G & H & I & J & K & L & M & N & O & P & Q & R & S & T>;
declare function and<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>, $A<J>, $A<K>, $A<L>, $A<M>, $A<N>, $A<O>, $A<P>, $A<Q>, $A<R>, $A<S>, $A<T>, $A<U>): $A<A & B & C & D & E & F & G & H & I & J & K & L & M & N & O & P & Q & R & S & T & U>;
declare function and<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>, $A<J>, $A<K>, $A<L>, $A<M>, $A<N>, $A<O>, $A<P>, $A<Q>, $A<R>, $A<S>, $A<T>, $A<U>, $A<V>): $A<A & B & C & D & E & F & G & H & I & J & K & L & M & N & O & P & Q & R & S & T & U & V>;
declare function and<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>, $A<J>, $A<K>, $A<L>, $A<M>, $A<N>, $A<O>, $A<P>, $A<Q>, $A<R>, $A<S>, $A<T>, $A<U>, $A<V>, $A<W>): $A<A & B & C & D & E & F & G & H & I & J & K & L & M & N & O & P & Q & R & S & T & U & V & W>;
declare function and<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>, $A<J>, $A<K>, $A<L>, $A<M>, $A<N>, $A<O>, $A<P>, $A<Q>, $A<R>, $A<S>, $A<T>, $A<U>, $A<V>, $A<W>, $A<X>): $A<A & B & C & D & E & F & G & H & I & J & K & L & M & N & O & P & Q & R & S & T & U & V & W & X>;
declare function and<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>, $A<J>, $A<K>, $A<L>, $A<M>, $A<N>, $A<O>, $A<P>, $A<Q>, $A<R>, $A<S>, $A<T>, $A<U>, $A<V>, $A<W>, $A<X>, $A<Y>): $A<A & B & C & D & E & F & G & H & I & J & K & L & M & N & O & P & Q & R & S & T & U & V & W & X & Y>;
declare function and<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>($A<A>, $A<B>, $A<C>, $A<D>, $A<E>, $A<F>, $A<G>, $A<H>, $A<I>, $A<J>, $A<K>, $A<L>, $A<M>, $A<N>, $A<O>, $A<P>, $A<Q>, $A<R>, $A<S>, $A<T>, $A<U>, $A<V>, $A<W>, $A<X>, $A<Y>, $A<Z>): $A<A & B & C & D & E & F & G & H & I & J & K & L & M & N & O & P & Q & R & S & T & U & V & W & X & Y & Z>;

*/

// $FlowFixMe
const and =
  (...as) =>
    value => {
      for (const a of as) {
        a(value)
      }
      return value
    }

module.exports = and
