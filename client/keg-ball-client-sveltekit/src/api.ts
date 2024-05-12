import { error } from '@sveltejs/kit'

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const get = async <T>(url: string) => {
  await delay(300)

  const response = await fetch(url)
  const data: T = await response.json()

  if (response.status === 404) {
    error(response.status, response.statusText)
  }

  return data
}

export const put = async <T>(url: string, body: T) => {
  await delay(500)

  return await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

export const post = async <T>(url: string, body: T) => {
  await delay(700)

  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}
