/** Helper no-op, parametric type to expand intellisense for alias types. */
export type Alias<T> =
  T extends infer U ?
    { [K in keyof U]: U[K] } :
    never

export type Assert<R> =
  (value: unknown) => R

export type Asserted<A> =
  A extends (value: unknown) => infer U ?
    U :
    never

export type AssertedWithPrimitive<T> =
  T extends (value: unknown) => infer U ?
    U :
    T extends Primitive ?
      T :
      never

export type Awaited<T> =
  T extends PromiseLike<infer U> ?
    Awaited<U> :
    T

export type Keyed<T = unknown> =
  Record<string, T | undefined>

export type NilOr<T> =
  | undefined
  | null
  | T

export type UndefinedOr<T> =
  | undefined
  | T

export type NullOr<T> =
  | null
  | T

export type Defined<T> =
  Exclude<T, undefined>

export type NonNullish<T> =
  Exclude<T, undefined | null>

export type Predicate<T = unknown> =
  (value: T) => boolean

export type Primitive =
  | undefined
  | null
  | false
  | true
  | number
  | string
  | symbol
