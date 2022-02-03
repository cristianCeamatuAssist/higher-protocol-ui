export const apiRequestWithStatesHandler = async (fetcher, setIsLoading, setError) => {
  let data = undefined
  let error = undefined
  setError(false)
  setIsLoading(true)
  try {
    data = await fetcher()
    setIsLoading(false)
  } catch (err) {
    setIsLoading(false)
    setError(err?.response?.message || 'Something went wrong....')
    error = error?.response?.message || 'Something went wrong....'
  }

  return { data, error }
}
