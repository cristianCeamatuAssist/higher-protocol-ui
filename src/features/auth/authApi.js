import { http } from 'utils'

export const signIn = async (body) => {
  const res = await http.post('https://hr-app-eth.herokuapp.com/login', { user: body })
  // console.log(`res`, res)
  // try {
  //   const token = res.headers?.get('authorization')
  //   console.log(`token`, token)
  // } catch (error) {
  //   console.log('error :>> ', error)
  // }

  return {
    user: res?.data,
    token:
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjQwOTY3ODkwLCJleHAiOjE2NDA5NzE0OTAsImp0aSI6IjNhMWRiZjYxLTQ4MDItNGViZC1hNTJhLTc3ZDk3MDc3ZDZkZiJ9.Alwb8H4b83OksD_lHlDZdaz1UKkymEpL9iGdPOOywK4',
  }
}
