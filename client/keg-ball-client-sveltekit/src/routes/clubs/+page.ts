import { PUBLIC_API_BASE_URL } from '$env/static/public'
import { error } from '@sveltejs/kit'
import type { Club } from '../../models'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ url }) => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const search = url.searchParams.get('search') ?? ''
  const response = await fetch(`${PUBLIC_API_BASE_URL}/clubs?name_like=${search}`)

  if (response.status === 404) {
    error(response.status, response.statusText)
  }

  const clubs: Club[] = await response.json()

  return {
    clubs,
  }
}
