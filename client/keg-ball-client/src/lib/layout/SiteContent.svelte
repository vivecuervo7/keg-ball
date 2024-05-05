<script lang='ts'>
  let { children }: PropsWithChildren = $props()
</script>

<main>
  {@render children()}
</main>

<style lang='postcss'>
  main {
    display: flex;
    position: relative;
    flex-direction: column;
    background-image: url('src/assets/background.svg');
    background-repeat: repeat-x;
    padding: 5rem 2rem 0.5rem;
    overflow-y: auto;

    @media (--dark-mode) {
      background-image: url('src/assets/background-dark.svg');
    }

    @media (--small-viewport) {
      background-size: 500px;
      padding: 3.5rem 1rem 0.5rem;
    }
  }
</style>
