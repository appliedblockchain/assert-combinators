import { inspect } from 'util'

export const never_ =
  (value: never): never => {
    throw new TypeError(`Expected never, got ${inspect(value)}.`)
  }

export default never_
