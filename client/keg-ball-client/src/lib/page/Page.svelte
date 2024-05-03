<script lang='ts'>
  import PageFooter from './PageFooter.svelte'

  const { children }: PropsWithChildren = $props()
</script>

<div class='root'>
  <div>
    {@render children()}
  </div>
  <PageFooter />
</div>

<style lang='postcss'>
  .root {
    display: grid;
    grid-template-rows: 1fr auto;
    height: 100%;
  }
</style>
