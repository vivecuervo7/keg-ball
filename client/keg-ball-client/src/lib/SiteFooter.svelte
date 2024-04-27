<script lang='ts'>
  import { authentication } from 'src/stores/authentication.svelte'
  import { useStoreContext } from 'src/hooks/useStoreContext.svelte'
  import Button from 'src/lib/Button.svelte'

  const auth = useStoreContext(authentication)
</script>

<footer>
  <div class='auth'>
    {#if auth.state === 'signingOut' || auth.state === 'signedIn'}
      <Button onclick={auth.signOut}>Sign out</Button>
      <span>{auth.state === 'signedIn' ? `Signed in as: ${auth.user?.username}` : 'Not signed in'}</span>
    {:else if auth.state === 'signingIn' || auth.state === 'signedOut'}
      <Button onclick={auth.signInWithGoogle}>Sign in with Google</Button>
    {/if}
  </div>
</footer>

<style lang='postcss'>
  footer {
    padding: 0.5rem 1rem;
    display: flex;
  }

  .auth {
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(auto, 300px);
    justify-items: stretch;
    gap: 0.25rem;

    span {
      font-size: 12px;
      text-align: center;
    }
  }
</style>
