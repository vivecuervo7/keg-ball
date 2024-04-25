<main>
</main>

<style lang='postcss'>
  main {
    overflow-y: auto;
    background-image: url('src/assets/background.svg');
    background-repeat: repeat-x;

    @media (--dark-mode) {
      background-image: url('src/assets/background-dark.svg');
    }

    @media (--small-viewport) {
      background-size: 500px;
    }

  }
</style>
