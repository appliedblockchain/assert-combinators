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

export type Awaited<T> =
  T extends PromiseLike<infer U> ?
    Awaited<U> :
    T

export type Keyed<T = unknown> =
  Record<string, T | undefined>

/** @deprecated use {@link Nullish} */
export type NilOr<T> =
  | undefined
  | null
  | T

export type Nullish<T> =
  | undefined
  | null
  | T

export type UndefinedOr<T> =
  | undefined
  | T

export type Nullable<T> =
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
  | boolean
  | number
  | string
  | symbol

export type Exact<T, I> =
  T extends I ?
    Exclude<keyof T, keyof I> extends never ?
      T :
      never :
    never
