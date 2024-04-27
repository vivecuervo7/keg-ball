<script lang='ts'>
  import { Link } from 'svelte-routing'
  import type { Snippet } from 'svelte'

  interface Props {
    to: string
    children: Snippet
  }

  const { to, children }: Props = $props()
</script>

<Link {to} let:active>
  <span class:active>
    {@render children()}
  </span>
</Link>

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
