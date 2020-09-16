const defined =
  <T>(value: T): Exclude<T, undefined> => {
    if (typeof value === 'undefined') {
      throw new TypeError('Expected defined.')
    }
    return value as Exclude<T, undefined>
  }

export default defined
