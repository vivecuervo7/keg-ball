<script lang='ts'>
  import type { Snippet } from 'svelte'

  const { active, children }: { active: boolean, children: Snippet } = $props()
</script>

<span class:active>
  {@render children()}
</span>

<style lang='postcss'>
  span {
    @mixin heavy-font;

    color: var(--color-nav-link);
    font-size: 1.5rem;
    transition: color 0.15s;

    &.active {
      color: var(--color-nav-link-active);
    }

    &:hover {
      color: var(--color-nav-link-hover);
    }
  }
</style>
