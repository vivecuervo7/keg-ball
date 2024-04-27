<script lang='ts'>
  import PageFooter from './PageFooter.svelte'

  const { children }: PropsWithChildren = $props()
</script>

<div>
  {@render children()}
  <PageFooter />
</div>

<style lang='postcss'>
  div {
    display: grid;
    grid-template-rows: 1fr auto;
    height: 100%;
  }
</style>
