import type { RequestHandler } from './$types'
import { PUBLIC_API_BASE_URL } from '$env/static/public'
import { error, json } from '@sveltejs/kit'

export const GET: RequestHandler = async ({ fetch }) => {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const response = await fetch(`${PUBLIC_API_BASE_URL}/users/1`) // TODO: Use current user's ID

  if (response.status === 404) {
    error(response.status, response.statusText)
  }

  const data = await response.json()

  return json(data)
}

export const PUT: RequestHandler = async ({ fetch, request }) => {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const user = await request.json()

  await fetch(`${PUBLIC_API_BASE_URL}/users/1`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })

  return new Response(null, { status: 204 })
}
