<script lang='ts'>
  import { useStoreContext } from 'src/hooks/useStoreContext.svelte'
  import SiteNavigationLink from 'src/lib/layout/SiteNavigationLink.svelte'
  import { authentication } from 'src/stores/authentication.svelte'

  const auth = useStoreContext(authentication)

</script>

<nav>
  <SiteNavigationLink to='/'>Home</SiteNavigationLink>
  <SiteNavigationLink to='unauthorized'>Unauthorized</SiteNavigationLink>
  <SiteNavigationLink to='forbidden'>Forbidden</SiteNavigationLink>
  <SiteNavigationLink to='not-found'>Not Found</SiteNavigationLink>
  {#if auth.state === 'signedIn'}
    <SiteNavigationLink to='protected'>Protected (signed in)</SiteNavigationLink>
  {/if}
</nav>

<style lang='postcss'>
  nav {
    display: flex;
    gap: 1rem;
  }
</style>
