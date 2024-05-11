<script lang="ts">
  import { page } from '$app/stores'
  import type { Snippet } from 'svelte'

  const { href, children }: { href: string; children: Snippet } = $props()

  let active = $derived($page.url.pathname.split('/')[1] === href.replace('/', ''))
</script>

<a {href} class:active>
  {@render children()}
</a>

<style lang="postcss">
  a {
    @mixin nav-link;
  }
</style>
