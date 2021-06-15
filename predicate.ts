import type Predicate from './types/predicate'
import { inspect } from 'util'

type Identity<T> = (value: T) => T

const predicate: (f: Predicate<unknown>, name?: string) => Identity<unknown> =
  (f, name) =>
    value => {
      if (!f(value)) {
        throw new TypeError(`Expected ${name === undefined ? 'predicate' : `${inspect(name)} predicate`} to pass for ${inspect(value)}.`)
      }
      return value
    }

export default predicate
