<script lang='ts'>
  import type { Snippet } from 'svelte'

  let { children, onclick }: { children: Snippet, onclick: () => void } = $props()
</script>

<button {onclick}>
  {@render children()}
</button>

<style lang='postcss'>
  button {
    @mixin button;
  }
</style>
