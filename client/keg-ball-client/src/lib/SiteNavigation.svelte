<script lang='ts'>
  import { Link } from 'svelte-routing'
  import NavLink from './NavLink.svelte'
  import { useStoreContext } from 'src/hooks/useStoreContext.svelte'
  import { authentication } from 'src/stores/authentication.svelte'

  const auth = useStoreContext(authentication)

</script>

<nav>
  <Link to='/' let:active>
    <NavLink {active}>
      Home
    </NavLink>
  </Link>
  <Link to='/value/123' let:active>
    <NavLink {active}>
      Value
    </NavLink>
  </Link>
  <Link to='/not-exist' let:active>
    <NavLink {active}>
      NotFound
    </NavLink>
  </Link>
  {#if auth.state === 'signedIn'}
    <Link to='/protected' let:active>
      <NavLink {active}>
        Protected
      </NavLink>
    </Link>
  {/if}
</nav>
