<script lang='ts'>
  import SiteBranding from './SiteBranding.svelte'
</script>

<header>
  <SiteBranding />
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
