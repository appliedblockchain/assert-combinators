import type Awaited from './awaited'

export type AsyncReturnType<F extends (...args: unknown[]) => unknown> = Awaited<ReturnType<F>>

export default AsyncReturnType
