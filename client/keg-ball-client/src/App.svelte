<script lang='ts'>
  import Routes from 'src/lib/Routes.svelte'
  import SiteContent from 'src/lib/layout/SiteContent.svelte'
  import SiteHeader from 'src/lib/layout/SiteHeader.svelte'
  import SiteLoader from 'src/lib/layout/SiteLoader.svelte'
  import SiteNavigation from 'src/lib/layout/SiteNavigation.svelte'
  import { Router } from 'svelte-routing'
  import { useStoreContext } from './hooks/useStoreContext.svelte'
  import { authentication } from './stores/authentication.svelte'

  const auth = useStoreContext(authentication)
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
