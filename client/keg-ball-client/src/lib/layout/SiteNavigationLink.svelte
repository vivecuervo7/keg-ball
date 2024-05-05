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
    @mixin nav-link;
  }
</style>
