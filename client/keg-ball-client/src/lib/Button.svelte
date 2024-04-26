<script lang='ts'>
  import type { Snippet } from 'svelte'

  let { children, onclick }: { children: Snippet, onclick: () => void } = $props()
</script>

<button {onclick}>
  {@render children()}
</button>

<style lang='postcss'>
  button {
    width: auto;
    padding: 0.5rem 1rem;
    min-height: 40px;
    background-color: var(--color-button-background);
    border: 1px solid var(--color-button-border);
    border-radius: 100vh;
    font-size: 14px;
    transition: background 0.1s;

    &:hover {
      background-color: var(--color-button-background-hover);
    }
  }
</style>
