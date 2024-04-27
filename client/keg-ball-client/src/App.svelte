<script lang='ts'>
  import { authentication } from './stores/authentication.svelte'
  import { useStoreContext } from './hooks/useStoreContext.svelte'
  import SiteContent from './lib/SiteContent.svelte'
  import SiteHeader from './lib/SiteHeader.svelte'
  import SiteLoader from './lib/SiteLoader.svelte'
  import Routes from './lib/Routes.svelte'
  import SiteNavigation from './lib/SiteNavigation.svelte'
  import { Router } from 'svelte-routing'
  import SiteFooter from './lib/SiteFooter.svelte'

  const auth = useStoreContext(authentication)
</script>

<div>
  <div class='layout'>
    <SiteHeader />
    <SiteContent>
      <Router>
        <SiteNavigation />
        <Routes />
      </Router>
    </SiteContent>
    <!-- <SiteFooter /> -->
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
</style>
