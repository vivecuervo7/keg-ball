<script lang='ts'>
  import Routes from 'src/lib/Routes.svelte'
  import SiteContent from 'src/lib/layout/SiteContent.svelte'
  import SiteHeader from 'src/lib/layout/SiteHeader.svelte'
  import SiteLoader from 'src/lib/layout/SiteLoader.svelte'
  import SiteNavigation from 'src/lib/layout/SiteNavigation.svelte'
  import { Router } from 'svelte-routing'
  import { createStoreContext, useStoreContext } from './hooks/useStoreContext.svelte'
  import { authStore } from './stores/authStore.svelte'
  import { userStore } from './stores/userStore.svelte'

  createStoreContext(userStore)
  const auth = useStoreContext(authStore)
</script>

<div>
  <SiteHeader />
  <SiteContent>
    <Router>
      <SiteNavigation />
      <Routes />
    </Router>
  </SiteContent>
</div>
<SiteLoader loading={auth.isLoading} />

<style lang='postcss'>
  div {
    display: grid;
    grid-template-rows: auto 1fr;
    background-color: var(--color-main-background);
    height: 100dvh;
    overflow: hidden;
    color: var(--color-main-foreground);
  }
</style>
