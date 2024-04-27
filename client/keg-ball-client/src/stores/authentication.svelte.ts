import { createClient } from '@supabase/supabase-js'

type State = 'initial' | 'signingIn' | 'signedIn' | 'signingOut' | 'signedOut'

interface User {
  username: string
}

export const authentication = () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  let state: State = $state('initial')
  let user: User | null = $state(null)

  supabase.auth.onAuthStateChange(async (event, session) => {
    switch (event) {
      case 'INITIAL_SESSION':
        state = session?.user ? 'signedIn' : 'signedOut'
        break

      case 'SIGNED_IN':
        state = 'signedIn'
        user = {
          username: session?.user?.email || '',
        }
        break

      case 'SIGNED_OUT':
        state = 'signedOut'
        user = null
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
  }

  return {
    get state() { return state },
    get isLoading() { return state === 'initial' || state === 'signingIn' || state === 'signingOut' },
    get user() { return user },
    signInWithGoogle,
    signOut,
  }
}
