import axios from 'axios'
import { getAccessToken } from 'utils'

// Set default axios
axios.defaults.baseURL = process.env.REACT_APP_CONTENT_URL
axios.interceptors.request.use((config) => {
  const token = getAccessToken()
  if (config?.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
export const http = axios
