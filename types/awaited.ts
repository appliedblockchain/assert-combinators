/** @todo Change to `export type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T` when ts 4.1 comes out. */
export type Awaited<T> = T extends PromiseLike<infer U> ? U : T

export default Awaited
