<script lang="ts">
interface ButtonProps {
  type?: 'button'
  onclick: () => void
  style?: 'default' | 'danger'
}

interface SubmitButtonProps {
  type: 'submit'
  style?: 'default' | 'danger'
}

interface LinkProps {
  type: 'link'
  href: string
  style?: 'default' | 'danger'
}

let { style = 'default', ...props }: PropsWithChildren<ButtonProps | SubmitButtonProps | LinkProps> = $props()
</script>

{#if props.type === 'link'}
  <a href={props.href} class:danger={style === 'danger'}>
    {@render props.children()}
  </a>
{:else if props.type === 'submit'}
  <button type="submit" class:danger={style === 'danger'}>
    {@render props.children()}
  </button>
{:else}
  <button type="button" onclick={props.onclick} class:danger={style === 'danger'}>
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

  &.danger {
    background-color: var(--button-danger-background);

    &:hover {
      background-color: var(--button-danger-background-hover);
    }
  }
}
</style>
