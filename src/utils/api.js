export const apiRequestWithStatesHandler = async (fetcher, setIsLoading, setError) => {
  setError(false)
  setIsLoading(true)
  try {
    const res = await fetcher()
    setIsLoading(false)
    return res
  } catch (error) {
    setIsLoading(false)
    setError(error?.response?.message || 'Something went wrong....')
    return undefined
  }
}
