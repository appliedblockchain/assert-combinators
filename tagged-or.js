// @flow

const { inspect } = require('util')

/*::

type $A<R> = any => R
type $R<T,V> = $ReadOnly<{| tag: T, value: V |}>

declare function taggedOr<A_,A>([A_,$A<A>]): $A<$R<A_,A>>;
declare function taggedOr<A_,A,B_,B>([A_,$A<A>], [B_,$A<B>]): $A<$R<A_,A> | $R<B_,B>>;
declare function taggedOr<A_,A,B_,B,C_,C>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I,J_,J>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>], [J_,$A<J>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I> | $R<J_,J>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I,J_,J,K_,K>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>], [J_,$A<J>], [K_,$A<K>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I> | $R<J_,J> | $R<K_,K>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I,J_,J,K_,K,L_,L>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>], [J_,$A<J>], [K_,$A<K>], [L_,$A<L>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I> | $R<J_,J> | $R<K_,K> | $R<L_,L>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I,J_,J,K_,K,L_,L,M_,M>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>], [J_,$A<J>], [K_,$A<K>], [L_,$A<L>], [M_,$A<M>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I> | $R<J_,J> | $R<K_,K> | $R<L_,L> | $R<M_,M>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I,J_,J,K_,K,L_,L,M_,M,N_,N>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>], [J_,$A<J>], [K_,$A<K>], [L_,$A<L>], [M_,$A<M>], [N_,$A<N>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I> | $R<J_,J> | $R<K_,K> | $R<L_,L> | $R<M_,M> | $R<N_,N>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I,J_,J,K_,K,L_,L,M_,M,N_,N,O_,O>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>], [J_,$A<J>], [K_,$A<K>], [L_,$A<L>], [M_,$A<M>], [N_,$A<N>], [O_,$A<O>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I> | $R<J_,J> | $R<K_,K> | $R<L_,L> | $R<M_,M> | $R<N_,N> | $R<O_,O>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I,J_,J,K_,K,L_,L,M_,M,N_,N,O_,O,P_,P>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>], [J_,$A<J>], [K_,$A<K>], [L_,$A<L>], [M_,$A<M>], [N_,$A<N>], [O_,$A<O>], [P_,$A<P>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I> | $R<J_,J> | $R<K_,K> | $R<L_,L> | $R<M_,M> | $R<N_,N> | $R<O_,O> | $R<P_,P>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I,J_,J,K_,K,L_,L,M_,M,N_,N,O_,O,P_,P,Q_,Q>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>], [J_,$A<J>], [K_,$A<K>], [L_,$A<L>], [M_,$A<M>], [N_,$A<N>], [O_,$A<O>], [P_,$A<P>], [Q_,$A<Q>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I> | $R<J_,J> | $R<K_,K> | $R<L_,L> | $R<M_,M> | $R<N_,N> | $R<O_,O> | $R<P_,P> | $R<Q_,Q>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I,J_,J,K_,K,L_,L,M_,M,N_,N,O_,O,P_,P,Q_,Q,R_,R>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>], [J_,$A<J>], [K_,$A<K>], [L_,$A<L>], [M_,$A<M>], [N_,$A<N>], [O_,$A<O>], [P_,$A<P>], [Q_,$A<Q>], [R_,$A<R>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I> | $R<J_,J> | $R<K_,K> | $R<L_,L> | $R<M_,M> | $R<N_,N> | $R<O_,O> | $R<P_,P> | $R<Q_,Q> | $R<R_,R>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I,J_,J,K_,K,L_,L,M_,M,N_,N,O_,O,P_,P,Q_,Q,R_,R,S_,S>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>], [J_,$A<J>], [K_,$A<K>], [L_,$A<L>], [M_,$A<M>], [N_,$A<N>], [O_,$A<O>], [P_,$A<P>], [Q_,$A<Q>], [R_,$A<R>], [S_,$A<S>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I> | $R<J_,J> | $R<K_,K> | $R<L_,L> | $R<M_,M> | $R<N_,N> | $R<O_,O> | $R<P_,P> | $R<Q_,Q> | $R<R_,R> | $R<S_,S>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I,J_,J,K_,K,L_,L,M_,M,N_,N,O_,O,P_,P,Q_,Q,R_,R,S_,S,T_,T>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>], [J_,$A<J>], [K_,$A<K>], [L_,$A<L>], [M_,$A<M>], [N_,$A<N>], [O_,$A<O>], [P_,$A<P>], [Q_,$A<Q>], [R_,$A<R>], [S_,$A<S>], [T_,$A<T>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I> | $R<J_,J> | $R<K_,K> | $R<L_,L> | $R<M_,M> | $R<N_,N> | $R<O_,O> | $R<P_,P> | $R<Q_,Q> | $R<R_,R> | $R<S_,S> | $R<T_,T>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I,J_,J,K_,K,L_,L,M_,M,N_,N,O_,O,P_,P,Q_,Q,R_,R,S_,S,T_,T,U_,U>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>], [J_,$A<J>], [K_,$A<K>], [L_,$A<L>], [M_,$A<M>], [N_,$A<N>], [O_,$A<O>], [P_,$A<P>], [Q_,$A<Q>], [R_,$A<R>], [S_,$A<S>], [T_,$A<T>], [U_,$A<U>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I> | $R<J_,J> | $R<K_,K> | $R<L_,L> | $R<M_,M> | $R<N_,N> | $R<O_,O> | $R<P_,P> | $R<Q_,Q> | $R<R_,R> | $R<S_,S> | $R<T_,T> | $R<U_,U>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I,J_,J,K_,K,L_,L,M_,M,N_,N,O_,O,P_,P,Q_,Q,R_,R,S_,S,T_,T,U_,U,V_,V>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>], [J_,$A<J>], [K_,$A<K>], [L_,$A<L>], [M_,$A<M>], [N_,$A<N>], [O_,$A<O>], [P_,$A<P>], [Q_,$A<Q>], [R_,$A<R>], [S_,$A<S>], [T_,$A<T>], [U_,$A<U>], [V_,$A<V>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I> | $R<J_,J> | $R<K_,K> | $R<L_,L> | $R<M_,M> | $R<N_,N> | $R<O_,O> | $R<P_,P> | $R<Q_,Q> | $R<R_,R> | $R<S_,S> | $R<T_,T> | $R<U_,U> | $R<V_,V>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I,J_,J,K_,K,L_,L,M_,M,N_,N,O_,O,P_,P,Q_,Q,R_,R,S_,S,T_,T,U_,U,V_,V,W_,W>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>], [J_,$A<J>], [K_,$A<K>], [L_,$A<L>], [M_,$A<M>], [N_,$A<N>], [O_,$A<O>], [P_,$A<P>], [Q_,$A<Q>], [R_,$A<R>], [S_,$A<S>], [T_,$A<T>], [U_,$A<U>], [V_,$A<V>], [W_,$A<W>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I> | $R<J_,J> | $R<K_,K> | $R<L_,L> | $R<M_,M> | $R<N_,N> | $R<O_,O> | $R<P_,P> | $R<Q_,Q> | $R<R_,R> | $R<S_,S> | $R<T_,T> | $R<U_,U> | $R<V_,V> | $R<W_,W>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I,J_,J,K_,K,L_,L,M_,M,N_,N,O_,O,P_,P,Q_,Q,R_,R,S_,S,T_,T,U_,U,V_,V,W_,W,X_,X>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>], [J_,$A<J>], [K_,$A<K>], [L_,$A<L>], [M_,$A<M>], [N_,$A<N>], [O_,$A<O>], [P_,$A<P>], [Q_,$A<Q>], [R_,$A<R>], [S_,$A<S>], [T_,$A<T>], [U_,$A<U>], [V_,$A<V>], [W_,$A<W>], [X_,$A<X>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I> | $R<J_,J> | $R<K_,K> | $R<L_,L> | $R<M_,M> | $R<N_,N> | $R<O_,O> | $R<P_,P> | $R<Q_,Q> | $R<R_,R> | $R<S_,S> | $R<T_,T> | $R<U_,U> | $R<V_,V> | $R<W_,W> | $R<X_,X>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I,J_,J,K_,K,L_,L,M_,M,N_,N,O_,O,P_,P,Q_,Q,R_,R,S_,S,T_,T,U_,U,V_,V,W_,W,X_,X,Y_,Y>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>], [J_,$A<J>], [K_,$A<K>], [L_,$A<L>], [M_,$A<M>], [N_,$A<N>], [O_,$A<O>], [P_,$A<P>], [Q_,$A<Q>], [R_,$A<R>], [S_,$A<S>], [T_,$A<T>], [U_,$A<U>], [V_,$A<V>], [W_,$A<W>], [X_,$A<X>], [Y_,$A<Y>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I> | $R<J_,J> | $R<K_,K> | $R<L_,L> | $R<M_,M> | $R<N_,N> | $R<O_,O> | $R<P_,P> | $R<Q_,Q> | $R<R_,R> | $R<S_,S> | $R<T_,T> | $R<U_,U> | $R<V_,V> | $R<W_,W> | $R<X_,X> | $R<Y_,Y>>;
declare function taggedOr<A_,A,B_,B,C_,C,D_,D,E_,E,F_,F,G_,G,H_,H,I_,I,J_,J,K_,K,L_,L,M_,M,N_,N,O_,O,P_,P,Q_,Q,R_,R,S_,S,T_,T,U_,U,V_,V,W_,W,X_,X,Y_,Y,Z_,Z>([A_,$A<A>], [B_,$A<B>], [C_,$A<C>], [D_,$A<D>], [E_,$A<E>], [F_,$A<F>], [G_,$A<G>], [H_,$A<H>], [I_,$A<I>], [J_,$A<J>], [K_,$A<K>], [L_,$A<L>], [M_,$A<M>], [N_,$A<N>], [O_,$A<O>], [P_,$A<P>], [Q_,$A<Q>], [R_,$A<R>], [S_,$A<S>], [T_,$A<T>], [U_,$A<U>], [V_,$A<V>], [W_,$A<W>], [X_,$A<X>], [Y_,$A<Y>], [Z_,$A<Z>]): $A<$R<A_,A> | $R<B_,B> | $R<C_,C> | $R<D_,D> | $R<E_,E> | $R<F_,F> | $R<G_,G> | $R<H_,H> | $R<I_,I> | $R<J_,J> | $R<K_,K> | $R<L_,L> | $R<M_,M> | $R<N_,N> | $R<O_,O> | $R<P_,P> | $R<Q_,Q> | $R<R_,R> | $R<S_,S> | $R<T_,T> | $R<U_,U> | $R<V_,V> | $R<W_,W> | $R<X_,X> | $R<Y_,Y> | $R<Z_,Z>>;

*/

const first /*: <T>(T[]) => T */ = /*:: <T> */
  (_) =>
    _[0]

/** List of tagged ors is used on input because we want to have explicit order in which assertions are tried.
    An object is returned because flow doesn't support covariance on tuples yet. */
// $FlowFixMe
const taggedOr =
  (...tagAs) =>
    value => {
      for (const [ tag, a ] of tagAs) {
        try {
          return { tag, value: a(value) }
        } catch (err) {
          continue
        }
      }
      throw new TypeError(`Expected one of ${tagAs.map(first).join(', ')} tagged assertions to pass for ${inspect(value)} value.`)
    }

module.exports = taggedOr
