import { PUBLIC_API_BASE_URL } from '$env/static/public'
import type { Club } from '../../models'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ url }) => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const search = url.searchParams.get('search') ?? ''
  const response = await fetch(`${PUBLIC_API_BASE_URL}/clubs?name_like=${search}`)
  const clubs: Club[] = await response.json()
  return {
    clubs,
  }
}
