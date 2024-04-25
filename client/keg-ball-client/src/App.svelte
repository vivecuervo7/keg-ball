<script lang='ts'>
  import SiteContent from './lib/SiteContent.svelte'
  import SiteHeader from './lib/SiteHeader.svelte'
</script>

<div class='app'>
  <SiteHeader />
  <SiteContent />
</div>

<style lang='postcss'>
  .app {
    background-color: var(--color-main-background);
    color: var(--color-main-foreground);
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100dvh;
    overflow: hidden;
  }
</style>
