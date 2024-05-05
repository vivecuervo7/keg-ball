import { useStoreContext } from 'src/hooks/useStoreContext.svelte'
import { authStore } from './authStore.svelte'
import type { User } from 'src/models'

export const userStore = () => {
  let user: User | null = $state(null)

  const auth = useStoreContext(authStore)

  $effect(() => {
    if (auth.user) {
      loadUser(auth.user.id)
    }
    else {
      user = null
    }
  })

  const loadUser = async (id: string) => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/${id}`)

    if (response.ok) {
      const json = await response.json()
      user = json
      return
    }
    else {
      const email = auth.user?.email ?? ''
      const username = email?.substring(0, email.indexOf('@'))
      createNewProfile(id, email, username)
    }
  }

  const createNewProfile = async (id: string, email: string, username: string) => {
    await fetch(`http://localhost:3000/users`, {
      method: 'POST',
      body: JSON.stringify({ id, email, username }),
    })

    user = { id, email, username }
  }

  return {
    get user() { return user },
    get username() { return user?.username || '' },
    get email() { return user?.email || '' },
    get setupCompleted() { return !!user },
  }
}
