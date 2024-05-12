import { PUBLIC_API_BASE_URL } from '$env/static/public'
import type { Club } from '../../../models'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const response = await fetch(`${PUBLIC_API_BASE_URL}/clubs/${params.id}`)
  const club: Club = await response.json()
  return club
}
