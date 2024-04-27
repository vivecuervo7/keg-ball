<script lang='ts'>
  import type { Snippet } from 'svelte'
  import { Link } from 'svelte-routing'

  const { to, children }: { to: string, children: Snippet } = $props()
</script>

<Link {to}>
  <div>
    {@render children()}
  </div>
</Link>

<style lang='postcss'>
  div {
    @mixin button;
  }
</style>
