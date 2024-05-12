import type { PageLoad } from './$types'
import { PUBLIC_API_BASE_URL } from '$env/static/public'
import type { Club } from '../../../models'

export const load: PageLoad = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const response = await fetch(`${PUBLIC_API_BASE_URL}/clubs/${params.slug}`)
  const club: Club = await response.json()
  return club
}
