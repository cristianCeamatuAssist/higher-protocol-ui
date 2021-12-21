import { ITenant } from 'features/auth'
import { http } from 'utils'

export const fetchTenant = async (path: string | null) => {
  if (path) {
    const { data }: { data: ITenant } = await http.get(path)
    return data
  }
}
