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

<style lang="postcss">
@import './Button.css';
</style>

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
