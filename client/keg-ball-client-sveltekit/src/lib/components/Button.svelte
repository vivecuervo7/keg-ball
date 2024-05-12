<script lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'link'
  style?: 'default' | 'danger'
  class?: string
}

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

let {
  style = 'default',
  class: externalClass,
  ...props
}: PropsWithChildren<Props & (ButtonProps | SubmitButtonProps | LinkProps)> = $props()
</script>

<style lang="postcss">
@import './Button.css';
</style>

{#if props.type === 'link'}
  <a href={props.href} class:danger={style === 'danger'} class={externalClass}>
    {@render props.children()}
  </a>
{:else if props.type === 'submit'}
  <button type="submit" class:danger={style === 'danger'} class={externalClass}>
    {@render props.children()}
  </button>
{:else}
  <button type="button" onclick={props.onclick} class:danger={style === 'danger'} class={externalClass}>
    {@render props.children()}
  </button>
{/if}
