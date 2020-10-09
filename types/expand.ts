/** Helper no-op, parametric type to expand intellisense for alias types. */
export type Expand<T> = T extends infer U ? { [K in keyof U]: U[K] } : never

export default Expand
