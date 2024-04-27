<script lang='ts'>
  import { Link } from 'svelte-routing'

  interface ButtonProps {
    onclick: () => void
  }

  interface LinkProps {
    onclick?: undefined
    to: string
  }

  let { ...props }: PropsWithChildren<ButtonProps | LinkProps> = $props()
</script>

{#if props.onclick}
  <button onclick={props.onclick}>
    {@render props.children()}
  </button>
{:else}
  <Link to={props.to}>
    <div>
      {@render props.children()}
    </div>
  </Link>
{/if}

<style lang='postcss'>
  button, div {
    @mixin button;
  }
</style>
