<script lang='ts'>
  import { authentication } from './stores/authentication.svelte'
  import { useStoreContext } from './hooks/useStoreContext.svelte'
  import Button from './lib/Button.svelte'
  import SiteContent from './lib/SiteContent.svelte'
  import SiteHeader from './lib/SiteHeader.svelte'
  import SiteLoader from './lib/SiteLoader.svelte'

  const auth = useStoreContext(authentication)
</script>

<div>
  <div class='layout'>
    <SiteHeader />
    <SiteContent>
      <div class='auth'>
        {#if auth.state === 'signingOut' || auth.state === 'signedIn'}
          <Button onclick={auth.signOut}>Sign out</Button>
          <span>{auth.state === 'signedIn' ? `Signed in as: ${auth.user?.username}` : 'Not signed in'}</span>
        {:else if auth.state === 'signingIn' || auth.state === 'signedOut'}
          <Button onclick={auth.signInWithGoogle}>Sign in with Google</Button>
        {/if}
      </div>
    </SiteContent>
  </div>
  <SiteLoader loading={auth.state === 'initial' || auth.state === 'signingIn' || auth.state === 'signingOut'} />
</div>

<style lang='postcss'>
  .layout {
    background-color: var(--color-main-background);
    color: var(--color-main-foreground);
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100dvh;
    overflow: hidden;
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
