import { http, storage } from 'utils'

export const signIn = async (body) => {
  const { data } = await http.post('/login', body)
  const { access_token: token } = data

  storage.setAuthToken(token)

  const { data: user } = await http.get('/profile')
  storage.setAuthUser(user)

  return {
    user,
  }
}

export const authApi = { signIn }
