const rethrow: (message: string) => (err: Error) => void =
  message =>
    err => {

      // eslint-disable-next-line no-param-reassign
      err.message = `${message} ${err.message}`
      throw err
    }

export default rethrow
