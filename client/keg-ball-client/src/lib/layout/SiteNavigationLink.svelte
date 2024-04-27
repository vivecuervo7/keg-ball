<script lang='ts'>
  import { Link } from 'svelte-routing'

  interface Props {
    to: string
  }

  const { to, children }: PropsWithChildren<Props> = $props()
</script>

<Link {to} let:active>
  <span class:active>
    {@render children()}
  </span>
</Link>

<style lang='postcss'>
  span {
    @mixin heavy-font;
    transition: color 0.15s;
    color: var(--color-nav-link);
    font-size: 1.5rem;

    &.active {
      color: var(--color-nav-link-active);
    }

    &:hover {
      color: var(--color-nav-link-hover);
    }
  }
</style>
