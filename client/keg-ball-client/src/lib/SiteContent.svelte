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
    padding: 4rem 2rem 0.5rem;
    display: flex;
    flex-direction: column;

    @media (--dark-mode) {
      background-image: url('src/assets/background-dark.svg');
    }

    @media (--small-viewport) {
      padding: 2.5rem 1rem 0.5rem;
      background-size: 500px;
    }

  }
</style>
