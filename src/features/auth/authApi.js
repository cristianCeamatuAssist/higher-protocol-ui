import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_CONTENT_URL

export const signIn = async (body) => {
  const res = await axios.post('https://hr-app-eth.herokuapp.com/login', { user: body })
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
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjQxMzkyOTE2LCJleHAiOjE2NDEzOTY1MTYsImp0aSI6ImEwOTk4YmFmLTNjOGItNDIyOS1hNzAwLWRiYTZmNzQ3NjhkMCJ9.eRCpTJKS9Trcd9e5xSjKbFkUAOqbw_zQTPi07oaPvlk',
  }
}
