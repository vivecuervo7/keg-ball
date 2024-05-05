<script lang='ts'>
  import { Link } from 'svelte-routing'

  interface ButtonProps {
    onclick: () => void
    type?: 'button'
  }

  interface SubmitButtonProps {
    onclick?: undefined
    type: 'submit'
  }

  interface LinkProps {
    onclick?: undefined
    type: 'link'
    to: string
  }

  let { ...props }: PropsWithChildren<ButtonProps | SubmitButtonProps | LinkProps> = $props()
</script>

{#if props.type === 'button' || props.onclick}
  <button onclick={props.onclick} type={props.type}>
    {@render props.children()}
  </button>
{:else if props.type === 'submit'}
  <button type={props.type}>
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
    text-align: center;
  }
</style>
