const defaultError =
  <T>(err: unknown, result: T) =>
    new Error((err instanceof Error ? err.message : String(err)) + ' Last result was ' + JSON.stringify(result) + '.')

const eventually =
  async <T, U>(assert: (result: T) => U, poll: () => Promise<T>, {
    retries = 10,
    delay = 1000,
    error = defaultError
  }: {
    retries?: number,
    delay?: number,

    /** Error constructor based on thrown assertion error and last polled result. */
    error?: (err: unknown, result: T) => unknown
  } = {}): Promise<U> => {
    for (let retry = 1; retry <= retries; retry++) {
      const before = Date.now()
      const result = await poll()
      try {
        return assert(result)
      } catch (err) {
        if (retry === retries) {
          throw error(err, result)
        }
      }
      const duration = Date.now() - before
      await new Promise(resolve => setTimeout(resolve, delay - duration))
    }
    throw new Error('Unreachable.')
  }

export default eventually
