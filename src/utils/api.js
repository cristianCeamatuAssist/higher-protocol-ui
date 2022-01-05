export const apiRequestWithStatesHandler = async (fetcher, setIsLoading, setError) => {
  setError(false)
  setIsLoading(true)
  try {
    setIsLoading(false)
    const res = await fetcher()
    return res
  } catch (error) {
    setIsLoading(false)
    setError(error?.response?.message || 'Something went wrong....')
    return undefined
  }
}
