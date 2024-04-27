<script lang='ts'>
  import NavLink from './NavLink.svelte'
  import { useStoreContext } from 'src/hooks/useStoreContext.svelte'
  import { authentication } from 'src/stores/authentication.svelte'

  const auth = useStoreContext(authentication)

</script>

<nav>
  <NavLink to='/'>Home</NavLink>
  <NavLink to='unauthorized'>Unauthorized</NavLink>
  <NavLink to='forbidden'>Forbidden</NavLink>
  <NavLink to='not-found'>Not Found</NavLink>
  {#if auth.state === 'signedIn'}
    <NavLink to='protected'>Protected (signed in)</NavLink>
  {/if}
</nav>

<style lang='postcss'>
  nav {
    display: flex;
    gap: 1rem;
  }
</style>
