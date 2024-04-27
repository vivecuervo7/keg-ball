<script lang='ts'>
  import { useStoreContext } from 'src/hooks/useStoreContext.svelte'
  import Button from 'src/lib/Button.svelte'
  import { authentication } from 'src/stores/authentication.svelte'

  const auth = useStoreContext(authentication)

  const showSignOutButton = $derived(auth.state === 'signingOut' || auth.state === 'signedIn')
  const showSignInButton = $derived(auth.state === 'signingIn' || auth.state === 'signedOut')
  const signedInAsText = $derived(auth.state === 'signedIn'
    ? `Signed in as: ${auth.user?.username}`
    : 'Not signed in')
</script>

<footer>
  <div>
    {#if showSignOutButton}
      <Button onclick={auth.signOut}>Sign out</Button>
    {:else if showSignInButton}
      <Button onclick={auth.signInWithGoogle}>
        Sign in with Google
      </Button>
    {/if}
    <span>{signedInAsText}</span>
  </div>
</footer>

<style lang='postcss'>
  footer {
    display: flex;
    padding: 0.5rem 1rem 0;
  }

  div {
    display: grid;
    grid-template-columns: minmax(auto, 300px);
    gap: 0.25rem;
    justify-items: stretch;
    margin: 0 auto;

    span {
      text-align: center;
      font-size: 12px;
    }
  }
</style>
