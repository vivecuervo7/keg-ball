import { createClient, type User } from '@supabase/supabase-js'
import { navigate } from 'svelte-routing'

type State = 'initial' | 'signingIn' | 'signedIn' | 'signingOut' | 'signedOut'

export const authStore = () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  let state: State = $state('initial')
  let user: User | undefined = $state(undefined)

  supabase.auth.onAuthStateChange(async (event, session) => {
    switch (event) {
      case 'INITIAL_SESSION':
        state = session?.user ? 'signedIn' : 'signedOut'
        break

      case 'SIGNED_IN':
        state = 'signedIn'
        if (JSON.stringify(user) !== JSON.stringify(session?.user)) {
          user = session?.user
        }
        break

      case 'SIGNED_OUT':
        state = 'signedOut'
        user = undefined
        break
    }
  })

  const signInWithGoogle: () => void = async () => {
    state = 'signingIn'

    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })
  }

  const signOut: () => void = async () => {
    state = 'signingOut'
    await supabase.auth.signOut()
    navigate('/')
  }

  return {
    get state() { return state },
    get signedIn() { return state === 'signedIn' },
    get isLoading() { return state === 'initial' || state === 'signingIn' || state === 'signingOut' },
    get user() { return user },
    signInWithGoogle,
    signOut,
  }
}
