import { PUBLIC_API_BASE_URL } from '$env/static/public'
import { error } from '@sveltejs/kit'
import type { Club } from '../../../models'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }): Promise<Club> => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const response = await fetch(`${PUBLIC_API_BASE_URL}/clubs/${params.id}`)

  if (response.status === 404) {
    error(response.status, response.statusText)
  }

  return await response.json()
}
