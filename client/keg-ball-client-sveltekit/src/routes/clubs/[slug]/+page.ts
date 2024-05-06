import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/clubs/${params.slug}`)
  return await response.json()
}
