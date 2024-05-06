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
    @mixin heavy-font;
    @mixin responsive font-size, 1.5rem, 1.35rem, 1.2rem;
    color: var(--color-primary);
    transition: color var(--short-transition);

    &.active {
      color: var(--color-secondary);
    }

    &:hover {
      color: var(--color-tertiary);
    }
  }
</style>
