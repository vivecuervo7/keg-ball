import { get } from '../../api'
import type { User } from '../../models'
import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return await get<User>('/profile')
}
