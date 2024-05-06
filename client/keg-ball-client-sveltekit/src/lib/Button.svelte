<script lang="ts">
  interface ButtonProps {
    type?: 'button'
    onclick: () => void
  }

  interface SubmitButtonProps {
    type: 'submit'
  }

  interface LinkProps {
    type: 'link'
    href: string
  }

  let { ...props }: PropsWithChildren<ButtonProps | SubmitButtonProps | LinkProps> = $props()
</script>

{#if props.href}
  <a href={props.href}>
    {@render props.children()}
  </a>
{:else if props.type === 'submit'}
  <button type={props.type}>
    {@render props.children()}
  </button>
{:else}
  <button onclick={props.onclick}>
    {@render props.children()}
  </button>
{/if}

<style lang="postcss">
  button,
  a {
    display: inline-block;
    transition: background var(--short-transition);
    border-radius: 100vh;
    background-color: var(--button-background);
    padding: 0.75rem 2rem;
    width: auto;
    font-weight: bold;
    text-align: center;
    user-select: none;

    &:hover {
      background-color: var(--button-background-hover);
    }
  }
</style>
