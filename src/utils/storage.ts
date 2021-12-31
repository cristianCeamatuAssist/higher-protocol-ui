// types and utils
import { IUser } from 'types/userTypes'

export const getAccessToken = () => localStorage.getItem('token') || ''

export const setAccessToken = (token: string) => localStorage.setItem('token', token || '')

export const setUserInStorage = (user: IUser) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user') || 'null')
}

export const removeUserFromStorage = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}
