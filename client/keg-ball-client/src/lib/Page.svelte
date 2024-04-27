<script lang='ts'>
  import type { Snippet } from 'svelte'
  import SiteFooter from './SiteFooter.svelte';

  const { children }: { children: Snippet } = $props()
</script>

<div>
  {@render children()}
  <SiteFooter />
</div>

<style lang='postcss'>
  div {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr auto;
  }
</style>
