<script lang='ts'>
  import { useStoreContext } from 'src/hooks/useStoreContext.svelte'
  import { authentication } from 'src/stores/authentication.svelte'
  import { Route } from 'svelte-routing'
  import type { Snippet } from 'svelte'
  import Unauthorized from './routes/Unauthorized.svelte';

  const { path, children }: { path: string, children: Snippet } = $props()

  const auth = useStoreContext(authentication)
</script>

<Route {path}>
  {#if auth.state === 'signedIn'}
    {@render children()}
  {:else}
    <Unauthorized />
  {/if}
</Route>
