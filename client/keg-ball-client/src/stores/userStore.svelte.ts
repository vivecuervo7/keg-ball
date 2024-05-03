import { useStoreContext } from 'src/hooks/useStoreContext.svelte'
import { authStore } from './authStore.svelte'

interface Profile {
  id: string
  email: string
  username: string
}

export const userStore = () => {
  let profile: Profile | null = $state(null)

  const auth = useStoreContext(authStore)

  $effect(() => {
    if (auth.user) {
      loadUserProfile(auth.user.id)
    }
    else {
      profile = null
    }
  })

  const loadUserProfile = async (id: string) => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/${id}`)

    if (response.ok) {
      const json = await response.json()
      profile = json
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

    profile = { id, email, username }
  }

  return {
    get profile() { return profile },
    get username() { return profile?.username || '' },
    get email() { return profile?.email || '' },
    get setupCompleted() { return !!profile },
  }
}
