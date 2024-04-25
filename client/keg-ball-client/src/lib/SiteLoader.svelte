<script lang='ts'>
  import Square from 'src/lib/icons/Square.svelte'

  let { loading = true }: { loading: boolean } = $props()
</script>

<div class={`overlay ${loading ? 'loading' : ''}`}>
  <div class='spinner'>
    <Square className='square top-left' />
    <Square className='square top-right' />
    <Square className='square bottom-left' />
    <Square className='square bottom-right' />
  </div>
</div>

<style lang='postcss'>
  .overlay {
    position: fixed;
    inset: 0;
    background-color: rgb(255 255 255 / 0.5);
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.3s 0s, opacity 0.3s;

    @media (--dark-mode) {
      background-color: rgb(0 0 0 / 0.5);
    }

    &.loading {
      visibility: visible;
      opacity: 1;
    }

    .spinner {
      display: grid;
      grid-template-columns: repeat(2, clamp(30px,8vw, 50px));
      place-content: center;
      position: fixed;
      inset: 0;
    }

    /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
    :global(.square) {
      width: 100%;
      height: auto;
      color: var(--color-loading-spinner-inactive);
      animation: ease-in 2s infinite activate-square;
    }

    /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
    :global(.top-right) {
      animation-delay: 0.5s;
    }

    /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
    :global(.bottom-right) {
      animation-delay: 1s;
    }

    /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
    :global(.bottom-left) {
      animation-delay: 1.5s;
    }

    @keyframes activate-square {
      0% {
        color: var(--color-loading-spinner-inactive);
      }

      10% {
        color: var(--color-loading-spinner-active);
      }

      20% {
        color: var(--color-loading-spinner-active);
      }

      30% {
        color: var(--color-loading-spinner-inactive);
      }

      100% {
        color: var(--color-loading-spinner-inactive);
      }
    }
  }
</style>
