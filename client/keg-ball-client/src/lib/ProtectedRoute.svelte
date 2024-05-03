<script lang='ts'>
  import { useStoreContext } from 'src/hooks/useStoreContext.svelte'
  import { authStore } from 'src/stores/authStore.svelte'
  import { Route } from 'svelte-routing'
  import Unauthorized from './routes/Unauthorized.svelte'

  interface Props {
    path: string
  }

  const { path, children }: PropsWithChildren<Props> = $props()

  const auth = useStoreContext(authStore)
</script>

<Route {path}>
  {#if auth.signedIn}
    {@render children()}
  {:else}
    <Unauthorized />
  {/if}
</Route>
