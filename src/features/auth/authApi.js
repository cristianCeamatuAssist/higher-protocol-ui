import { http } from 'utils'

export const signIn = async (body) => {
  // const res = await http.post('https://hr-app-eth.herokuapp.com/login', body)
  // console.log(`res`, res)
  // const token = res.headers.get('authorization')
  // console.log(`token`, token)
  // return { user: res?.data, token }
  const { email, password } = body
  if (email === 'demo@demo.com' && password === 'demo@demo.com') {
    return {
      username: 'johnDoe',
      email: 'demo@demo.com',
      first_name: 'John',
      last_name: 'Doe',
      type: 'company',
    }
  }
}
