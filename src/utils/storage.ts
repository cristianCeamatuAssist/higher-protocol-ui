// types and utils
import { IUser } from 'types/userTypes'

export const getAccessToken = () => localStorage.getItem('accessToken') || ''

export const setAccessToken = (accessToken: string) => localStorage.setItem('accessToken', accessToken || '')

export const setUserInStorage = (user: IUser) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user') || 'null')
}

export const removeUserFromStorage = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('user')
}
