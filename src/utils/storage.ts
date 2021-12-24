// types and utils
import { IUser } from 'types/userTypes'

export const getAccessToken = () => localStorage.getItem('accessToken') || ''

export const setAccessToken = (accessToken: string) => localStorage.setItem('accessToken', accessToken || '')

export const setUser = (user: IUser) => {
  localStorage.setItem('currentUser', JSON.stringify(user))
}

export const getUserFromStorage = () => {
  JSON.parse(localStorage.getItem('currentUser') || 'null')
}

export const removeUserFromStorage = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('currentUser')
}
