<script lang='ts'>
  import { authentication } from 'src/stores/authentication.svelte'
  import SiteBranding from './SiteBranding.svelte'
  import { useStoreContext } from 'src/hooks/useStoreContext.svelte'

  const auth = useStoreContext(authentication)
</script>

<header>
  <SiteBranding />
  <span>{auth.user?.username}</span>
</header>

<style lang='postcss'>
  header {
    padding: 1rem 2rem;
    border-bottom: solid 1px var(--color-keyline);
    box-shadow: 0 0 16px rgb(0 0 0 / 0.25);

    @media (--small-viewport) {
      padding: 0.5rem 1rem;
    }
  }
</style>
