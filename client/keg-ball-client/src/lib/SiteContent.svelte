<script lang='ts'>
  import type { Snippet } from 'svelte'

  let { children }: { children?: Snippet } = $props()
</script>

<main>
  {#if children}
    {@render children()}
  {/if}
</main>

<style lang='postcss'>
  main {
    overflow-y: auto;
    background-image: url('src/assets/background.svg');
    background-repeat: repeat-x;
    padding: 5rem 1rem 1rem;
    display: flex;
    flex-direction: column;

    @media (--dark-mode) {
      background-image: url('src/assets/background-dark.svg');
    }

    @media (--small-viewport) {
      background-size: 500px;
    }

  }
</style>
