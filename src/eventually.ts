const eventually =
  async <T>(assert: (result: T) => T, poll: () => Promise<T>, {
    retries = 10,
    delay = 1000
  }: {
    retries?: number,
    delay?: number
  } = {}): Promise<T> => {
    for (let retry = 1; retry <= retries; retry++) {
      const before = Date.now()
      const result = await poll()
      try {
        return assert(result)
      } catch (err) {
        if (retry === retries) {
          throw err
        }
      }
      const duration = Date.now() - before
      await new Promise(resolve => setTimeout(resolve, delay - duration))
    }
    throw new Error('Unreachable.')
  }

export default eventually
