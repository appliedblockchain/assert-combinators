type Asserted<A> = A extends (value: unknown) => infer U ? U : never

export default Asserted
