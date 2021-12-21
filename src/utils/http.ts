import axios from 'axios'
// utils
import { utils } from '@outbound-ai/ui'

// Set default axios
axios.defaults.baseURL = process.env.REACT_APP_CONTENT_URL
axios.interceptors.request.use((config) => {
  const token = utils.getAccessToken()
  if (config?.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
export default axios
