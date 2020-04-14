// @flow strict

/*::

import type { $A } from './types/a'

declare function sequence<A>($A<A>): $A<A>;
declare function sequence<A,B>($A<A>,A=>B): $A<B>;
declare function sequence<A,B,C>($A<A>,A=>B,B=>C): $A<C>;
declare function sequence<A,B,C,D>($A<A>,A=>B,B=>C,C=>D): $A<D>;
declare function sequence<A,B,C,D,E>($A<A>,A=>B,B=>C,C=>D,D=>E): $A<E>;
declare function sequence<A,B,C,D,E,F>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F): $A<F>;
declare function sequence<A,B,C,D,E,F,G>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G): $A<G>;
declare function sequence<A,B,C,D,E,F,G,H>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H): $A<H>;
declare function sequence<A,B,C,D,E,F,G,H,I>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H,H=>I): $A<I>;
declare function sequence<A,B,C,D,E,F,G,H,I,J>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H,H=>I,I=>J): $A<J>;
declare function sequence<A,B,C,D,E,F,G,H,I,J,K>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H,H=>I,I=>J,J=>K): $A<K>;
declare function sequence<A,B,C,D,E,F,G,H,I,J,K,L>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H,H=>I,I=>J,J=>K,K=>L): $A<L>;
declare function sequence<A,B,C,D,E,F,G,H,I,J,K,L,M>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H,H=>I,I=>J,J=>K,K=>L,L=>M): $A<M>;
declare function sequence<A,B,C,D,E,F,G,H,I,J,K,L,M,N>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H,H=>I,I=>J,J=>K,K=>L,L=>M,M=>N): $A<N>;
declare function sequence<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H,H=>I,I=>J,J=>K,K=>L,L=>M,M=>N,N=>O): $A<O>;
declare function sequence<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H,H=>I,I=>J,J=>K,K=>L,L=>M,M=>N,N=>O,O=>P): $A<P>;
declare function sequence<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H,H=>I,I=>J,J=>K,K=>L,L=>M,M=>N,N=>O,O=>P,P=>Q): $A<Q>;
declare function sequence<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H,H=>I,I=>J,J=>K,K=>L,L=>M,M=>N,N=>O,O=>P,P=>Q,Q=>R): $A<R>;
declare function sequence<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H,H=>I,I=>J,J=>K,K=>L,L=>M,M=>N,N=>O,O=>P,P=>Q,Q=>R,R=>S): $A<S>;
declare function sequence<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H,H=>I,I=>J,J=>K,K=>L,L=>M,M=>N,N=>O,O=>P,P=>Q,Q=>R,R=>S,S=>T): $A<T>;
declare function sequence<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H,H=>I,I=>J,J=>K,K=>L,L=>M,M=>N,N=>O,O=>P,P=>Q,Q=>R,R=>S,S=>T,T=>U): $A<U>;
declare function sequence<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H,H=>I,I=>J,J=>K,K=>L,L=>M,M=>N,N=>O,O=>P,P=>Q,Q=>R,R=>S,S=>T,T=>U,U=>V): $A<V>;
declare function sequence<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H,H=>I,I=>J,J=>K,K=>L,L=>M,M=>N,N=>O,O=>P,P=>Q,Q=>R,R=>S,S=>T,T=>U,U=>V,V=>W): $A<W>;
declare function sequence<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H,H=>I,I=>J,J=>K,K=>L,L=>M,M=>N,N=>O,O=>P,P=>Q,Q=>R,R=>S,S=>T,T=>U,U=>V,V=>W,W=>X): $A<X>;
declare function sequence<A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y>($A<A>,A=>B,B=>C,C=>D,D=>E,E=>F,F=>G,G=>H,H=>I,I=>J,J=>K,K=>L,L=>M,M=>N,N=>O,O=>P,P=>Q,Q=>R,R=>S,S=>T,T=>U,U=>V,V=>W,W=>X,X=>Y): $A<Y>;

*/

// $FlowFixMe
const sequence =
  (...as) => {
    if (!as.length) {
      throw new TypeError('Expected non-zero arity.')
    }
    return value => {
      let r = value
      for (const a of as) {
        r = a(r)
      }
      return r
    }
  }

module.exports = sequence
