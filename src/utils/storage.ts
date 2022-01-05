// types and utils
import { IUser, ISession } from 'types/userTypes'

export const getAccessToken = () => localStorage.getItem('token') || null
export const getAuthUser = () => JSON.parse(localStorage.getItem('user') || 'null')
export const setAuthToken = (token: string) => localStorage.setItem('token', token || '')
export const setAuthUser = (user: IUser) => localStorage.setItem('user', JSON.stringify(user || null))
export const getAuthSession = () => getAccessToken() && { user: getAuthUser(), token: getAccessToken() }

export const setSessionInStorage = (session: ISession) => {
  const { user, token } = session
  setAuthUser(user)
  setAuthToken(token)
}

export const removeSession = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}
