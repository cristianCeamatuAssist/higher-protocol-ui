import { http } from 'utils'

export const createJob = async (body) => {
  const { data } = await http.post('/jobs', body)
  return data
}

export const createContract = async ({ id, body }) => {
  const { data } = await http.post(`/jobs/${id}/contract`, body)
  return data
}
