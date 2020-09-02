import type Predicate from './types/predicate'
import { inspect } from 'util'

type Identity<T> = (value: T) => T

export const predicate: <T>(f: Predicate<T>, name?: string) => Identity<T> =
  (f, name) =>
    value => {
      if (!f(value)) {
        throw new TypeError(`Expected ${name === undefined ? 'predicate' : `${inspect(name)} predicate`} to pass for ${inspect(value)}.`)
      }
      return value
    }

export default predicate
