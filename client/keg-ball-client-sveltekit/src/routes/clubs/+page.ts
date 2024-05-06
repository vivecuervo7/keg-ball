import type { PageLoad } from './$types'
import { PUBLIC_API_BASE_URL } from '$env/static/public'

export const load: PageLoad = async ({ url }) => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const response = await fetch(`${PUBLIC_API_BASE_URL}/clubs?name_like=${url.searchParams.get('search')}`)
  const clubs = await response.json()
  return {
    clubs,
  }
}
