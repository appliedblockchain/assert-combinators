import type { Assert } from './prelude.js'
import { inspect } from 'util'

const instance =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <T extends new (...args: any[]) => any>(class_: T): Assert<InstanceType<T>> =>
    value => {
      if (!(value instanceof class_)) {
        throw new TypeError(`Expected ${inspect(value)} to be instance of ${inspect(class_)}.`)
      }
      return value as InstanceType<T>
    }

export default instance
