import { http } from 'utils'

export const signIn = async (body) => {
  const res = await http.post('https://hr-app-eth.herokuapp.com/login', body)
  console.log(`res`, res)
  const token = res.headers.get('authorization')
  console.log(`token`, token)
  return { user: res?.data, token }
}
