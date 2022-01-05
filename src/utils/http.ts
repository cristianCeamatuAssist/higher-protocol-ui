import axios from 'axios'
import { getAccessToken } from 'utils'

const tokenMiddleware = (config: any) => {
  const token = getAccessToken()
  if (config?.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}

export const http = axios.create({
  baseURL: process.env.REACT_APP_CONTENT_URL,
})
http.interceptors.request.use(tokenMiddleware)
// http.interceptors.response.use(responseMiddleware, authMiddleware)

// Set default axios
// axios.defaults.baseURL = process.env.REACT_APP_CONTENT_URL
// axios.interceptors.request.use((config) => {
//   const token = getAccessToken()
//   if (config?.headers) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })

export const getResource = async (url: string) => {
  const { data } = await http.get(url)
  return data
}
