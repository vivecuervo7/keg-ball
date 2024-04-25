<script lang='ts'>
  import SiteContent from './lib/SiteContent.svelte'
  import SiteHeader from './lib/SiteHeader.svelte'
  import SiteLoader from './lib/SiteLoader.svelte'
</script>

<div>
  <div class='layout'>
    <SiteHeader />
    <SiteContent />
  </div>
  <SiteLoader loading={false} />
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
